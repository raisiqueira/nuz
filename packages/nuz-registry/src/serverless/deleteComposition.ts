import { Express } from 'express'

import Worker from '../classes/Worker'
import onRoute from '../utils/onRoute'

import { ServerlessRoute } from './types'

export const name = 'deleteComposition'

export const execute: ServerlessRoute = (app: Express, worker: Worker) => {
  app.delete(
    '/composition',
    onRoute(async (request, response) => {
      const { token, composition } = request.body

      const formIsMissing = !token || !composition
      if (formIsMissing) {
        throw new Error('Form is missing fields')
      }

      const item = await worker.deleteComposition(token, composition)

      response.json(item)
      return true
    }),
  )
}