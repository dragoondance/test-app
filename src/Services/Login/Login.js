import api, { handleError } from '@/Services'

export default async (username, password) => {
  if (!username || !password) {
    return handleError({ message: 'incomplete data, please try again' })
  }
  console.log({ username })
  let payload = {
    token: 'qhcDpkN7OzQk5O0wGqUraQ',
    data: {
      name: 'nameFirst',
      email: username,
      phone: 'phoneHome',
    },
  }
  const response = await api.post(`q`, payload)
  return response.data
}
