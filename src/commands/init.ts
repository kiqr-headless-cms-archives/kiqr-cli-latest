import { Command } from 'commander'
import { logger } from '~lib/logger.js'
import { selectTemplatePrompt } from '~prompts/select-template-prompt.js'
import { installKiqrFiles } from '~services/install-kiqr-files.js'
import { findKiqrConfig } from '~utils/config/find-kiqr-config.js'

import path from 'path'

export const initCommand = new Command()
  .name('init')
  .description('Create a new project at target directory')
  .argument('[target-dir]', 'target directory relative to current location')
  .action(async (relativePath) => {
    // Call searchForKiqrConfig with findUp parameter set to false.
    // We are allowed to intialiate multiple projects in nested folders.
    const absolutePath = path.resolve(relativePath || '.')
    const configFile = findKiqrConfig({
      targetDir: absolutePath,
      recursive: false,
    })

    if (configFile) {
      logger.error(
        'Could not initialize a new project. A KIQR config file exists at the target location already. Please remove it first.'
      )
      return
    }

    const payload = {
      installationDirectory: absolutePath,
      templateName: await selectTemplatePrompt(),
    }

    installKiqrFiles(payload)
  })
