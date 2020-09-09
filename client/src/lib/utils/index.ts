import { message, notification } from 'antd'

export const displaySuccessMessage = (
  message: string,
  description?: string
) => {
  return notification['success']({
    message,
    description,
    placement: 'bottomRight',
    style: { marginTop: 50 },
  })
}

export const displayErrorMessage = (error: string) => {
  return message.error(error)
}

export const shortenScalar = (scalar: string) => {
  const array = scalar.split(' ')

  let result

  parseInt(array[0])
    ? (result = array.reduce((acc, item) => {
        return !isNaN(parseInt(item)) ? (acc += item) : (acc += item[0])
      }, ''))
    : (result = array[0])

  if (result.charAt(result.length - 1) === 'f' && result !== 'self') {
    return result + 't'
  }

  switch (result) {
    case 'touch':
      return 'touch'
    case 'instant':
      return 'inst'
    default:
      return result
  }
}
