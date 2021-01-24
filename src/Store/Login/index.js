import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DoLogin from './DoLogin'
import SaveToken from './SaveToken'
import DoLogout from './DoLogout'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  item: {},
  token: null,
}

export default buildSlice('login', [DoLogin, SaveToken, DoLogout], sliceInitialState).reducer
