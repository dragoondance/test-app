import api, { handleError } from '@/Services'

export default async () => {
  let payload = {
    token: 'qhcDpkN7OzQk5O0wGqUraQ',
    data: {
      name: 'nameFirst',
      email: 'internetEmail',
      message: 'stringShort',
      date_time: 'dateTime|UNIX',
      _repeat: 5,
    },
  }
  const response = await api.post(`q`, payload)
  return response.data
}
