import React from 'react'
import { useTranslation } from 'react-i18next'

import Text from 'atoms/Text'

interface LoaderProps {
  error: Error | null
  loading: boolean
  retry: () => void
  children: React.ReactNode
}
const Loader = ({ error, loading, retry, children }: LoaderProps): JSX.Element => {
  const { t } = useTranslation()
  if (error) return <button onClick={retry}>{`${t('error')}. ${t('try-again')}`}</button>
  if (loading) return <Text>{`${t('loading')}...`}</Text>
  // Typescript doesn't like returning React.ReactNode
  // Thus wrapping in React.Fragment
  return <React.Fragment>{children}</React.Fragment>
}

export default Loader
