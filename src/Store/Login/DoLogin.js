import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import loginService from '@/Services/Login/Login'
import { navigateAndSimpleReset } from '@/Navigators/Root'
import SaveToken from './SaveToken'
import DefaultTheme from '@/Store/Theme/DefaultTheme'

export default {
  initialState: buildAsyncState('doLogin'),
  action: buildAsyncActions('login/doLogin', loginService),
  reducers: buildAsyncReducers({
    errorKey: 'doLogin.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'doLogin.loading',
  }),
}
