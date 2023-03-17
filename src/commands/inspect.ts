import { Command } from 'commander'
import util from 'util'
import { resolveConfig } from '~utils/config/resolve-config.js'

export const inspectCommand = new Command()
  .name('inspect')
  .description('Parse your KIQR project and check for errors')
  .action(async () => {
    const config = await resolveConfig()
    console.log(
      util.inspect(config, { showHidden: false, depth: null, colors: true })
    )
  })
