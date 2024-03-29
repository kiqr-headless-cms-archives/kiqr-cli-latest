import { Command } from 'commander'
import { pushToServer } from '~services/push-to-server.js'
import { resolveConfig } from '~utils/config/resolve-config.js'
import { ensureValidToken } from '~utils/ensure-valid-token.js'

export const pushCommand = new Command()
  .name('push')
  .description(
    'Push the current state of your KIQR configuration to KIQR.CLOUD'
  )
  .action(async () => {
    await ensureValidToken()
    const config = await resolveConfig()
    if (!config.projectId) throw new Error('Missing project id')

    pushToServer(config.projectId.toString())
  })
