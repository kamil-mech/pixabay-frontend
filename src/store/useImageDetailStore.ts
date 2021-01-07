import { useCallback, useEffect } from 'react'
import create, { State, UseStore } from 'zustand'
import axios from 'axios'
import queryString from 'query-string'
import getSingle from 'contract/samples/get-single'

import { registry } from 'store/registry'

interface ImageDetailRecord {
  [key: string]: UseStore<ImageDetailState>
}
const details: ImageDetailRecord = {}

export type ImageDetails = typeof getSingle.success.response[0]
interface ImageDetailState extends State {
  id: string
  imageDetails: ImageDetails | null
  loading: boolean
  error: Error | null
}

// Register cleanup
registry.useImageDetailStore = () => {
  for (const key in details) {
    details[key].destroy()
    // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
    delete details[key]
  }
}

interface ImageQuery {
  id: string
}
type ImageDetailResponse = ImageDetailState & {
  refetch: () => void
}
const useImageDetailStore = (query: ImageQuery): ImageDetailResponse => {
  // Create a microstore per image
  // This allows us to do shallow updates
  // instead of abusing spread for nested keys
  if (!details[query.id]) {
    details[query.id] = create<ImageDetailState>(
      (set): ImageDetailState => ({
        id: query.id,
        imageDetails: null,
        loading: false,
        error: null
      })
    )
  }
  const useImageStore = details[query.id]
  const { imageDetails: imageDetail, loading, error } = useImageStore()
  useEffect(() => {
    if (!query.id) return
    // Fire request on empty
    (async () => {
      if (!imageDetail && !loading && !error) {
        useImageStore.setState({ loading: true })
        const apiToken = process.env.REACT_APP_API_TOKEN ?? ''
        const response = (await axios.get('/api?' + queryString.stringify({
          key: apiToken,
          id: query.id
        })))
        useImageStore.setState({ imageDetails: response.data[0], loading: false })
      }
    })().catch(e => {
      useImageStore.setState({ error: e, loading: false })
    })
  }, [error, imageDetail, loading, query.id, useImageStore])

  // Wipe to refire request
  const refetch = useCallback(() => {
    useImageStore.setState({
      imageDetails: null,
      loading: false,
      error: null
    })
  }, [useImageStore])
  return { id: query.id, imageDetails: imageDetail, loading, error, refetch }
}

export default useImageDetailStore
