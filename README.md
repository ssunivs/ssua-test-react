# 슈아는 패션왕

## 소개

- 슈아 캐릭터와 인형 및 슈니버스 팀 홍보를 위한 프로젝트
- MBTI 테스트와 유사하게, 상황을 제시 & 그에 대한 답변을 통해 점수를 계산한 뒤, 유형을 보여주는 테스트
- [링크](https://dev.ssunivs.com)

## 기술 스택

- frontend
    - React.js
    - styled-component
    - redux
- backend
    - none
- deploy
    - Netlify

## 폴더 구조

- src
    - component: 리액트 컴포넌트
        - common
        - question
        - result
    - containers: react-redux 컨테이너
    - lib
        - api: 질문 데이터 load & 응답 결과 처리 # 추후 Backend 연동 대비를 위해 비동기로 데이터 제공
        - styles: color-set & break-point
    - modules: redux 관련 코드. Ducks 패턴으로 구성
    - pages: react-router 가 라우팅할 페이지 컴포넌트
    - App.js
    - index.js