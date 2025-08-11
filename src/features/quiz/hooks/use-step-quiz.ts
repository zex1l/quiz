import { useState } from 'react';

export type Step = 'preview' | 'quiz' | 'result';

export const useStepQuiz = () => {
  const [step, setStep] = useState<Step>('preview');

  const onChangeStep = (step: Step) => {
    setStep(step);
  };

  return { step, onChangeStep };
};
