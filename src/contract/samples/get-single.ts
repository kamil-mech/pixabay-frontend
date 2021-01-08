import traverse from 'traverse'
const key = '6473511-0417f2cad683f1bee54cafe15'

const fixture = {
  webRoute: '/:category/:photoSlug',
  success: {
    webUrl: '/photos/buddha-statue-monument-buddhism-5868759/',
    request: {
      url: `/api?id=5868759&key=${key}`
    },
    faultyResponse: new Error('Request failed with status code 404'),
    response: [{
      id: 5868759,
      pageURL: 'https://pixabay.com/photos/buddha-statue-monument-buddhism-5868759/',
      type: 'photo',
      tags: 'buddha, statue, monument',
      previewURL: 'https://cdn.pixabay.com/photo/2020/12/28/22/48/buddha-5868759_150.jpg',
      previewWidth: 99,
      previewHeight: 150,
      webformatURL: 'https://pixabay.com/get/53e8d34b4d57a514f1dc8460962e3379163adfe44e507748752f7ad49248c3_640.jpg',
      webformatWidth: 424,
      webformatHeight: 640,
      largeImageURL: 'https://pixabay.com/get/53e8d34b4d57a514f6da8c7dda79317a123cdbe4524c704f742f7bd59748c05e_1280.jpg',
      imageWidth: 3264,
      imageHeight: 4928,
      imageSize: 1611584,
      views: 4423,
      downloads: 2641,
      favorites: 11,
      likes: 15,
      comments: 2,
      user_id: 3989469,
      user: 'travelphotographer',
      userImageURL: 'https://cdn.pixabay.com/user/2016/12/12/17-25-14-15_250x250.jpg',
      id_hash: '5868759',
      fullHDURL: 'https://pixabay.com/get/53e8d34b4d57a514f6d1867dda79317a123cdbe4524c704f742f7bd59748c05e_1920.jpg',
      imageURL: 'https://pixabay.com/get/53e8d34b4d57a514ea898279c02b327f1422dfe352517148752a7ed2.jpg'
    }]
  },
  error: {
    webUrl: '/photos/nowhere-999999999999999999999999999999999999/',
    request: {
      url: `/api?id=999999999999999999999999999999999999&key=${key}`
    },
    faultyResponse: new Error('Request failed with status code 400'),
    response: new Error('Request failed with status code 400')
  }
}

// Links expire so we have to replace them with something
// permanent to be able to render storybook properly
const loremPicsumLink = 'https://i.picsum.photos/id/1016/477/720.jpg?hmac=G24ybRFC0PXHAHwtb0PfDOikIX204AGDTjr4jJCvMq4'
traverse(fixture).forEach(function (x: any) {
  if (typeof x === 'string' && x.match(/http.+?\.jpg/)) {
    this.update(loremPicsumLink)
  }
})

export default fixture
