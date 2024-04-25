import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'

export default class MomentsController {
  async store({ request, response }: HttpContext) {
    const body = request.body()
    const moment = await Moment.create(body)

    response.status(201)
    return {
      message: 'Momento criado com sucesso',
      data: moment,
    }
  }
}
