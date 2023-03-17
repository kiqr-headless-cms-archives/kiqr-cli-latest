import type { CreateSchemaOperationRequest } from '@kiqr/core-api'
import { schemasApi } from '~apis/schemas-api.js'
import { logger } from '~lib/logger.js'
import { resolveConfig } from '~utils/config/resolve-config.js'

export const pushToServer = async (projectId: string) => {
  const config = await resolveConfig()

  const payload: CreateSchemaOperationRequest = {
    projectId: projectId,
    createSchemaRequest: {
      commitMessage: 'Generated from CLI',
      contentTypesRaw: config.contentTypes,
    },
  }

  logger.info('Uploading to KIQR.CLOUD..')

  await schemasApi.createSchema(payload).catch((error) => {
    if (error.response.status === 404) {
      logger.error('Invalid projectId: %s', projectId)
    } else {
      console.log(error)
    }
    process.exit(1)
  })

  logger.info('Upload succeded!')
}
