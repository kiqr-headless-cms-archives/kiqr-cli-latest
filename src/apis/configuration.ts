import { Configuration } from '@kiqr/core-api'
import { globalConfig } from '~utils/global-config.js'

export const configuration = new Configuration({
  basePath: globalConfig.get('apiBaseUrl'),
  accessToken: `Bearer ${globalConfig.get('accessToken')}`,
})
