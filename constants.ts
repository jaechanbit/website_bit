import { CourseCategory, Notice } from './types';

export const INITIAL_NOTICES: Notice[] = [
  {
    id: 1,
    title: '[공지] 2024년 국비지원 과정 수강생 모집',
    date: '2024-05-20',
    content: '2024년 하반기 국민내일배움카드 국비지원 과정 수강생을 모집합니다. 자세한 일정은 학원으로 문의바랍니다.'
  },
  {
    id: 2,
    title: '[시험] 제15회 ITQ 정기시험 접수 안내',
    date: '2024-05-15',
    content: '이번 달 ITQ 정기시험 접수가 시작되었습니다. 원서 접수는 사무실에서 대행 가능합니다.'
  },
  {
    id: 3,
    title: '[휴강] 6월 6일 현충일 휴강 안내',
    date: '2024-05-10',
    content: '6월 6일 현충일은 법정공휴일로 휴강합니다. 착오 없으시기 바랍니다.'
  }
];

export const CURRICULUM_DATA: CourseCategory[] = [
  {
    id: 'national',
    title: '국민내일배움카드 과정 (국비지원)',
    items: [
      {
        title: 'ITQ 취득과정',
        description: '한글, 엑셀, 파워포인트 자격증 취득',
        tags: ['ITQ', 'OA', '자격증']
      },
      {
        title: '컴퓨터활용능력 1급 실기',
        description: '스프레드시트, 데이터베이스 실무 능력 향상',
        tags: ['컴활1급', '실기', '고급']
      },
      {
        title: '워드프로세서 + 컴활 2급 실기',
        description: '기본적인 문서작성 및 표계산 능력 함양',
        tags: ['워드', '컴활2급', '기초']
      },
      {
        title: 'ITQ (한글, 엑셀) 기초과정',
        description: '컴퓨터 기초부터 시작하는 자격증 입문',
        tags: ['초급', 'ITQ']
      }
    ]
  },
  {
    id: 'general',
    title: '학생 / 일반 과정',
    items: [
      { title: '프로그래밍', description: 'C언어, 스크래치, 파이썬 기초 및 활용', tags: ['Coding', 'Dev'] },
      { title: 'OA 실무', description: '한글, 파워포인트, 엑셀 실무 마스터', tags: ['Office'] },
      { title: '자격증 취득', description: 'ITQ, DIAT 자격증 전문 대비반', tags: ['License'] },
      { title: '그래픽 디자인', description: '포토샵, 일러스트레이터, 인디자인', tags: ['Design'] },
      { title: '컴퓨터그래픽스운용기능사', description: '국가기술자격증 필기/실기 대비', tags: ['Professional'] },
      { title: '고급 OA', description: '컴활 1급, 워드프로세서 자격증', tags: ['Advanced'] },
      { title: '전산회계', description: '전산회계 1급, 2급 자격증 취득', tags: ['Accounting'] },
      { title: '기술 자격증', description: '정보처리기사, 정보처리기능사', tags: ['Tech'] },
      { title: '사무자동화', description: '사무자동화산업기사 자격증', tags: ['Industrial'] },
      { title: '뉴미디어', description: '미리캔버스, 유튜브 크리에이터, 블로그/SNS 마케팅', tags: ['Media'] }
    ]
  }
];