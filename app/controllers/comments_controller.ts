import type { HttpContext } from '@adonisjs/core/http'
import Comment from '#models/comment'
import Moment from '#models/moment'
import logger from '@adonisjs/core/services/logger'

export default class CommentsController {
  async index() {
    const comments = await Comment.all()
  }

  async store({ request, params, response }: HttpContext) {
    const commentBody = request.body()
    const momentId = params.momentId

    await Moment.findOrFail(momentId)

    commentBody.momentId = momentId

    const comment = await Comment.create(commentBody)

    response.status(201)

    return {
      message: 'Comentário adicionado com Sucesso!',
      data: comment,
    }
  }

  async show({ params, response }: HttpContextContract) {
    if (!params.momentId) {
      return response.status(400).send({ message: 'ID do momento não fornecido.' })
    }

    const momentId = params.momentId
    const moment = await Moment.find(momentId)

    if (!moment) {
      return response.status(404).send({ message: 'Momento não encontrado!' })
    }

    const comments = await Comment.query().where('momentId', momentId)

    return response.status(200).send({
      message:
        comments.length > 0
          ? 'Comentários recuperados com sucesso!'
          : 'Nenhum comentário encontrado.',
      data: comments,
    })
  }
}
