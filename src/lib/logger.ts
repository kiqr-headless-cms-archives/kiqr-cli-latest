import { createLogger, format, transports } from 'winston'

const logger = createLogger({
  format: format.combine(format.splat(), format.simple()),
  transports: [
    new transports.Console(),
    // new transports.File({
    //   filename: resolvePathForLogFile('error'),
    //   level: 'error',
    // }),
    // new transports.File({ filename: resolvePathForLogFile('combined') }),
  ],
})

export { logger }
