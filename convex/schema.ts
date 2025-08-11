import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  quizzes: defineTable({
    name: v.string(),
    description: v.string(),
    tags: v.array(v.string()),
    difficulty: v.string(),
    cards: v.array(
      v.object({
        id: v.string(),
        question: v.string(),
        options: v.array(v.string()),
        correctAnswer: v.string(),
      })
    ),
  })
    .index('by_tags', ['tags'])
    .index('by_difficulty', ['difficulty']),

  quizResults: defineTable({
    quizId: v.id('quizzes'),
    username: v.string(),
    answers: v.record(v.string(), v.string()),
    score: v.number(),
    total: v.number(),
  }).index('by_quiz', ['quizId']),
});
