import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import styled, { ThemeProps, useTheme } from 'styled-components'
import { useRouteMatch } from 'react-router-dom'

import Text from 'atoms/Text'
import HomeLayout from 'templates/HomeLayout'
import useImageDetailStore, { ImageDetails } from 'store/useImageDetailStore'
import useRelatedImagesStore from 'store/useRelatedImagesStore'
import Button from 'atoms/Button'
import DownloadIcon from 'icons/DownloadIcon'
import useMediaQueryStore from 'store/useMediaQueryStore'
import Card from 'atoms/Card'
import ImageMetaTable from 'molecules/ImageMetaTable'
import FBLike from 'atoms/FBLike'
import SocialActions from 'molecules/SocialActions'
import AuthorSection from 'molecules/AuthorSection'
import SizedImage from 'molecules/SizedImage'
import Loader from 'atoms/Loader'
import HorizontalImageGrid from 'atoms/HorizontalImageGrid'
import { getImageName } from 'utils'

const ImageDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(7)}px;
  }
  ${({ theme }) => theme.breakpoints.lgDown} {
    flex-direction: column;
    && > * {
      width: 100%;
      margin-left: 0;
    }
    && > * + * {
      margin-top: ${({ theme }) => theme.spacing(4)}px;
    }
  }
`

const ImageSpace = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 100%;
  }
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(1)}px;
  }
`
const ImageSidebar = styled.div`
  width: 300px;
  height: 100%;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    width: 100%;
  }
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(3)}px;
  }
  > button {
    max-width: 300px;
  }
`

const LicenseCard = styled(Card)`
  > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}
  }
`
const RelatedImages = styled(Card)`
  width: 100%;
  justify-content: center;
  align-items: center;
`
const SponsoredImages = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

type SpacedColumnProps = ThemeProps<Theme> & {
  spacing?: number
}
const SpacedColumn = styled.div<SpacedColumnProps>`
  display: flex;
  flex-direction: column;
  > * + * {
    margin-top: ${({ theme, spacing = 1 }) => theme.spacing(spacing)}px;
  }
`
type SpacedRowProps = ThemeProps<Theme> & {
  spacing?: number
}
const SpacedRow = styled.div<SpacedRowProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  > * + * {
    margin-left: ${({ theme, spacing = 1 }) => theme.spacing(spacing)}px;
  }
`

const Tags = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(2)}px;
  }
`

const MetaTableContainer = styled.div`
  ${({ theme }) => theme.breakpoints.lgDown} {
    max-width: 200px;
  }
`

const RelatedImagesSection = ({ imageDetails }: ImageDetailsProps): JSX.Element => {
  const lgDown = useMediaQueryStore(state => state.lgDown)
  const { images, ...network } = useRelatedImagesStore({
    id: imageDetails.id,
    tags: imageDetails.tags.split(', ').slice(0, 3)
  })
  return (
    <RelatedImages>
      <Loader {...network}>
        {images &&
          <HorizontalImageGrid
            startingWidth={300}
            images={images}
            thresholdHeight={lgDown ? 150 : 80}
            maxRows={3} />}
      </Loader>
    </RelatedImages>
  )
}

const SponsoredImagesSection = ({ imageDetails }: ImageDetailsProps): JSX.Element => {
  const { images, ...network } = useRelatedImagesStore({
    id: imageDetails.id,
    tags: imageDetails.tags.split(', ').slice(0, 1),
    sponsored: true
  })
  return (
    <SponsoredImages>
      <Loader {...network}>
        {images &&
          <HorizontalImageGrid
            startingWidth={300}
            images={images}
            thresholdHeight={120}
            maxRows={1} />}
      </Loader>
    </SponsoredImages>
  )
}

interface ImageDetailsProps {
  imageDetails: ImageDetails
}
const ImageDetailsContent = ({ imageDetails }: ImageDetailsProps): JSX.Element => {
  const {
    comments,
    tags
  } = imageDetails
  const { t } = useTranslation()
  const palette = useTheme().palette
  const lgDown = useMediaQueryStore(state => state.lgDown)
  const name = useMemo(() => getImageName(imageDetails, t), [imageDetails, t])
  useEffect(() => {
    document.title = name
  }, [name])
  const tagsArr = tags.split(', ')

  // This section repositions to the very bottom on lgDown
  const FlexibleSection = (
    <React.Fragment>
      <SpacedRow spacing={2}>
        <Button small secondary>{`${comments} comments`}</Button>
        <Text>
          <Text color={palette.info}>
            {t('sign-in')}
          </Text>
    &nbsp;{t('to-leave-a-comment')}
        </Text>
      </SpacedRow>
      <Tags>
        {tagsArr.map(tag => <Button key={tag} small outlined>{t(tag).toLowerCase()}</Button>)}
      </Tags>
    </React.Fragment>
  )

  return (
    <ImageDetailsWrapper>
      <ImageSpace>
        <SizedImage imageDetails={imageDetails} />
        <div>
          <Text color={palette.deemphasis}>{t('sponsored-images-stock')} -
            <Text color={palette.info}>&nbsp;{t('limited-deal')}
              <Text bold color={palette.emphasis}>
              &nbsp;PIXABAY20
              </Text>
              &nbsp;{t('coupon')}
            </Text>
          </Text>
        </div>
        <SpacedColumn spacing={4}>
          <SponsoredImagesSection imageDetails={imageDetails} />
          {!lgDown && FlexibleSection}
        </SpacedColumn>
      </ImageSpace>
      <ImageSidebar>
        <AuthorSection imageDetails={imageDetails} />
        <SocialActions imageDetails={imageDetails} />
        <Button large frontAdornment={<DownloadIcon/>}>{t('free-download')}</Button>
        <Card>
          <Text h5 underline color={palette.darkEmphasis}>{t('pixabay-license')}</Text>
          <Text>
            <div>{t('free-commercial')}</div>
            <div>{t('no-attribution')}</div>
          </Text>
        </Card>
        <LicenseCard>
          <Text>{t('like-pixabay-fb')}</Text>
          <FBLike />
        </LicenseCard>
        <SpacedColumn>
          <Card small>
            <Text sub>{t('related-images')}</Text>
          </Card>
          <RelatedImagesSection imageDetails={imageDetails} />
        </SpacedColumn>
        <Card>
          <MetaTableContainer>
            <ImageMetaTable imageDetails={imageDetails} />
          </MetaTableContainer>
        </Card>
      </ImageSidebar>
      {lgDown && FlexibleSection}
    </ImageDetailsWrapper>
  )
}

const DetailsBody = styled.div`
  padding: ${({ theme }) => theme.spacing(4)}px ${({ theme }) => theme.spacing(3)}px;
`

const ImageDetailsPage = (): JSX.Element => {
  const match = useRouteMatch<AppMatch>()
  const id = +(match.params.photoSlug?.split('-').reverse()[0] ?? '')
  const { imageDetails, ...network } = useImageDetailStore({ id })
  return (
    <HomeLayout>
      <DetailsBody>
        <Loader {...network}>
          {imageDetails && <ImageDetailsContent imageDetails={imageDetails} />}
        </Loader>
      </DetailsBody>
    </HomeLayout>
  )
}

export default ImageDetailsPage
