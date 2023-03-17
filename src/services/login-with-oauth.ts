import open from 'open'
import { logger } from '~lib/logger.js'
import { globalConfig } from '~utils/global-config.js'
import { authorizationUrl } from '~utils/oauth-client.js'
import { pollForAccessToken } from '~utils/poll-for-access-token.js'

export const loginWithOauth = async () => {
  logger.info(
    'A browser window will open where you can sign in using your KIQR.CLOUD account'
  )

  open(authorizationUrl)

  logger.info('Waiting for interaction in browser...')
  const tokenData = await pollForAccessToken()

  globalConfig.set('accessToken', tokenData.accessToken)
  globalConfig.set('refreshToken', tokenData.refreshToken)

  logger.info('Successfully signed in!')
}
