import { Express } from 'express'

import Worker from '../classes/Worker'
import wrapRoute from '../utils/wrapRoute'

import { ServerlessRoute } from './types'

export const name = 'getComposeOfUser'

export const execute: ServerlessRoute = (app: Express, worker: Worker) => {
  app.get(
    '/user/composes',
    wrapRoute(async function (request, response) {
      const { user: id } = request.query

      if (!id) {
        throw new Error(
          'There are not enough fields of information required to process the request.',
        )
      }

      //
      const resulr = await worker.getComposeOfUser(id as string)

      //
      response.json({ user: id, composes: resulr })

      return true
    }),
  )
}
