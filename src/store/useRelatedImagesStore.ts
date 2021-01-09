import { useCallback, useEffect, useMemo } from 'react'
import create, { State } from 'zustand'
import axios from 'axios'
import queryString from 'query-string'

import { registry } from 'store/registry'

import { ImageDetails } from './useImageDetailStore'

interface RelatedImagesState extends State {
  id?: number
  images: ImageDetails[] | null
  loading: boolean
  error: Error | null
}

interface RelatedImageQuery {
  id: number
  tags: string[]
  sponsored?: boolean
}
type ImageDetailResponse = RelatedImagesState & {
  refetch: () => void
}
const useImageDetailStore = (query: RelatedImageQuery): ImageDetailResponse => {
  const useStore = useMemo(() => {
    const useStore = create<RelatedImagesState>(
      (set): RelatedImagesState => ({
        images: null,
        loading: false,
        error: null
      })
    )
    // Register cleanup
    const init = { ...useStore.getState() }
    registry.useRelatedImagesStore = () => useStore.setState({ ...init })
    return useStore
  }, [])
  const { id, images, loading, error } = useStore()
  useEffect(() => {
    if (!query.id) return
    // Fire request on empty
    (async () => {
      if ((query.id !== id || !images) && !loading && !error) {
        useStore.setState({ id: query.id, loading: true })
        const apiToken = process.env.REACT_APP_API_TOKEN ?? ''
        const response = (await axios.get('/api?' + queryString.stringify({
          key: apiToken,
          q: query.tags.join('+'),
          editors_choice: query.sponsored,
          page: 1,
          per_page: 25
        })))
        const filtered = response.data.filter((item: ImageDetails) => item.id !== query.id)
        useStore.setState({ images: filtered, loading: false })
      }
    })().catch(e => {
      useStore.setState({ error: e, loading: false })
    })
  }, [error, id, images, loading, query.id, query.sponsored, query.tags, useStore])

  // Wipe (all except id) to refire request
  const refetch = useCallback(() => {
    useStore.setState({
      images: null,
      loading: false,
      error: null
    })
  }, [useStore])

  return { id: query.id, images, loading, error, refetch }
}

export default useImageDetailStore
