import { TFunction } from 'i18next'
import uniq from 'lodash.uniq'
import React, { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { ThemeProps, useTheme } from 'styled-components'

import { ImageDetails } from 'store/useImageDetailStore'
import ReportIcon from 'icons/ReportIcon'
import EditorsChoiceIcon from 'icons/EditorsChoiceIcon'
import Text from 'atoms/Text'
import { getImageSrcSet } from 'utils'

const StyledEditorsChoiceIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 4px;
  transition: background-color 0.3s;
  margin-top: 2px;

  &:hover {
    border-radius: 2px;
    background-color: hsla(0, 0%, 100%, .3);
  }
`

const ReportShade = styled.div`
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  opacity: 0.8;
  cursor: pointer;
  &&:hover {
    opacity: 1;
  }
`

const ImageOverlay = styled.div`
  display: flex;
  /* Not visible until hovered */
  opacity: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  transition: 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.imageOverlay};
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg,rgba(0,0,0,.5) 0,transparent);
  overflow: hidden;
  padding: ${({ theme }) => theme.spacing(1)}px;
  padding-bottom: 0;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`
const OverlayTags = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  > * {
    cursor: pointer;
    padding: 4px;
    transition: background-color 0.3s;
  }
  > *:hover {
    border-radius: 2px;
    background-color: hsla(0, 0%, 100%, .3);
  }
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(1)}px;
  }
`

type SizedProps = ThemeProps<Theme> & {
  maxWidth: number
  maxHeight: number
}

const SizedImageContainer = styled.div<SizedProps>`
  position: relative;
  max-width: ${({ maxWidth }) => maxWidth}px;
  max-height: ${({ maxHeight }) => maxHeight}px;
  width: 100%;
  height: auto;
  &:hover ${ImageOverlay} {
    opacity: 1;
  }
`
const Image = styled.img`
  width: 100%;
  height: 100%;
`

const capitalize = (str: string): string => {
  const [head, ...tail] = str
  return head.toUpperCase() + tail.join('')
}

const getName = (imageDetails: ImageDetails | null, t: TFunction): string => {
  if (!imageDetails) return ''
  return uniq(imageDetails.tags.replace(/, /gi, ' ').split(' ')).slice(0, 3).map(str => {
    return capitalize(t(str))
  }).join(' ')
}

interface SizedImageProps {
  imageDetails: ImageDetails
}
const SizedImage = ({ imageDetails }: SizedImageProps): JSX.Element => {
  const [forceOverlay, setForceOverlay] = useState(true)
  const palette = useTheme().palette
  const { t } = useTranslation()
  const {
    webformatWidth,
    webformatHeight,
    webformatURL,
    tags
  } = imageDetails

  // scale to max in one axis
  const landscape = webformatWidth > webformatHeight
  const scale = landscape ? webformatHeight / webformatWidth : webformatWidth / webformatHeight
  const dimensions = landscape ? {
    x: 960,
    y: Math.round(scale * 960)
  } : {
    x: Math.round(scale * 720),
    y: 720
  }

  const name = useMemo(() => getName(imageDetails, t), [imageDetails, t])
  const tagsArr = tags.split(', ')
  return (
    <SizedImageContainer
      maxWidth={dimensions.x}
      maxHeight={dimensions.y}
      onMouseLeave={() => setForceOverlay(false)}>
      <ImageOverlay
        style={forceOverlay ? { opacity: 1 } : {}}
        data-testid="overlay">
        <StyledEditorsChoiceIcon>
          <EditorsChoiceIcon/>
        </StyledEditorsChoiceIcon>
        <OverlayTags>
          {tagsArr.map(tag => (
            <Text key={tag} h5 color={palette.light}>
              {capitalize(t(tag))}
            </Text>
          ))}
        </OverlayTags>
        <ReportShade>
          <ReportIcon />
        </ReportShade>
      </ImageOverlay>
      <Image
        srcSet={getImageSrcSet(imageDetails)}
        src={webformatURL ?? ''} alt={name}>
      </Image>
    </SizedImageContainer>
  )
}

export default SizedImage
