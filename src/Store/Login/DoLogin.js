import {
  buildAsyncState,
  buildAsyncReducers,
  buildAsyncActions,
} from '@thecodingmachine/redux-toolkit-wrapper'
import fetchOneUserService from '@/Services/User/FetchOne'
import { navigateAndSimpleReset } from '@/Navigators/Root'
import SaveToken from './SaveToken'
import DefaultTheme from '@/Store/Theme/DefaultTheme'

export default {
  initialState: buildAsyncState('doLogin'),
  action: buildAsyncActions('login/doLogin', async (args, { dispatch }) => {
    // Timeout to fake waiting some process
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log({ args })
    
    await dispatch(DefaultTheme.action({ theme: 'default', darkMode: null }))
    await dispatch(SaveToken.action(args))
    navigateAndSimpleReset('Main')
  }),
  reducers: buildAsyncReducers({
    itemKey: null,
    errorKey: 'doLogin.error', // Optionally, if you scoped variables, you can use a key with dot notation
    loadingKey: 'doLogin.loading',
  }),
}
