import { ConfigError } from '~errors/config-error.js'
import type { KiqrConfig } from '~types/kiqr-config.js'

export const validateConfig = (config: KiqrConfig) => {
  const validateApiVersion = (config: KiqrConfig) => {
    if (config.apiVersion !== 1) {
      throw new ConfigError('apiVersion must be 1')
    }
  }

  const validateKind = (config: KiqrConfig) => {
    const allowedKinds: KiqrConfig['kind'][] = ['project', 'plugin']

    if (!allowedKinds.includes(config.kind)) {
      throw new ConfigError(`"${config.kind}" is not a valid kind`)
    }
  }

  validateApiVersion(config)
  validateKind(config)

  return config
}
