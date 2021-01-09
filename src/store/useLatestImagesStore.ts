import { useCallback, useEffect, useMemo } from 'react'
import create, { State } from 'zustand'
import axios from 'axios'
import queryString from 'query-string'

import { registry } from 'store/registry'

import { ImageDetails } from './useImageDetailStore'

interface LatestImagesState extends State {
  page: number
  currentPageImages: ImageDetails[] | null
  loading: boolean
  error: Error | null
}
const init = {
  page: 1,
  currentPageImages: null,
  loading: false,
  error: null
}

const cache: ImageDetails[][] = []

const useStore = create<LatestImagesState>(
  (set): LatestImagesState => ({ ...init })
)
// Register cleanup
registry.useLatestImagesStore = () => {
  cache.splice(0, cache.length)
  useStore.setState({ ...init })
}

export interface LatestImagesResponse {
  loading: boolean
  error: Error | null
  images: ImageDetails[]
  fetchMore: () => void
}
const useLatestImagesStore = (): LatestImagesResponse => {
  const { page, currentPageImages, loading, error } = useStore()
  useEffect(() => {
    // Fire request on empty
    (async () => {
      if (!currentPageImages && !loading && !error) {
        useStore.setState({ loading: true })
        const apiToken = process.env.REACT_APP_API_TOKEN ?? ''
        const response = (await axios.get('/api?' + queryString.stringify({
          key: apiToken,
          editors_choice: true,
          page,
          per_page: 50,
          order: 'latest'
        })))
        useStore.setState({ currentPageImages: response.data, loading: false })
      }
    })().catch(e => {
      useStore.setState({ page: page - 1, error: e, loading: false })
    })
  }, [error, page, currentPageImages, loading])

  const fetchMore = useCallback(() => {
    if (loading) return
    if (currentPageImages) cache.push(currentPageImages)
    useStore.setState({
      page: page + 1,
      currentPageImages: null,
      loading: false,
      error: null
    })
  }, [currentPageImages, loading, page])

  const images = useMemo(() => {
    return (currentPageImages ? cache.concat([currentPageImages]) : cache).flatMap(page => page)
  }, [currentPageImages])
  return { loading, error, images, fetchMore }
}

export default useLatestImagesStore
