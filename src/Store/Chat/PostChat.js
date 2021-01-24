import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import postChatService from '@/Services/Chat/PostChat'

export default {
  initialState: buildAsyncState('postChat'),
  action: buildAsyncActions('chat/postChat', postChatService),
  reducers: buildAsyncReducers({
    itemKey: 'newChat',
    errorKey: 'postChat.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'postChat.loading',
  }),
}
