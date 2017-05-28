import mongoose from 'mongoose'
import { MONGODB_URL } from '/config/config.js'

mongoose.Promise = global.Promise
mongoose.connect(MONGODB_URL)
module.exports = mongoose
