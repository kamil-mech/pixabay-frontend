import getSingle from 'contract/samples/get-single'

import { getImageSrcSet, capitalize, getImageName } from './utils'

test('generates srcSet from image', async () => {
  const image = { ...getSingle.success.response[0] }
  let srcSet = [
    'https://pixabay.com/get/53e8d34b4d57a514f1dc8460962e3379163adfe44e507748752f7ad49248c3_640.jpg 1x,',
    'https://pixabay.com/get/53e8d34b4d57a514f6da8c7dda79317a123cdbe4524c704f742f7bd59748c05e_1280.jpg 2.000x'
  ]
  expect(getImageSrcSet(image)).toEqual(srcSet.join(' '))

  image.webformatWidth *= 0.75
  image.webformatHeight *= 0.75
  srcSet = [
    'https://pixabay.com/get/53e8d34b4d57a514f1dc8460962e3379163adfe44e507748752f7ad49248c3_640.jpg 1x,',
    'https://pixabay.com/get/53e8d34b4d57a514f6da8c7dda79317a123cdbe4524c704f742f7bd59748c05e_1280.jpg 2.667x'
  ]
  expect(getImageSrcSet(image)).toEqual(srcSet.join(' '))
})

test('capitalizes', async () => {
  expect(capitalize('foo')).toEqual('Foo')
})

test('generates image name based on tags', async () => {
  const mockT = (str: string): string => 'translated' + str
  expect(getImageName(getSingle.success.response[0], mockT)).toEqual('Translatedbuddha Translatedstatue Translatedmonument')
})
