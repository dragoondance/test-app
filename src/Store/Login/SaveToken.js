import {
    buildAsyncState,
    buildAsyncReducers,
    buildAsyncActions,
  } from '@thecodingmachine/redux-toolkit-wrapper'
  
  export default {
    initialState: buildAsyncState('saveToken'),
    action: buildAsyncActions('login/saveToken', async (args, { dispatch }) => {
        // Timeout to fake waiting some process
        // Remove it, or keep it if you want display a beautiful splash screen ;)
        // await new Promise((resolve) => setTimeout(resolve, 1000))
        return args
      }),
    reducers: buildAsyncReducers({
        itemKey: 'token',
        errorKey: 'saveToken.error', // Optionally, if you scoped variables, you can use a key with dot notation
        loadingKey: 'saveToken.loading',
    }),
  }
  