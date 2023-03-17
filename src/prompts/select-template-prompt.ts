import inquirer from 'inquirer'

export const selectTemplatePrompt = async () => {
  const response = await inquirer.prompt({
    name: 'result',
    type: 'list',
    message: 'Select a template to use when generating your KIQR project',
    choices: [
      {
        name: 'No, create an empty project',
        value: 'empty',
      },
      {
        name: 'Starter kit',
        value: 'starterkit',
      },
    ],
  })

  return response.result
}
