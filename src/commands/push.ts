import { Command } from 'commander'
import { pushToServer } from '~services/push-to-server.js'
import { ensureValidToken } from '~utils/ensure-valid-token.js'

export const pushCommand = new Command()
  .name('push')
  .description(
    'Push the current state of your KIQR configuration to KIQR.CLOUD'
  )
  .action(async () => {
    await ensureValidToken()

    const projectId = 'whitening'
    pushToServer(projectId)
  })
