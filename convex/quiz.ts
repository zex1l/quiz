import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getQuizById = query({
  args: { id: v.id('quizzes') },
  handler: async (ctx, { id }) => {
    const quiz = await ctx.db.get(id);

    if (!quiz) {
      throw new Error('Quiz not found');
    }

    return quiz;
  },
});

export const getQuizzesList = query({
  args: {
    // tags: v.optional(v.array(v.string())),
    // difficulty: v.optional(v.string()),
  },
  handler: async (ctx) => {
    // let queryBuilder = ctx.db.query('quizzes');

    // // Фильтр по сложности с использованием индекса
    // if (difficulty) {
    //   queryBuilder = queryBuilder.withIndex('by_difficulty', (q) =>
    //     q.eq('difficulty', difficulty)
    //   );
    // }

    // const quizzes = await queryBuilder.collect();

    // // Фильтрация по тегам на стороне сервера
    // if (tags && tags.length > 0) {
    //   return quizzes.filter((quiz) =>
    //     tags.every((tag) => quiz.tags.includes(tag))
    //   );
    // }

    return ctx.db.query('quizzes').collect();
  },
});

export const checkAnswers = mutation({
  args: {
    id: v.id('quizzes'),
    answers: v.record(v.string(), v.string()),
    name: v.string(),
  },
  handler: async (ctx, { id, answers, name }) => {
    let totalScore = 0;

    const quiz = await ctx.db.get(id);

    if (!quiz) {
      throw new Error('Quiz not found');
    }

    const cards = quiz.cards;

    for (let i = 0; i < cards.length; i++) {
      const card = cards[i];

      if (card.correctAnswer === answers[card.id]) {
        totalScore += 1;
      }
    }

    const result = await ctx.db.insert('quizResults', {
      quizId: id,
      answers,
      score: totalScore,
      total: cards.length,
      username: name,
    });

    return result;
  },
});

export const getQuizResults = query({
  args: { id: v.id('quizResults') },
  handler: async (ctx, { id }) => {
    const result = await ctx.db.get(id);

    if (!result) {
      throw new Error('Result not found');
    }

    const quiz = await ctx.db.get(result.quizId);

    if (!quiz) {
      throw new Error('Quiz not found');
    }

    return { quiz, result };
  },
});
