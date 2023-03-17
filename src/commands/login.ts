import { Command } from 'commander'
import { loginWithOauth } from '~services/login-with-oauth.js'

export const loginCommand = new Command()
  .name('login')
  .description('Login using your KIQR account')
  .action(async () => {
    await loginWithOauth()
  })
