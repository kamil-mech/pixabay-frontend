import { ImageDetails } from 'store/useImageDetailStore'

const getRandomIntInclusive = (min: number, max: number): number => {
  min = Math.ceil(min)
  max = Math.floor(max)
  // The maximum is inclusive and the minimum is inclusive
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomImage = (full?: boolean): ImageDetails | Partial<ImageDetails> => {
  const width = getRandomIntInclusive(200, 800)
  const height = getRandomIntInclusive(200, 800)
  const url = `https://picsum.photos/${width}/${height}`
  const imageSources = {
    pageURL: url,
    previewURL: url,
    previewWidth: width,
    previewHeight: height,
    webformatURL: url,
    webformatWidth: width,
    webformatHeight: height,
    largeImageURL: url,
    imageWidth: width,
    imageHeight: height,
    fullHDURL: url,
    // For meta table extension detector
    imageURL: url + '.jpg'
  }
  if (!full) return imageSources
  const id = parseInt(Date.now().toString() + Math.random().toString().slice(-8))
  const complete: ImageDetails = {
    ...imageSources,
    id,
    type: 'photo',
    tags: 'buddha, statue, monument',
    imageSize: 1611584,
    views: 4423,
    downloads: 2641,
    favorites: 11,
    likes: 15,
    comments: 2,
    user_id: 3989469,
    user: 'travelphotographer',
    userImageURL: 'https://cdn.pixabay.com/user/2016/09/02/10-09-22-263_250x250.png',
    id_hash: id.toString()
  }
  return complete
}
