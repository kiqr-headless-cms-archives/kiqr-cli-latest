#!/usr/bin/env node

import * as dotenv from 'dotenv'
dotenv.config()

import fetch, { Headers, Request, Response } from 'node-fetch'
import application from './application.js'

import { initCommand } from '~commands/init.js'
import { inspectCommand } from '~commands/inspect.js'
import { loginCommand } from '~commands/login.js'
import { pushCommand } from '~commands/push.js'

if (!globalThis.fetch) {
  globalThis.fetch = fetch
  globalThis.Headers = Headers
  globalThis.Request = Request
  globalThis.Response = Response
}

application.addCommand(initCommand)
application.addCommand(inspectCommand)
application.addCommand(loginCommand)
application.addCommand(pushCommand)
application.parse()
