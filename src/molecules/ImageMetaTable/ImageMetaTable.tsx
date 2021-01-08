import React from 'react'
import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import Text from 'atoms/Text'
import { ImageDetails } from 'store/useImageDetailStore'

const MetaTable = styled.table`
  width: 100%;
  td + td {
    text-align: right;
  }
`
interface ImageMetaTableProps {
  imageDetails: ImageDetails
}
const ImageMetaTable = ({ imageDetails }: ImageMetaTableProps): JSX.Element => {
  const { webformatURL, imageWidth, imageHeight, views, downloads } = imageDetails
  const palette = useTheme().palette
  const type = webformatURL.split('.').reverse()[0].split('?')[0].toUpperCase()
  const { t } = useTranslation()
  return (
    <Text color={palette.darkEmphasis}>
      <MetaTable>
        <tbody>
          <tr>
            <td>{t('image-type')}</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>{t('resolution')}</td>
            <td>{`${imageWidth}x${imageHeight}`}</td>
          </tr>
          <tr>
            <td>{t('views')}</td>
            <td>{views}</td>
          </tr>
          <tr>
            <td>{t('downloads')}</td>
            <td>{downloads}</td>
          </tr>
        </tbody>
      </MetaTable>
    </Text>
  )
}

export default ImageMetaTable
