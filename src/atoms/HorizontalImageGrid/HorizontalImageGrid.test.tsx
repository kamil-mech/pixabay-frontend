import getRelated from 'contract/samples/get-related'
import { randomImage } from 'contract/samples/utils'

import { ImageDetails } from 'store/useImageDetailStore'

import { computeSpace } from './HorizontalImageGrid'

test('correctly assigns space', async () => {
  const maxWidth = 300
  const images = getRelated.success.response
  const thresholdHeight = 120
  const maxRows = 3
  const { rows } = computeSpace(maxWidth, images, thresholdHeight, maxRows)
  expect(rows.length).toEqual(3)
  expect(rows.flatMap(row => row).length > 2).toEqual(true)
  expect(rows.flatMap(row => row).length > 2).toEqual(true)
  for (const row of rows) {
    const totalRowWidth = row.reduce((accum, { scaledImageWidth, upscaleRef, itemPadding }) => {
      return accum + itemPadding + (scaledImageWidth * upscaleRef.current)
    }, 0)
    // Total width should be less than max width
    // If it's more, it means we have inserted too many images
    expect(totalRowWidth <= maxWidth + 0.001).toBe(true)
    // If it's less than 99%, we haven't inserted enough
    // or failed to stretch
    expect(totalRowWidth > maxWidth * 0.99).toBe(true)
    for (const { image, scaledImageWidth, upscaleRef } of row) {
      const widthToHeightVector = image.webformatHeight / image.webformatWidth
      const finalItemHeight = widthToHeightVector * scaledImageWidth * upscaleRef.current
      // All heights should be above threshold
      // If those are less, that means we have inserted too many images
      // An exception is when there is a single, oversized, landscape image
      // Force-inserted into a small row
      const hasSiblings = row.length > 1
      expect(finalItemHeight > (hasSiblings ? thresholdHeight : 0)).toBe(true)

      // Note we are not always checking upscaleRef.current >= 1
      // because sometimes images fed are so large that a single
      // image could fit entire row and still would have to be downscaled
      // There are only two options to handle such situation -
      // Downscale or drop the image - and we don't want to do the latter
      expect(upscaleRef.current > (hasSiblings ? 1 : 0)).toEqual(true)
    }
  }
})

test('correctly assigns random space (narrow container)', async () => {
  // This test bombards the function with random values
  // in order to exercise its reliability in ambiguous conditions
  const maxWidth = 300
  // @ts-expect-error
  const images: ImageDetails = new Array(1000).fill('').map(() => randomImage(true))
  const thresholdHeight = 80
  // @ts-expect-error
  const { rows } = computeSpace(maxWidth, images, thresholdHeight)
  rows.pop() // skip checking last row - it's guaranteed to be incomplete
  expect(rows.flatMap(row => row).length > 2).toEqual(true)
  for (const row of rows) {
    const totalRowWidth = row.reduce((accum, { scaledImageWidth, upscaleRef, itemPadding }) => {
      return accum + itemPadding + (scaledImageWidth * upscaleRef.current)
    }, 0)
    // Total width should be less than max width
    // If it's more, it means we have inserted too many images
    expect(totalRowWidth <= maxWidth + 0.001).toBe(true)
    // If it's less than 99%, we haven't inserted enough
    // or failed to stretch
    expect(totalRowWidth > maxWidth * 0.99).toBe(true)
    for (const { image, scaledImageWidth, upscaleRef } of row) {
      const widthToHeightVector = image.webformatHeight / image.webformatWidth
      const finalItemHeight = widthToHeightVector * scaledImageWidth * upscaleRef.current
      // All heights should be above threshold
      // If those are less, that means we have inserted too many images
      // An exception is when there is a single, oversized, landscape image
      // Force-inserted into a small row
      const hasSiblings = row.length > 1
      expect(finalItemHeight > (hasSiblings ? thresholdHeight : 0)).toBe(true)

      // Note we are not always checking upscaleRef.current >= 1
      // because sometimes images fed are so large that a single
      // image could fit entire row and still would have to be downscaled
      // There are only two options to handle such situation -
      // Downscale or drop the image - and we don't want to do the latter
      expect(upscaleRef.current > (hasSiblings ? 1 : 0)).toEqual(true)
    }
  }
})

test('correctly assigns random space (medium container)', async () => {
  // This test bombards the function with random values
  // in order to exercise its reliability in ambiguous conditions
  const maxWidth = 600
  // @ts-expect-error
  const images: ImageDetails = new Array(1000).fill('').map(() => randomImage(true))
  const thresholdHeight = 80
  // @ts-expect-error
  const { rows } = computeSpace(maxWidth, images, thresholdHeight)
  rows.pop() // skip checking last row - it's guaranteed to be incomplete
  expect(rows.flatMap(row => row).length > 2).toEqual(true)
  for (const row of rows) {
    const totalRowWidth = row.reduce((accum, { scaledImageWidth, upscaleRef, itemPadding }) => {
      return accum + itemPadding + (scaledImageWidth * upscaleRef.current)
    }, 0)
    // Total width should be less than max width
    // If it's more, it means we have inserted too many images
    expect(totalRowWidth <= maxWidth + 0.001).toBe(true)
    // If it's less than 99%, we haven't inserted enough
    // or failed to stretch
    expect(totalRowWidth > maxWidth * 0.99).toBe(true)
    for (const { image, scaledImageWidth, upscaleRef } of row) {
      const widthToHeightVector = image.webformatHeight / image.webformatWidth
      const finalItemHeight = widthToHeightVector * scaledImageWidth * upscaleRef.current
      // All heights should be above threshold
      // If those are less, that means we have inserted too many images
      // An exception is when there is a single, oversized, landscape image
      // Force-inserted into a small row
      const hasSiblings = row.length > 1
      expect(finalItemHeight > (hasSiblings ? thresholdHeight : 0)).toBe(true)

      // Note we are not always checking upscaleRef.current >= 1
      // because sometimes images fed are so large that a single
      // image could fit entire row and still would have to be downscaled
      // There are only two options to handle such situation -
      // Downscale or drop the image - and we don't want to do the latter
      expect(upscaleRef.current > (hasSiblings ? 1 : 0)).toEqual(true)
    }
  }
})

test('correctly assigns random space (wide container)', async () => {
  // This test bombards the function with random values
  // in order to exercise its reliability in ambiguous conditions
  const maxWidth = 1600
  // @ts-expect-error
  const images: ImageDetails = new Array(1000).fill('').map(() => randomImage(true))
  const thresholdHeight = 80
  // @ts-expect-error
  const { rows } = computeSpace(maxWidth, images, thresholdHeight)
  rows.pop() // skip checking last row - it's guaranteed to be incomplete
  expect(rows.flatMap(row => row).length > 2).toEqual(true)
  for (const row of rows) {
    const totalRowWidth = row.reduce((accum, { scaledImageWidth, upscaleRef, itemPadding }) => {
      return accum + itemPadding + (scaledImageWidth * upscaleRef.current)
    }, 0)
    // Total width should be less than max width
    // If it's more, it means we have inserted too many images
    expect(totalRowWidth <= maxWidth + 0.001).toBe(true)
    // If it's less than 99%, we haven't inserted enough
    // or failed to stretch
    expect(totalRowWidth > maxWidth * 0.99).toBe(true)
    for (const { image, scaledImageWidth, upscaleRef } of row) {
      const widthToHeightVector = image.webformatHeight / image.webformatWidth
      const finalItemHeight = widthToHeightVector * scaledImageWidth * upscaleRef.current
      // All heights should be above threshold
      // If those are less, that means we have inserted too many images
      // An exception is when there is a single, oversized, landscape image
      // Force-inserted into a small row
      const hasSiblings = row.length > 1
      expect(finalItemHeight > (hasSiblings ? thresholdHeight : 0)).toBe(true)

      // Note we are not always checking upscaleRef.current >= 1
      // because sometimes images fed are so large that a single
      // image could fit entire row and still would have to be downscaled
      // There are only two options to handle such situation -
      // Downscale or drop the image - and we don't want to do the latter
      expect(upscaleRef.current > (hasSiblings ? 1 : 0)).toEqual(true)
    }
  }
})
