export const Step = Object.freeze({
  START: 0,
  JOB: 1,
  BEHAVIOR: 2,
  BUSYNESS: 3,
  CURRENT: 4,
  EMOTION: 5,
  ASSET: 6,
  FINISH: 7,
});

export const Questions = Object.freeze([
  {
    step: 1,
    question: '나의 직업은?',
    options: ['직장 / 학생', '홈 프로텍터'],
    tag: ['유직', '무직'],
  },
  {
    step: 2,
    question: '나는 오늘 주로',
    options: ['업무 / 수업 듣기', '휴식 / 아무것도 안하기'],
    tag: ['활동', '휴식'],
  },
  {
    step: 3,
    question: '나는 지금',
    options: ['화장실도 못 갈 정도로 바쁘다', '이보다 더 여유로울 수 없다'],
    tag: ['바쁨', '여유'],
  },
  {
    step: 4,
    question: '나는 지금',
    options: ['심심하다', '놀고 싶다', '쉬고 싶다', '집에 가고 싶다'],
    tag: ['심심', '유흥', '지침', '귀가'],
  },
  {
    step: 5,
    question: '나의 기분은?',
    options: [
      '흥미진진',
      '너무 화나!!',
      '기분이 좋아~',
      '..속상해',
      '신!!!이!!나!!!',
      '어이가 없네',
      '뭔 상관이야',
      '지루해',
      '사랑에 빠졌어',
    ],
    tag: ['흥미', '화남', '행복', '속상', '신남', '허탈', '냉소', '지루', '사랑'],
  },
  {
    step: 6,
    question: '지금 내 지갑 상황은?',
    options: ['고기나 먹을까?', '라면으로 세끼 때우자'],
    tag: ['부자', '거지'],
  },
]);