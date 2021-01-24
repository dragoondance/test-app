import api, { handleError } from '@/Services'

export default async (value) => {
  let payload = {
    token: 'qhcDpkN7OzQk5O0wGqUraQ',
    data: {
      name: value.name,
      email: value.email,
      message: value.message,
      date_time: 'dateTime|UNIX',
    },
  }
  const response = await api.post(`q`, payload)
  console.log({ response })
  return response.data
}
