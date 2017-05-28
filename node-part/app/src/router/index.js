import Router from 'koa-router'
import source from './api_v1/source'
import { resMsg } from '../helper'
const router = Router()

router.prefix('/')

router.get('/', async (ctx, next) => {
  ctx.body = resMsg({ data: {} })
  next()
})

export default (app) => {
  app.use(router.routes())
  app.use(source.routes())
}
