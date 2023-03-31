import Configstore from 'configstore'
import type { KiqrGlobalConfig } from '~types/kiqr-global-config.js'

export const globalConfigDefaults: KiqrGlobalConfig = {
  oauthBaseUrl: 'https://kiqr.cloud',
  apiBaseUrl: 'https://api.kiqr.cloud',
  accessToken: null,
  refreshToken: null,
}

const configFileName =
  process.env.KIQR_DEV !== undefined ? 'kiqr-dev-config' : 'kiqr-global-config'

export const globalConfig = new Configstore(
  configFileName,
  globalConfigDefaults
)
