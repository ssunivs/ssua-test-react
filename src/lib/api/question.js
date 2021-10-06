import QuestionData from './question-data';

export const list = () => {
  return new Promise((resolve, reject) => {
    try {
      process.nextTick(() => {
        resolve({
          data: QuestionData,
        });
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
};
