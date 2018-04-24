const question = {
  _id: 1,
  title: 'How do JavaScript closures work?',
  description: 'How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves? I ...',
  createdAt: new Date(),
  icon: 'devicon-javascript-plain colored',
  answers: [],
  user: {
    firstName: 'Luis',
    lastName: 'Mendoza',
    email: 'luis@mendoza.com',
    password: '123456'
  }
}

const questions = new Array(10).fill(question)

export const questionsMiddleware = (req, res, next) => {
  req.questions = questions
  next()
}

export const questionMiddleware = (req, res, next) => {
  const { id } = req.params
  req.question = questions.find(({ _id }) => _id === +id)
  next()
}
