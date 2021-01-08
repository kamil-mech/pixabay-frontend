import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { TFunction } from 'i18next'
import uniq from 'lodash.uniq'
import styled, { ThemeProps, useTheme } from 'styled-components'
import { useRouteMatch } from 'react-router-dom'

import Text from 'atoms/Text'
import HomeLayout from 'templates/HomeLayout'
import useImageDetailStore, { ImageDetails } from 'store/useImageDetailStore'
import Button from 'atoms/Button'
import DownloadIcon from 'icons/DownloadIcon'
import useMediaQueryStore from 'store/useMediaQueryStore'
import Card from 'atoms/Card'
import ImageMetaTable from 'molecules/ImageMetaTable'
import FBLike from 'atoms/FBLike'
import SocialActions from 'molecules/SocialActions'
import AuthorSection from 'molecules/AuthorSection'
import SizedImage from 'molecules/SizedImage'

const capitalize = (str: string): string => {
  const [head, ...tail] = str
  return head.toUpperCase() + tail.join('')
}

const getName = (imageDetails: ImageDetails | null, t: TFunction): string => {
  if (!imageDetails) return ''
  return uniq(imageDetails.tags.replace(/, /gi, ' ').split(' ')).slice(0, 3).map(str => {
    return capitalize(t(str))
  }).join(' ')
}

const ImageDetailsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  > * + * {
    margin-left: ${({ theme }) => theme.spacing(7)}px;
  }
  ${({ theme }) => theme.breakpoints.lgDown} {
    flex-direction: column;
    flex-wrap: nowrap;
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
const RelatedImagesPlaceholder = styled(Card)`
  width: 100%;
  height: 303px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.breakpoints.lgDown} {
    height: 474px;
  }
`
const SponsoredImagesPlaceholder = styled(Card)`
  width: 100%;
  height: 136px;
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
  const name = useMemo(() => getName(imageDetails, t), [imageDetails, t])
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
          <SponsoredImagesPlaceholder>
            <Text>Image Section</Text>
            <Text>Coming Soon</Text>
          </SponsoredImagesPlaceholder>
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
          <RelatedImagesPlaceholder>
            <Text>{t('image-section')}</Text>
            <Text>{t('coming-soon')}</Text>
          </RelatedImagesPlaceholder>
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
  const id = match.params.photoSlug?.split('-').reverse()[0] ?? ''
  const { loading, error, imageDetails, refetch } = useImageDetailStore({ id })
  const { t } = useTranslation()
  return (
    <HomeLayout>
      <DetailsBody>
        { error
          ? <button onClick={refetch}>{`${t('error')}. ${t('try-again')}`}</button>
          : loading || !imageDetails ? <Text>{`${t('loading')}...`}</Text> : (
            <ImageDetailsContent imageDetails={imageDetails} />
          )}
      </DetailsBody>
    </HomeLayout>
  )
}

export default ImageDetailsPage
