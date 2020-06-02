import { Express } from 'express'

import Worker from '../classes/Worker'
import onRoute from '../utils/onRoute'

import { ServerlessRoute } from './types'

export const name = 'createUser'

export const execute: ServerlessRoute = (app: Express, worker: Worker) => {
  app.put(
    '/user',
    onRoute(async (request, response) => {
      const { authorization: token } = request.headers
      const { data } = request.body

      const formIsMissing = !token || !data
      if (formIsMissing) {
        throw new Error('Form is missing fields')
      }

      const item = await worker.updateUser(token as string, data)

      response.json(item)
      return true
    }),
  )
}