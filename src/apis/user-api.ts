import { UserApi } from '@kiqr/core-api'
import { configuration } from './configuration.js'

export const userApi = new UserApi(configuration)
