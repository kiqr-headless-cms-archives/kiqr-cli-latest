import { Command } from 'commander'

const program = new Command()

program
  .name('kiqr')
  .description('Command line tool for KIQR Headless CMS')
  .version('0.0.0')

export default program
