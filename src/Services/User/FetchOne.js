import api, { handleError } from '@/Services'

export default async (userId) => {
  if (!userId) {
    return handleError({ message: 'User ID is required' })
  }
  const response = null
  return response.data
}
