import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchAllChatsService from '@/Services/Chat/FetchAllChats'

export default {
  initialState: buildAsyncState('fetchAllChats'),
  action: buildAsyncActions('chat/fetchAllChats', fetchAllChatsService),
  reducers: buildAsyncReducers({
    errorKey: 'fetchAllChats.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'fetchAllChats.loading',
  }),
}
