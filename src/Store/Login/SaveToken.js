import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('login/saveToken'),
  reducers(state, { payload }) {
    if (typeof payload.token !== 'undefined') {
      state.token = payload.token
    }
  },
}
