import ClientOAuth2 from 'client-oauth2'
import { globalConfig } from '~utils/global-config.js'

export const oauth = new ClientOAuth2({
  clientId: 'UlOGBpkl9oI8yZQv43cRZNYs0qcuoZcajpIKdaNtBCA',
  accessTokenUri: `${globalConfig.get('oauthBaseUrl')}/oauth/token`,
  authorizationUri: `${globalConfig.get('oauthBaseUrl')}/oauth/authorize`,
  redirectUri: 'http://127.0.0.1:28028',
  scopes: ['profile', 'projects'],
})

export const authorizationUrl = oauth.code.getUri()
