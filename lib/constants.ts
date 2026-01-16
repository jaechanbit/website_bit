import { NavItem, Course, Notice, Review } from './types';

export const APP_NAME = "바른컴퓨터학원";
export const CONTACT_PHONE = "02-1234-5678";
export const ADDRESS = "서울특별시 교육구 배움로 123, 3층";

export const NAVIGATION: NavItem[] = [
  { label: '학원소개', path: '/intro' },
  {
    label: '교육과정',
    children: [
      { label: '국민내일배움카드 과정', path: '/course/national' },
      { label: '초·중·고 교육과정', path: '/course/student' },
    ],
  },
  {
    label: '시험센터',
    children: [
      { label: 'ITQ 시험센터', path: '/exam/itq' },
      { label: 'DIAT 시험센터', path: '/exam/diat' },
    ],
  },
  { label: '수강후기·성과', path: '/review' },
  { label: '공지사항', path: '/notice' },
];

export const NATIONAL_COURSES: Course[] = [
  {
    id: 'n1',
    title: 'ITQ 마스터 과정 (한글/엑셀/파워포인트)',
    description: '사무행정의 기본이 되는 OA 핵심 자격증 취득 과정입니다. 국비지원으로 수강 가능합니다.',
    target: 'NATIONAL',
    tags: ['ITQ', '사무행정', '자격증'],
    image: 'https://picsum.photos/800/600?random=1',
  },
  {
    id: 'n2',
    title: '컴퓨터활용능력 1급 실기 취득반',
    description: '취업 필수 자격증 컴활 1급 실기를 체계적으로 준비하는 심화 과정입니다.',
    target: 'NATIONAL',
    tags: ['컴활1급', '엑셀', '데이터베이스'],
    image: 'https://picsum.photos/800/600?random=2',
  },
  {
    id: 'n3',
    title: 'ITQ 한글 + 엑셀 실무반',
    description: '자격증 취득과 동시에 실제 업무에서 쓰이는 문서 작성 및 스프레드시트 활용법을 익힙니다.',
    target: 'NATIONAL',
    tags: ['실무', '문서작성', '초보자가능'],
    image: 'https://picsum.photos/800/600?random=3',
  },
];

export const STUDENT_COURSES: Course[] = [
  {
    id: 's1',
    title: '창의 융합 프로그래밍 (스크래치/엔트리)',
    description: '코딩을 처음 접하는 학생들을 위한 블록 코딩 입문 과정입니다.',
    target: 'STUDENT',
    tags: ['초등', '입문', '창의력'],
    image: 'https://picsum.photos/800/600?random=4',
  },
  {
    id: 's2',
    title: '텍스트 코딩 마스터 (파이썬/C언어)',
    description: '본격적인 프로그래밍 언어를 학습하며 알고리즘적 사고를 기릅니다.',
    target: 'STUDENT',
    tags: ['중고등', '심화', '알고리즘'],
    image: 'https://picsum.photos/800/600?random=5',
  },
  {
    id: 's3',
    title: 'OA 자격증 집중반 (ITQ/DIAT)',
    description: '학교 과제 및 수행평가에 필수적인 문서 작성 능력을 키우고 자격증을 취득합니다.',
    target: 'STUDENT',
    tags: ['자격증', '수행평가', '필수'],
    image: 'https://picsum.photos/800/600?random=6',
  },
  {
    id: 's4',
    title: '디자인 크리에이터 (포토샵/일러스트)',
    description: '자신만의 콘텐츠를 디자인하고 제작하는 그래픽 툴 기초 및 활용 과정입니다.',
    target: 'STUDENT',
    tags: ['디자인', '그래픽', '창작'],
    image: 'https://picsum.photos/800/600?random=7',
  },
];

export const MOCK_REVIEWS: Review[] = [
  { id: 1, name: '김*수', course: '컴퓨터활용능력 1급', rating: 5, date: '2023.10.15', content: '처음에는 너무 어려웠는데 강사님이 1:1로 꼼꼼하게 봐주셔서 한 번에 합격했습니다!' },
  { id: 2, name: '이*민 학부모', course: '초등 파이썬 기초', rating: 5, date: '2023.10.12', content: '아이가 컴퓨터 학원 가는 날만 기다려요. 선생님들이 아이 눈높이에서 잘 가르쳐주십니다.' },
  { id: 3, name: '박*정', course: 'ITQ 마스터 과정', rating: 4, date: '2023.09.28', content: '국비지원으로 부담 없이 들을 수 있어서 좋았습니다. 시설도 깨끗하고 쾌적해요.' },
];

export const MOCK_NOTICES: Notice[] = [
  { id: 1, category: '공지', title: '2023년 11월 국비과정 개강 안내', date: '2023.10.20' },
  { id: 2, category: '시험', title: '제15회 ITQ 정기시험 접수 안내', date: '2023.10.15' },
  { id: 3, category: '소식', title: '초등부 여름방학 특강 수료식 현장', date: '2023.10.05' },
  { id: 4, category: '공지', title: '추석 연휴 휴강 안내', date: '2023.09.20' },
];