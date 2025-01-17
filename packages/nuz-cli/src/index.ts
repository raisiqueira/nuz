import yargs from 'yargs'

import Config from './classes/Config'
import Worker from './classes/Worker'
import * as commands from './commands'

// tslint:disable-next-line: prettier
;(async function main() {
  // Prepare `.nuz` folder to manage config
  await Config.prepare()

  // Prepare worker requests to APIs
  const config = await Config.readConfiguration()
  const authentication = await Config.readAuthentication()
  await Worker.prepare(config.registry, authentication.token)

  // Bind all comands to cli
  await commands.setCommands(yargs)

  // tslint:disable-next-line: no-unused-expression
  yargs.help().argv
})()
