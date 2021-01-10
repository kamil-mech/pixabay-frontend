import { TFunction } from 'i18next'
import uniq from 'lodash.uniq'

import { ImageDetails } from 'store/useImageDetailStore'

export const getImageSrcSet = (imageDetails: ImageDetails): string => {
  const {
    webformatWidth,
    webformatHeight,
    webformatURL,
    largeImageURL
  } = imageDetails
  const base = {
    width: webformatWidth,
    height: webformatHeight,
    url: webformatURL
  }

  const upscaled = {
    // Unfortunately we do not have this info sent directly
    // However docs specify this image resource is always scaled to 1280
    // https://pixabay.com/api/docs/
    width: 1280,
    height: 1280,
    url: largeImageURL
  }

  const longestAxis = (item: typeof base): number => Math.max(item.width, item.height)
  const srcSetDiff = longestAxis(upscaled) / longestAxis(base)
  return `${base.url} 1x, ${upscaled.url} ${srcSetDiff.toFixed(3)}x`
}

export const capitalize = (str: string): string => {
  const [head, ...tail] = str
  return head.toUpperCase() + tail.join('')
}

export const getImageName = (imageDetails: ImageDetails | null, t: TFunction): string => {
  if (!imageDetails) return ''
  return uniq(imageDetails.tags.replace(/, /gi, ' ').split(' ')).slice(0, 3).map(str => {
    return capitalize(t(str))
  }).join(' ')
}
