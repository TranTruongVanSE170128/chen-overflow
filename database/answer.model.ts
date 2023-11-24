import { Document, Schema, model, models } from 'mongoose'

export interface IAnswer extends Document {
  author: Schema.Types.ObjectId
  content: string
  question: Schema.Types.ObjectId
  upvotes: Schema.Types.ObjectId[]
  downvotes: Schema.Types.ObjectId[]
  createdAt: Date
}

const AnswerSchema = new Schema({
  content: {
    type: String,
    required: true
  },

  upvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  downvotes: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User'
    }
  ],
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  question: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Question'
  },
  createdAt: { type: Date, default: Date.now() }
})

const Answer = models.Answer || model('Answer', AnswerSchema)

export default Answer
