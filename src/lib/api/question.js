export const list = () => {
  return new Promise((resolve, reject) => {
    try {
      process.nextTick(() => {
        resolve({ data: [] });
      });
    } catch (error) {
      console.error(error);
    }
  });
};
