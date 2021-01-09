import React from 'react'
import { useTranslation } from 'react-i18next'

import Text from 'atoms/Text'
import Button from 'atoms/Button'

interface LoaderProps {
  error: Error | null
  loading: boolean
  refetch: () => void
  children: React.ReactNode
}
const Loader = ({ error, loading, refetch, children }: LoaderProps): JSX.Element => {
  const { t } = useTranslation()
  if (error) return <Button onClick={refetch}>{`${t('error')}. ${t('try-again')}`}</Button>
  if (loading) return <Text>{`${t('loading')}...`}</Text>
  // Typescript doesn't like returning React.ReactNode
  // Thus wrapping in React.Fragment
  return <React.Fragment>{children}</React.Fragment>
}

export default Loader
