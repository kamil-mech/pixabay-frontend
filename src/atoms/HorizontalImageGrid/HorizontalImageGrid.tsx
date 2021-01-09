import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import styled from 'styled-components'
import throttle from 'lodash.throttle'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { ImageDetails } from 'store/useImageDetailStore'
import { getImageName, getImageSrcSet } from 'utils'

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`

export const gridSpacing = 16
const GridRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  > * + * {
    margin-left: ${gridSpacing}px;
  }
  > * {
    flex-shrink: 1;
    flex-grow: 0;
  }
`

const GridItem = styled.img`
  width: 100%;
  height: auto;
`

interface UpscaleRef {
  current: number
}
interface ResizedImage {
  image: ImageDetails
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
export const computeSpace = (maxWidth: number, images: ImageDetails[], thresholdHeight: number, maxRows?: number): Rows => {
  // Used to track total width assigned in given row
  // Important to keep it below maxWidth at all times
  // Note this does not account for padding,
  // because later we use this var for upscaling
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
    const heightToWidthVector = image.imageWidth / image.imageHeight
    // e.g. an image with aspect ratio 1.5 (300x200) would require 240 width to reach 160 height
    const scaledImageWidth = heightToWidthVector * thresholdHeight
    const spaceBetweens = rows[rows.length - 1].length - 1
    const totalPadding = gridSpacing * spaceBetweens
    if (totalWidth + gridSpacing + scaledImageWidth > maxWidth) {
      // If this image would cause overflow, "flush" current row
      // by assigning final multiplier - to be used for stretching to 100% container width
      const upscale = (maxWidth - totalPadding) / totalWidth
      upscaleRef.current = upscale
      upscaleRef = { current: 1 }

      // And then start a new one
      if (maxRows && maxRows === rows.length) {
        return { rows }
      }
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
  images: ImageDetails[]
  thresholdHeight: number
  maxRows?: number
}

const HorizontalImageGrid = (props: HorizontalImageGridProps): JSX.Element => {
  const { t } = useTranslation()
  const { startingWidth, images, thresholdHeight, maxRows } = props
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
      setWidth(ref?.current?.getBoundingClientRect().width ?? startingWidth ?? 300)
    }, 1000 / 120)
    window.addEventListener('resize', listener)
    return () => window.removeEventListener('resize', listener)
  })

  const { rows } = useMemo(() => {
    return computeSpace(width, images, thresholdHeight, maxRows)
  }, [width, images, thresholdHeight, maxRows])

  return (
    <Wrapper ref={refCb}>
      {rows.map((row, i) => {
        return (
          <GridRow key={i}>
            {row.map(({ image: imageDetails, scaledImageWidth, upscaleRef }) => (
              <div key={imageDetails.id} style={{ flexBasis: scaledImageWidth * upscaleRef.current }}>
                <Link to={imageDetails.pageURL.replace('https://pixabay.com', '')}>
                  <GridItem src={imageDetails.webformatURL} srcSet={getImageSrcSet(imageDetails)} alt={getImageName(imageDetails, t)} />
                </Link>
              </div>
            ))}
          </GridRow>
        )
      })}
    </Wrapper>
  )
}

export default HorizontalImageGrid
