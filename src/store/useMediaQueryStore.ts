import create, { State } from 'zustand'
import theme from 'theme'

interface MediaQueryState extends State {
  init: boolean
  xsDown: boolean
  xsUp: boolean
  smDown: boolean
  smUp: boolean
  mdDown: boolean
  mdUp: boolean
  lgDown: boolean
  lgUp: boolean
  xlDown: boolean
  xlUp: boolean
}

const useMediaQueryStore = create<MediaQueryState>(
  (set): MediaQueryState => ({
    init: false,
    xsDown: false,
    xsUp: false,
    smDown: false,
    smUp: false,
    mdDown: false,
    mdUp: false,
    lgDown: false,
    lgUp: false,
    xlDown: false,
    xlUp: false
  })
)

// This store is an exception - we want it to run on import
// and we don't want to put it into the reset registry
if (!useMediaQueryStore.getState().init) {
  useMediaQueryStore.setState({ init: true })
  if (typeof window !== 'undefined' && window.matchMedia) {
    for (const [breakPointKey, cssMediaQueryString] of Object.entries(
      theme.breakpoints
    )) {
      const mediaQueryList = window.matchMedia(
        cssMediaQueryString.replace('@media ', '')
      )
      mediaQueryList.addEventListener('change', e =>
        useMediaQueryStore.setState({ [breakPointKey]: e.matches })
      )
      useMediaQueryStore.setState({ [breakPointKey]: mediaQueryList.matches })
    }
    useMediaQueryStore.setState({ init: true })
  } else {
    // FIXME: handle SSR scenario based on requesting device
    useMediaQueryStore.setState({
      init: true,
      xsDown: false,
      xsUp: true,
      smDown: false,
      smUp: true,
      mdDown: false,
      mdUp: true,
      lgDown: false,
      lgUp: true,
      xlDown: false,
      xlUp: true
    })
  }
}

export default useMediaQueryStore
