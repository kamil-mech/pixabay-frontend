import { useCallback, useEffect } from 'react'
import create, { State } from 'zustand'
import axios from 'axios'
import queryString from 'query-string'
import getSingle from 'contract/samples/get-single'

import { registry } from 'store/registry'

export type ImageDetails = typeof getSingle.success.response[0]
interface ImageDetailState extends State {
  id: number
  imageDetails: ImageDetails | null
  loading: boolean
  error: Error | null
}

const cache: Record<string, ImageDetails> = {}

const useStore = create<ImageDetailState>(
  (set): ImageDetailState => ({
    id: 0,
    imageDetails: null,
    loading: false,
    error: null
  })
)

// Register cleanup
const init = { ...useStore.getState() }
registry.useImageDetailStore = () => {
  for (const key in cache) {
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete cache[key]
  }
  useStore.setState({ ...init })
}

interface ImageQuery {
  id: number
}
type ImageDetailResponse = ImageDetailState & {
  refetch: () => void
}
const useImageDetailStore = (query: ImageQuery): ImageDetailResponse => {
  const { imageDetails, loading, error } = useStore()

  useEffect(() => {
    if (!query.id) return
    (async () => {
      // Serve from cache or refetch
      if (imageDetails && query.id !== imageDetails.id) {
        const fromCache = cache[query.id]
        return useStore.setState({
          id: query.id,
          imageDetails: fromCache || null,
          loading: false,
          error: null
        })
      }
      // Fire request on empty
      if (!imageDetails && !loading && !error) {
        useStore.setState({ loading: true })
        const apiToken = process.env.REACT_APP_API_TOKEN ?? ''
        const response = (await axios.get('/api?' + queryString.stringify({
          key: apiToken,
          id: query.id
        })))
        cache[query.id] = response.data[0]
        useStore.setState({ imageDetails: response.data[0], loading: false })
      }
    })().catch(e => {
      useStore.setState({ error: e, loading: false })
    })
  }, [error, imageDetails, loading, query.id])

  // Wipe to refire request
  const refetch = useCallback(() => {
    useStore.setState({
      imageDetails: null,
      loading: false,
      error: null
    })
  }, [])

  if (imageDetails && imageDetails.id !== query.id) return { ...init, refetch }
  return { id: query.id, imageDetails, loading, error, refetch }
}

export default useImageDetailStore
