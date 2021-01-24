import { createAction } from '@reduxjs/toolkit'

export default {
  initialState: {},
  action: createAction('login/doLogout'),
  reducers(state) {
    state.item = {}
    state.token = null
  },
}
