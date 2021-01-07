import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import uniq from 'lodash.uniq'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'

import Text from 'atoms/Text'
import HomeLayout from 'templates/HomeLayout'
import useImageDetailStore, { ImageDetails } from 'store/useImageDetailStore'

const getName = (imageDetails: ImageDetails | null, t: TFunction): string => {
  if (!imageDetails) return ''
  return uniq(imageDetails.tags.replace(/, /gi, ' ').split(' ')).slice(0, 3).map(str => {
    const [head, ...tail] = t(str)
    return head.toUpperCase() + tail.join('')
  }).join(' ')
}

const ImageDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`
const SizedImage = styled.img`
  height: 500px;
`
interface ImageDetailsProps {
  imageDetails: ImageDetails | null
}
const ImageDetailsContent = ({ imageDetails }: ImageDetailsProps): JSX.Element => {
  const { t } = useTranslation()
  const name = useMemo(() => getName(imageDetails, t), [imageDetails, t])
  useEffect(() => {
    document.title = name
  }, [name])
  return (
    <ImageDetailsWrapper>
      <Text>
        {name}
      </Text>
      <div>
        <SizedImage src={imageDetails?.imageURL ?? ''} alt={name}/>
      </div>
      <Text>
        {`${t('by')} ${imageDetails?.user ?? ''}`}
      </Text>
    </ImageDetailsWrapper>
  )
}

const ImageDetailsPage = (): JSX.Element => {
  const match = useRouteMatch<AppMatch>()
  const id = match.params.photoSlug?.split('-').reverse()[0] ?? ''
  const { loading, error, imageDetails, refetch } = useImageDetailStore({ id })
  const { t } = useTranslation()
  return (
    <HomeLayout>
      { error
        ? <button onClick={refetch}>{`${t('error')}. ${t('try-again')}`}</button>
        : loading ? t('loading') + '...' : (
          <ImageDetailsContent imageDetails={imageDetails} />
        )}
    </HomeLayout>
  )
}

export default ImageDetailsPage
