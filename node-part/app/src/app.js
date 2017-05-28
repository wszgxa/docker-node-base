import Koa from 'koa'
import logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'
// router
import build from './router/index'
import {NODE_PORT, NODE_ENV} from '../config/config.js'

import { resMsg } from './helper.js'
const app = new Koa()
// 错误处理
app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
  }
})
// 接口错误处理
app.use(async (ctx, next) => {
  await next()
  if(ctx.err != undefined ) {
    ctx.body = resMsg(false, ctx.err)
  }
})
app.use(bodyParser())
app.use(logger())
app.use(json())
build(app)

app.listen(NODE_PORT || 3000)
console.log(`Server up and running in ${NODE_ENV}! On port ${NODE_PORT || 3000}!`)
