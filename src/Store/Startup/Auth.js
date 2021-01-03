import {
    buildAsyncState,
    buildAsyncActions,
    buildAsyncReducers,
  } from '@thecodingmachine/redux-toolkit-wrapper'
  import FetchOne from '@/Store/User/FetchOne'
  import { navigateAndSimpleReset } from '@/Navigators/Root'
  import DefaultTheme from '@/Store/Theme/DefaultTheme'
  
  export default {
    initialState: buildAsyncState(),
    action: buildAsyncActions('startup/auth', async (args, { dispatch }) => {
      // Timeout to fake waiting some process
      // Remove it, or keep it if you want display a beautiful splash screen ;)
    await dispatch(DefaultTheme.action({ theme: 'default', darkMode: null }))
      navigateAndSimpleReset('Login')
    }),
    reducers: buildAsyncReducers({ itemKey: null }), // We do not want to modify some item by default
  }
  