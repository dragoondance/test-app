import { buildSlice } from '@thecodingmachine/redux-toolkit-wrapper'
import InitStartup from './Init'
import Auth from './Auth'

export default buildSlice('startup', [InitStartup, Auth]).reducer
