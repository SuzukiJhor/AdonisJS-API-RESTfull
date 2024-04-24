import type { HttpContext } from '@adonisjs/core/http'

export default class MomentsController {
  async store() {
    return {
      msg: 'deu certo!',
    }
  }
}
