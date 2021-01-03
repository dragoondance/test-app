import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import DoLogin from './DoLogin'
import SaveToken from './SaveToken'

// This state is common to all the "user" module, and can be modified by any "user" reducers
const sliceInitialState = {
  item: {},
  token: null,
}

export default buildSlice('login', [DoLogin, SaveToken], sliceInitialState).reducer
