import { logger } from '~lib/logger.js'
import { copyKiqrFilesTemplate } from '~utils/copy-kiqr-files-template.js'

export const installKiqrFiles = ({
  installationDirectory,
  templateName,
}: {
  installationDirectory: string
  templateName?: string
}) => {
  templateName ||= 'empty'

  logger.info('Initializing a new KIQR project at %s', installationDirectory)
  logger.info('Copying files from template "%s"', templateName)

  if (!copyKiqrFilesTemplate(templateName, installationDirectory)) {
    throw new Error(
      'Installation path exists already, but it is not a directory'
    )
  }

  logger.info('Successfully intitialized KIQR')
}
