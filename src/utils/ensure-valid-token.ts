import { globalConfig } from '~utils/global-config.js'

export const ensureValidToken = async () => {
  if (!globalConfig.get('accessToken')) throw new Error('Invalid token!')
}
