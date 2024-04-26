/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const CommentsController = () => import('#controllers/comments_controller')
const MomentsController = () => import('#controllers/moments_controller')

router
  .group(() => {
    router.resource('/moments', MomentsController).apiOnly()

    router.post('/moments/:momentId/comments', [CommentsController, 'store'])
    router.get('/moments/:momentId/comments', [CommentsController, 'show'])
  })
  .prefix('/api')
