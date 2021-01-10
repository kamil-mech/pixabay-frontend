import { randomImage } from './utils'

const fixture = {
  webRoute: '/',
  success: {
    webUrl: '/',
    request: {
      url: '/api?id=5000648&key=6473511-0417f2cad683f1bee54cafe15'
    },
    response: [{
      id: 5000648,
      pageURL: 'https://pixabay.com/photos/city-shanghai-china-night-building-5000648/',
      type: 'photo',
      tags: 'city, shanghai, china',
      previewURL: 'https://cdn.pixabay.com/photo/2020/04/04/03/08/city-5000648_150.jpg',
      previewWidth: 150,
      previewHeight: 100,
      webformatURL: 'https://pixabay.com/get/53e0d5434c56a414f1dc8460962e3379163adfe44e507748752d7cd1904bc7_640.jpg',
      webformatWidth: 640,
      webformatHeight: 427,
      largeImageURL: 'https://pixabay.com/get/53e0d5434c56a414f6da8c7dda79317a123cdbe4524c704f742f79d3924ac35a_1280.jpg',
      imageWidth: 5000,
      imageHeight: 3333,
      imageSize: 7372950,
      views: 92608,
      downloads: 78826,
      favorites: 167,
      likes: 243,
      comments: 168,
      user_id: 11952162,
      user: 'zhuwei06191973',
      userImageURL: 'https://cdn.pixabay.com/user/2021/01/01/13-33-20-214_250x250.jpg',
      id_hash: '5000648',
      fullHDURL: 'https://pixabay.com/get/53e0d5434c56a414f6d1867dda79317a123cdbe4524c704f742f79d3924ac35a_1920.jpg',
      imageURL: 'https://pixabay.com/get/53e0d5434c56a414ea898279c02b327f1422dfe35251734e70287dd6.jpg'
    }]
  },
  // Cause: invalid key
  error: {
    webUrl: '/',
    request: {
      url: '/api?id=5000648&key=1111111-1111111111111111111111111'
    },
    response: new Error('Request failed with status code 400')
  }
}

// Links expire so we have to replace them with something
// permanent to be able to render storybook properly
// @ts-expect-error
if (window.storybook) {
  for (const response of fixture.success.response) {
    Object.assign(response, randomImage())
  }
}

export default fixture
