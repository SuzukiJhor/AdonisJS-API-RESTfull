import type { HttpContext } from '@adonisjs/core/http'
import Moment from '#models/moment'
import app from '@adonisjs/core/services/app'
import { v4 as uuidv4 } from 'uuid'

export default class MomentsController {
  private vaildationOptions = {
    types: ['image'],
    size: '2mb',
  }
  async store({ request, response }: HttpContext) {
    const body = request.body()

    const image = request.file('image', this.vaildationOptions)

    if (image) {
      const imageName = `${uuidv4()}.${image.extname}`
      await image.move(app.tmpPath('uploads'), {
        name: imageName,
      })

      body.image = imageName
    }
    const moment = await Moment.create(body)

    response.status(201)
    return {
      message: 'Momento criado com sucesso',
      data: moment,
    }
  }

  async index() {
    const moments = await Moment.all()

    return {
      data: moments,
    }
  }

  async show({ params }: HttpContext) {
    if (params.id) {
      const moment = await Moment.findOrFail(params.id)

      return {
        data: moment,
      }
    }
  }

  async destroy({ params }: HttpContext) {
    if (params.id) {
      const moment = await Moment.findOrFail(params.id)

      await moment.delete()

      return {
        message: 'Momento deletado com sucesso!',
        data: moment,
      }
    }
  }
}
