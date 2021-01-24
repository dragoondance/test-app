import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import FetchAllChats from './FetchAllChats'
import PostChat from './PostChat'
import SaveNewChat from './SaveNewChat'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  item: [],
  newChat: null,
}

export default buildSlice('chat', [FetchAllChats, PostChat, SaveNewChat], sliceInitialState).reducer
