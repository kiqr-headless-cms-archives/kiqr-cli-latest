import { ProjectNotFoundError } from '~errors/project-not-found-error.js'
import type { KiqrConfig } from '~types/kiqr-config.js'
import { findKiqrConfig } from '~utils/config/find-kiqr-config.js'
import { normalizeConfig } from '~utils/config/normalize-config.js'
import { validateConfig } from '~utils/config/validate-config.js'

export const resolveConfig = async (): Promise<KiqrConfig> => {
  const configFilePath = findKiqrConfig()

  if (!configFilePath) {
    throw new ProjectNotFoundError()
  }

  const rawConfig = await import(configFilePath)

  return validateConfig(normalizeConfig(rawConfig?.default))
}
