import chalk, { Chalk } from 'chalk'
import prettyFormat from 'pretty-format'
import prettyMs from 'pretty-ms'

export const pretty = prettyFormat

interface Printer extends Chalk {
  link: Chalk['green']
  name: Chalk['green']
  time: Chalk['bold']
}

const printer = new chalk.Instance()

Object.defineProperty(printer, 'name', {
  value: printer.cyan,
})
Object.defineProperty(printer, 'link', {
  value: printer.green,
})
Object.defineProperty(printer, 'time', {
  value: (ms: number | string) => printer.bold(prettyMs(Number(ms))),
})

export const log = console.log

export function info(...rest: any[]): any {
  return console.log(printer.black.bgCyanBright(` info `), ...rest)
}

export function success(...rest: any[]): any {
  return console.log(printer.black.bgGreenBright(` success `), ...rest)
}

export function warn(...rest: any[]): any {
  return console.warn(printer.black.bgYellowBright(` warning `), ...rest)
}

export function error(...rest: any[]): any {
  return console.error(printer.black.bgRedBright(` error `), ...rest)
}

export default printer as Printer
