/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const MomentsController = () => import('#controllers/moments_controller')

router
  .group(() => {
    router.resource('/moments', MomentsController).apiOnly()
  })
  .prefix('/api')
