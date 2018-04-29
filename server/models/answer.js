import mongoose, { Schema } from 'mongoose'

const AnswerSchema = new Schema({
  description: { type: String, required: true },
  createdAt: { type: Data, required: true, default: Date.now }
})

export default mongoose.model('Answer', AnswerSchema)
