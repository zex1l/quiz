export type QuizPageParams = {
  quizId: string;
};

export type AnswerPageParams = {
  quizId: string;
  answerId: string;
};

export const PARAMS = {
  quizId: 'quizId',
  answerId: 'answerId',
};

export const ROUTES = {
  HOME: '/',
  QUIZES_LIST: '/quizes',
  QUIZE: `/quizes/:${PARAMS.quizId}`,
  QUIZE_ANSWER: `/quizes/:${PARAMS.quizId}/:${PARAMS.answerId}`,
};
