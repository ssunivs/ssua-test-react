import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import Logo from '../components/common/Logo';
import Illustration from '../components/common/Illustration';
import Button from '../components/common/Button';
import Responsive from '../components/common/Responsive';
import * as bp from '../lib/styles/BreakPoints';

const StyledText = styled.p`
  word-break: keep-all;
  margin: auto auto 30px;

  @media (${bp.small}) {
    max-width: 500px;
  }
`;

const EntrancePage = () => {
  useEffect(() => {
    localStorage.clear();
  });
  return (
    <>
      <Helmet>
        <title>슈아가 언제 졸업할까?</title>
      </Helmet>
      <Responsive>
        <Logo />
        <Illustration />
        <StyledText>
          때는 바야흐로 20세기 날 좋은 날,
          <br />
          숭실대학교 학생들과 학교를 같이 다니고 싶던 영물(靈物) 백마 한 마리가
          백마상에서 탈출하게 되는데...
          <br />
          <br />
          여기 저기 도와주는게 좋아 슈니버스에서 모델 알바를 하며 자발적으로 N년
          째 재학 중인 슈아!그렇게 미루고 미뤄온 졸업을 슈아는 언제쯤 할 수
          있을까요?
          <br />
        </StyledText>
        <Button blue fullWidth to="/question/1">
          알아보러 가기
        </Button>
      </Responsive>
    </>
  );
};

export default EntrancePage;
