import getRelated from 'contract/samples/get-related'

import { computeSpace, gridSpacing } from './HorizontalImageGrid'

test('correctly assigns space', async () => {
  const maxWidth = 300
  const images = getRelated.success.response
  const thresholdHeight = 120
  const maxRows = 3
  const { rows } = computeSpace(maxWidth, images, thresholdHeight, maxRows)
  expect(rows.length).toEqual(3)
  expect(rows.flatMap(row => row).length > 2).toEqual(true)
  for (const row of rows) {
    const totalRowWidth = row.reduce((accum, { scaledImageWidth, upscaleRef }) => {
      return accum + gridSpacing + (scaledImageWidth * upscaleRef.current)
    }, 0) - gridSpacing
    // Total width should be less than max width
    // If its more, it means we have inserted too many images
    expect(totalRowWidth <= maxWidth).toBe(true)
    // If its less than 99%, we haven't inserted enough
    // or failed to stretch
    expect(totalRowWidth > maxWidth * 0.99).toBe(true)
    for (const { image, scaledImageWidth, upscaleRef } of row) {
      const widthToHeightVector = image.webformatHeight / image.webformatWidth
      const finalItemHeight = widthToHeightVector * scaledImageWidth * upscaleRef.current
      // All heights should be above threshold
      // If those are less, that means we have inserted too many images
      expect(finalItemHeight > thresholdHeight).toBe(true)
    }
  }
})
