import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import throttle from 'lodash.throttle'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`

const gridSpacing = 16
const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${gridSpacing}px;
  }
`

const GridItem = styled.img`
  width: 100%;
  height: auto;
`

interface GridImage {
  id: string
  width: number
  height: number
  src: string
}

interface UpscaleRef {
  current: number
}
interface ResizedImage {
  image: GridImage
  // image width after initial scaling against thresholdHeight
  scaledImageWidth: number
  // Additional multiplier to be used to ensure images fill 100% row width
  upscaleRef: UpscaleRef
}
interface Rows {
  rows: ResizedImage[][]
}

// Heuristics:
// Given set of pictures, if they were all exactly thresholdHeight, and they kept their aspect ratio,
// would their total width be more than container width?
// If yes, then start a new row and "flush" previous row by stretching all items to fill width
// if no, would total width left be enough to assign a new one?
//   if yes, then add one and continue iteration
//   if no, then assume we will stretch to compensate
// Sample computeSpace execution times on a set of 500:
// 10.188232421875 ms
// 6.321044921875 ms
// 8.89697265625 ms
const computeSpace = (maxWidth: number, images: GridImage[], thresholdHeight: number): Rows => {
  // Used to track total width assigned in given row
  // Important to keep it below maxWidth at all times
  let totalWidth = 0
  // All images are shipped with a ref to post-calculatory multiplier
  // It is impossible to know its value in middle of traversal
  // And it would be overkill to traverse entire collection again just to update
  // the final value with stretch
  // Consumer of this output will iterate the images anyway
  // So here we are giving it a handy ref to the value it needs to apply
  let upscaleRef = { current: 1 }
  const rows = [[]]
  for (let i = 0; i < images.length; i++) {
    const image = images[i]
    // Answers the question: how many px of width do I get per 1px of height in this image
    // Think normalization, we are dropping magnitude but keep the aspect ratio itself
    const heightToWidthVector = image.width / image.height
    // e.g. an image with aspect ratio 1.5 (300x200) would require 240 width to reach 160 height
    const scaledImageWidth = heightToWidthVector * thresholdHeight
    if (totalWidth + gridSpacing + scaledImageWidth > maxWidth) {
      // If this image would cause overflow, "flush" current row
      // by assigning final multiplier - to be used for stretching to 100% container width
      const spaceBetweens = rows[rows.length - 1].length - 1
      const upscale = (maxWidth - (gridSpacing * spaceBetweens)) / totalWidth
      upscaleRef.current = upscale
      upscaleRef = { current: 1 }

      // And then start a new one
      totalWidth = 0
      rows.push([])
    }
    totalWidth += scaledImageWidth
    // @ts-expect-error (not sure why typescript infers type never)
    rows[rows.length - 1].push({ image, scaledImageWidth, upscaleRef })
  }
  return { rows }
}

interface HorizontalImageGridProps {
  startingWidth?: number
  images: GridImage[]
  thresholdHeight: number
}

const HorizontalImageGrid = ({ startingWidth, images, thresholdHeight }: HorizontalImageGridProps): JSX.Element => {
  // Keep track of container width
  const ref = useRef<HTMLElement | null>(null)
  const [width, setWidth] = useState(startingWidth ?? 0)
  const refCb = useCallback((newRef: HTMLElement | null) => {
    ref.current = newRef
    if (ref.current) setWidth(ref.current.getBoundingClientRect().width)
  }, [setWidth])

  // Recalculature on resize - there's probably some room for optimization here
  useEffect(() => {
    const listener = throttle((): void => {
      setWidth(ref?.current?.getBoundingClientRect().width ?? 1080)
    }, 1000 / 120)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })

  const { rows } = useMemo(() => computeSpace(width, images, thresholdHeight), [width, images, thresholdHeight])
  return (
    <Wrapper ref={refCb}>
      {
        rows.map((row, i) => {
          return (
            <GridRow key={i}>
              {row.map(({ image, scaledImageWidth, upscaleRef }) => (
                <div key={image.id} style={{ width: scaledImageWidth * upscaleRef.current }}>
                  {
                    <GridItem src={image.src} />
                  }
                </div>
              ))}
            </GridRow>
          )
        })
      }
    </Wrapper>
  )
}

export default HorizontalImageGrid
