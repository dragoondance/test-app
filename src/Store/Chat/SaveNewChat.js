import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('login/saveToken'),
  reducers(state, { payload }) {
    state.item.push(payload)
    state.newChat = null
  },
}
