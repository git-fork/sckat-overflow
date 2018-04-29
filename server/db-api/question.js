import Debug from 'debug'
import { Question } from '../models'

const debug = new Debug('sckat-overflow:db-api:question')

export default {
  findAll: async () => {
    debug('Finding all questions')
    return await Question.find().populate('answers')
  },

  findById: async (_id) => {
    debug(`Finding question with id ${id}`)
    return await Question
      .findOne({ _id })
      .populate('user')
      .populate({
        path: 'answers',
        options: { sort: '-createdAt' },
        populate: {
          path: 'user',
          model: 'User'
        }
      })
  }
}
