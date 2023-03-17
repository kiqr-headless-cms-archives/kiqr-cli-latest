import type { KiqrConfig } from '~types/kiqr-config.js'

export const normalizeConfig = (config: KiqrConfig) => {
  config.apiVersion ||= 1
  config.kind ||= 'project'
  config.contentTypes ||= {}
  config.relations ||= []

  return config as KiqrConfig
}
