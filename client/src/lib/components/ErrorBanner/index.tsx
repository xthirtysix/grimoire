import React from 'react'
import { Alert } from 'antd'

interface Props {
  message?: string
  description: string
}

export const ErrorBanner = ({
  message = 'Ooops! Something went wrong =(',
  description = 'Seems like something went wrong, please check your connection and/or try again later',
}: Props) => {
  return (
    <Alert
      banner
      closable
      message={message}
      description={description}
      type="error"
    />
  )
}
