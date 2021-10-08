import QuestionData from './question-data';

export const list = () =>
  new Promise((resolve, reject) => {
    try {
      const data = QuestionData;
      process.nextTick(() => {
        resolve({
          data,
        });
      });
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });

export const result = ({ answer }) =>
  new Promise((resolve, reject) => {
    try {
      //process the answer
      const count = answer.reduce((acc, cur) => {
        return (acc += cur.value === 'T' ? 1 : 0);
      }, 0);

      let title;
      let description;

      if (count >= 15) {
        title = '2XXX 교수님 슈아';
        description =
          '혹시 교수가 될 상인가, 마이웨이 슈아, 뚝심 있게 나만의 길을 간다! 그치만 언제 졸업할 지는 아무도 몰라😂';
      } else if (count >= 12) {
        title = '2100 학교의 수호자';
        description =
          '언제나 내가 행복하게!라며 조금 더 자신이 좋아하는 일을 해나가는 타입';
      } else if (count >= 9) {
        title = '2060 슈아는 열정맨';
        description =
          '엄청난 열정으로 내 앞에 놓인 일들을 다 처리한다. 열쩡!열쩡! 슈아에게 졸업은 중요하지 않아효ㅎㅎ';
      } else if (count >= 6) {
        title = '2040 낭만 슈아';
        description =
          '뽀로로 슈아, 뭐든 즐거운게 좋아!! 지금 이순간 함께하는 이들과의 시간이 중요해!';
      } else if (count >= 3) {
        title = '2020년 졸업생 슈아';
        description = '슈아 드디어 인싸 슈아, 공부도 학교 생활도 모두 열심!';
      } else {
        title = '2000년 이미 졸업한 것 아니었어요?';
        description = '효율성 X 추진력 갑 슈아, 이미 졸업한 것 아니었나요?';
      }

      const data = { title, description };

      setTimeout(() => {
        resolve({
          data,
        });
      }, 500);
    } catch (error) {
      console.error(error);
      reject(error);
    }
  });
