import fs from 'fs'
import path from 'path'
import { logger } from '~lib/logger.js'

interface FindKiqrConfigOptions {
  targetDir?: string
  recursive?: boolean
}

export const findKiqrConfig = (
  options?: FindKiqrConfigOptions
): string | undefined => {
  const targetDir = options?.['targetDir'] ?? path.resolve('.')
  const isRecursive = options?.['recursive'] ?? true

  if (!fs.existsSync(targetDir)) {
    return undefined
  }

  const pattern = /^kiqr\.config\.(ts|js|yaml|json)$/
  const files = fs.readdirSync(targetDir)
  const { root } = path.parse(targetDir)

  for (const file of files) {
    try {
      const filePath = path.join(targetDir, file)
      const match = fs.statSync(filePath)

      if (match.isFile() && pattern.test(file)) {
        return filePath
      }
    } catch (error) {
      if (error instanceof Error) {
        logger.warn(error.message)
      }
    }
  }

  if (isRecursive && targetDir != root) {
    const parentFolder = path.dirname(targetDir)
    return findKiqrConfig({ targetDir: parentFolder, recursive: true })
  }

  return undefined
}
