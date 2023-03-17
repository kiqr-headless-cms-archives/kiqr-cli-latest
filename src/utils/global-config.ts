import Configstore from 'configstore'
import type { KiqrGlobalConfig } from '~types/kiqr-global-config.js'

export const globalConfigDefaults: KiqrGlobalConfig = {
  oauthBaseUrl: 'https://kiqr.cloud',
  apiBaseUrl: 'https://api.kiqr.cloud',
  accessToken: null,
  refreshToken: null,
}

export const globalConfig = new Configstore(
  'kiqr-global-config',
  globalConfigDefaults
)
