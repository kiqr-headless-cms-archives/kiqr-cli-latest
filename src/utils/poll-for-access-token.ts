import ClientOAuth2 from 'client-oauth2'
import express from 'express'
import { oauth } from '~utils/oauth-client.js'

export const pollForAccessToken = async (): Promise<ClientOAuth2.Token> => {
  return new Promise((resolve) => {
    const app = express()

    app.get('/', (req: express.Request, res: express.Response) => {
      oauth.code.getToken(req.originalUrl).then(function (response) {
        resolve(response)
        res.set('Connection', 'close')
        res.redirect('https://kiqr.dev/login/cli-success')
        server.close()
      })
    })

    const server = app.listen(28_028)
  })
}
