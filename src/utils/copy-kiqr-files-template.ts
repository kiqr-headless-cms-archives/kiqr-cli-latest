import fs from 'fs'
import fse from 'fs-extra'
import path from 'path'

const { copySync } = fse

export const copyKiqrFilesTemplate = (
  templateName: string,
  targetDirPath: string,
  overwrite = false,
  errorOnExist = false
): boolean => {
  // Check if targetDirPath exists and is a folder, otherwise create it
  if (!fs.existsSync(targetDirPath)) {
    fs.mkdirSync(targetDirPath, { recursive: true })
  } else if (!fs.statSync(targetDirPath).isDirectory()) {
    throw new Error(
      'Installation path exists already, but it is not a directory'
    )
  }

  const templateRootDir = path.join(
    path.dirname(process.argv[1]),
    '../templates/projectfiles'
  )
  const sharedTemplateFilesPath = path.resolve(templateRootDir, '_shared')
  const templateDirPath = path.resolve(templateRootDir, templateName)

  if (!fs.existsSync(templateDirPath)) {
    throw new Error(`Invalid template: ${templateName}`)
  }

  // Copy shared files and folder structure first
  copySync(sharedTemplateFilesPath, targetDirPath, {
    overwrite: overwrite,
    errorOnExist: errorOnExist,
  })

  // Copy the template files to the target directory
  copySync(templateDirPath, targetDirPath, {
    overwrite: overwrite,
    errorOnExist: errorOnExist,
  })

  return true
}
