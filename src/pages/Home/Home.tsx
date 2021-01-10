import React, { useEffect, useRef } from 'react'
import styled, { useTheme } from 'styled-components'
import { useTranslation } from 'react-i18next'

import HomeLayout from 'templates/HomeLayout'
import HorizontalImageGrid from 'atoms/HorizontalImageGrid'
import useLatestImagesStore, { LatestImagesResponse } from 'store/useLatestImagesStore'
import useImageDetailStore from 'store/useImageDetailStore'
import Loader from 'atoms/Loader'
import { getImageName } from 'utils'
import Text from 'atoms/Text'
import useMediaQueryStore from 'store/useMediaQueryStore'

const ErrorWrapper = styled.div`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

interface ResizeListenerParams {
  current: LatestImagesResponse
}
const useResizeListener = (refedResponse: ResizeListenerParams): void => {
  useEffect(() => {
    const listener = (): void => {
      const { error, loading, images, fetchMore } = refedResponse.current

      // https://stackoverflow.com/a/17698713
      const maxScroll = Math.max(document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
      ) - window.innerHeight
      const imagesOnPage = Array.from(document.querySelectorAll('img')).filter(image => image.complete)
      const allImagesLoaded = imagesOnPage.length >= images.length
      const reachedThreshold = maxScroll - window.scrollY < window.innerHeight * 1.5
      if (!loading && !error && allImagesLoaded && reachedThreshold) fetchMore()
    }
    document.addEventListener('scroll', listener)
    return () => {
      document.removeEventListener('scroll', listener)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

const HeroShade = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: ${({ theme }) => theme.zIndex.imageOverlay};
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > div {
    flex-basis: 1px;
    flex-grow: 0;
    background-color: rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    margin-left: ${({ theme }) => theme.spacing(2)}px;
    margin-right: ${({ theme }) => theme.spacing(2)}px;
  }
  > div > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)}px;
  }
`
const HeroImageWrapper = styled.div`
  width: 100%;
  height: 55vh;
  min-height: 600px;
  position: relative;
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
  > img {
    height: auto;
    width: auto;
    min-width: 150%;
    min-height: 150%;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`
const HeroImage = (): JSX.Element => {
  const palette = useTheme().palette
  const mdDown = useMediaQueryStore(state => state.mdDown)
  const { t } = useTranslation()
  const { imageDetails, ...network } = useImageDetailStore({ id: 5000648 })
  return (
    <HeroImageWrapper>
      <Loader {...network} >
        {
          imageDetails &&
          <img
            src={imageDetails.fullHDURL || imageDetails.largeImageURL}
            alt={getImageName(imageDetails, t)} />
        }
      </Loader>
      <HeroShade>
        <div>
          <Text h2={!mdDown} h5={mdDown} bold color={palette.light}>
            Stunning free images & royalty free stock
          </Text>
          <Text h5={!mdDown} color={palette.light}>
            Over 1.9 million+ high quality stock images, videos and music shared by our talented community.
          </Text>
        </div>
      </HeroShade>
    </HeroImageWrapper>
  )
}

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  useEffect(() => {
    document.title = t('home-title')
  }, [t])
  const { images, loading, error, fetchMore } = useLatestImagesStore()

  // Window listener depends on these
  // We don't want to put them into useEffect deps array
  // Because we want to avoid listener registration spam
  const resizeRef = useRef({ loading, error, images, fetchMore })
  resizeRef.current = { loading, error, images, fetchMore }
  useResizeListener(resizeRef)

  return (
    <HomeLayout>
      <HeroImage />
      {images &&
        <HorizontalImageGrid
          startingWidth={300}
          images={images}
          thresholdHeight={250} />}
      {error && (
        <ErrorWrapper>
          <Loader loading={loading} error={error} refetch={fetchMore} children={[]}/>
        </ErrorWrapper>
      )}
    </HomeLayout>
  )
}

export default Home
