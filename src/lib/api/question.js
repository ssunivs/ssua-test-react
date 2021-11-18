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

      let item;
      let description;
      let image;

      if (count >= 15) {
        item = '과잠';
        description =
          '혹시 당신은 미니멀리스트? 학잠 과잠 지박령인 당신... \n' +
          '화려한 것보다는 내가 편한 게 최고야! 패션왕이 되려면 조금 험난한 길을 걸으셔야 할 지도 모르겠어요..! \n' +
          '편안하고 익숙한 것도 좋지만 가끔씩은 내 안의 멋을 밖으로 표현해보자구요 :)';
        image = '1-jacket.png';
      } else if (count >= 12) {
        item = '안경';
        description =
          '패션에 대해 조금 더 분발해봐요^-^\n' +
          '안경은 패션의 베이직템!!!\n' +
          '그래도 슈아의 귀여운 매력이 뿜뿜하는 아이템이네요. 슈아의 매력포인트는 20% 상승했습니다~ \n' +
          '슈아의 매력을 더 올릴 수 있는 잇 아이템을 찾기 위해서 조금 더 노력해봐야겠네요!!';
        image = '2-glasses.png';
      } else if (count >= 9) {
        item = '양말';
        description =
          '패션의 완성은 디테일! 양말까지 신경쓰기 시작하는 당신은 패션 새내기~ \n' +
          '전보다 센스있어졌다는 말을 종종 듣지 않나요? \n' +
          '멋진 패턴을 가진 양말을 매칭해 슈아의 캠퍼스 패션을 업그레이드 해보자구요!';
        image = '3-socks.png';
      } else if (count >= 6) {
        item = '가방';
        description =
          '수납력 짱짱! 그 와중에 패션을 포기할 수 없다.. \n' +
          '가방은 슈아에게 없어서는 안될 패션템이죠!\n' +
          '동에번쩍! 서에번쩍! 도움이 필요한 학생들을 위해 고군분투하는 슈아,,, 도라에몽 주머니와 같은 슈아의 가방!\n' +
          '심플하고 간결한 가방 로고가 아주 인상적이네요! 확 튀지는 않지만, 센스있는 룩을 완성시킬 가방을 선택한 당신.. \n' +
          '잠재력을 가진 패션피플!!';
        image = '4-echobag.png';
      } else if (count >= 3) {
        item = '핸드폰케이스';
        description =
          '평범함은 거부한다! 나만의 개성을 표현하는 커스터마이징 케이스! \n' +
          '슈아가 좋아하는 파랑색 그림과 숭냥이가 프린팅되어 있네요~ \n' +
          '주변을 돌보는 것을 좋아하는 슈아는 종종 숭냥이를 챙기곤 한답니다. \n' +
          '슈아의 취향으로 가득한 케이스로 슈아를 표현해보자구요~!';
        image = '5-phonecase.png';
      } else if (count >= 2) {
        item = '마스크';
        description =
          '코로나 시기에 꼭 필요한 마스크ㅠㅠ\n' +
          '슈아는 그 와중에 유쾌함도 멋도 잃지 않는군요.. 마스크를 쓰면 표정이 읽히지 않는데,,,\n' +
          '언제나 웃는 얼굴을 보여주고 싶은 슈아의 배려심 넘치는 마음이 드러나는 아이템이네요!!\n' +
          '나만을 위한 패션도 좋지만, 주변인들을 위한 따듯한 마음이 돋보이는 패션,,,\n' +
          '이미 당신은 사람을 아우르는 숨은 패션고수일지도..!!';
        image = '6-mask.png';
      } else if (count >= 1) {
        item = '비니';
        description =
          'hey mama,, 네? 어디선가 노래가 들리신다구요,,? \n' +
          '이 노래가 들리는 당신, 잠들어 있는 슈아의 끼를 발산시켜줄 무대를 찾아 길거리로 떠나는 거예요. \n' +
          '아, 옷이 평범해서 자신감이 떨어진다구요? 걱정마세요. \n' +
          '이 파란색 비니가 슈아의 패션에 힙함을 더해줄거니까요.';
        image = '7-beanie.png';
      } else if (count >= 0) {
        item = '스카프';
        description =
          '날씨가 많이 쌀쌀해졌어요!!\n' +
          '모두 감기 조심하세요~~~\n' +
          '스카프는 목건강도 지킬수 있지만,\n' +
          '슈아가 좋아하는 파란장미로 포인트를 준 스카프는 오히려 멋짐을 뿜뿜시키는 패션 강력템이 되었네요!! \n' +
          '이제는 남들에게 눈에 띄지 않지만 최고의 패션을 보여주는 꾸.안.꾸의 고수가 되었군요,,,, \n' +
          '슈아의 멋짐을 더 빛내주셔서 감사합니다^-^';
        image = '8-scarf.png';
      } else {
        item = '왕관';
        description =
          '당신.. 이미 범접할 수 없는 패.션.왕.이 되어버린 걸지도...? \n' +
          '손에 닿는 아이템마다 슈아와 찰떡궁합인 패션계의 미다스의 손...! \n' +
          '당신은 이 왕관을 쓸 자격이 충분합니다!! \n' +
          '부디 이 왕관을 쓰고 슈아와 함께 패션왕의 영광을 맘껏 누려주세요~!';
        image = '9-crown.png';
      }

      const data = { item, description, image };

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
