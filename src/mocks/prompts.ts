export type PromptDTO = {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string;
  views: number;
  createdAt: string;
  author: {
    id: number;
    name: string;
  };
};

export const prompts: PromptDTO[] = [
  {
    id: 1,
    title: 'ChatGPT로 블로그 글 작성하기',
    description:
      '당신은 전문 블로그 작가입니다. 다음 주제에 대해 SEO 최적화된 블로그 글을 작성해주세요. 주제: [여기에 주제 입력] 요구사항: - 2000자 이상 - 자연스러운 키워드 배치 - 소제목 3개 이상 포함 - 독자 친화적인 톤',
    category: '글쓰기',
    tags: 'ChatGPT',
    views: 1200,
    createdAt: '2024.01.14',
    author: { id: 1, name: '김프로프트' },
  },
  {
    id: 2,
    title: '이미지 생성 프롬프트 - 판타지 배경',
    description:
      'A mystical fantasy landscape with floating islands, waterfalls cascading into clouds, aurora borealis in the sky, ancient magical ruins, vibrant purple and blue color scheme, cinematic lighting, 8k, highly detailed, trending on artstation',
    category: '이미지 생성',
    tags: 'Midjourney',
    views: 894,
    createdAt: '2024.05.06',
    author: { id: 2, name: '익명' },
  },
  {
    id: 3,
    title: '시니어 엔지니어 코드 리뷰 요청 프롬프트',
    description:
      '당신은 시니어 소프트웨어 엔지니어입니다. 다음 코드를 리뷰하고 개선점을 제안해주세요: [코드 입력] 다음 관점에서 분석해주세요: 1. 코드 품질 및 가독성 2. 성능 최적화 가능성 3. 보안 취약점 4. 베스트 프랙티스 적용 여부 5. 구체적인 개선 코드 제시',
    category: '개발',
    tags: 'Claude',
    views: 570,
    createdAt: '2024.06.14',
    author: { id: 3, name: '개발자' },
  },
  {
    id: 4,
    title: '마케팅 이메일 제목 생성 프롬프트',
    description:
      '당신은 퍼포먼스 마케터입니다. 신규 서비스 홍보를 위한 이메일 제목 10가지를 제안해주세요. 각 제목은 30자 이내이며, 호기심을 유발하고 스팸 필터에 걸리지 않는 문구여야 합니다.',
    category: '마케팅',
    tags: 'ChatGPT',
    views: 2150,
    createdAt: '2024.02.01',
    author: { id: 4, name: '마케터A' },
  },
  {
    id: 5,
    title: '스타트업 아이디어 브레인스토밍',
    description:
      '당신은 실리콘밸리 스타트업 멘토입니다. 아래 타깃 고객을 위한 SaaS 아이디어 5가지를 제안해주세요. 각 아이디어에는 문제 정의, 해결 방법, 수익 모델을 포함해주세요. 타깃: 1인 개발자.',
    category: '기획',
    tags: 'Claude',
    views: 742,
    createdAt: '2024.03.10',
    author: { id: 5, name: '기획자' },
  },
  {
    id: 6,
    title: 'Notion 템플릿 구조 설계 프롬프트',
    description:
      '당신은 생산성 컨설턴트입니다. 프리랜서 디자이너를 위한 Notion 워크스페이스 구조를 설계해주세요. 프로젝트, 클라이언트, 인보이스, 개인 할 일 페이지로 구성하고, 각 데이터베이스 필드를 제안해주세요.',
    category: '생산성',
    tags: 'Notion AI',
    views: 389,
    createdAt: '2024.04.02',
    author: { id: 6, name: '워크플로우' },
  },
  {
    id: 7,
    title: 'YouTube 스크립트 자동 생성 프롬프트',
    description:
      '당신은 유튜브 콘텐츠 크리에이터입니다. 10분 길이의 영상 스크립트를 작성해주세요. 주제: [여기에 주제 입력]. 인트로-본론-마무리 구조를 따르고, 구독과 좋아요를 자연스럽게 유도하는 멘트를 포함해주세요.',
    category: '영상',
    tags: 'ChatGPT',
    views: 3105,
    createdAt: '2024.01.28',
    author: { id: 7, name: '콘텐츠메이커' },
  },
  {
    id: 8,
    title: '포트폴리오 코드 리뷰 요청 프롬프트',
    description:
      '당신은 프론트엔드 채용 담당자입니다. 아래 React 코드 스니펫을 리뷰하고, 합격/불합격 여부와 그 이유를 상세히 설명해주세요. 성능, 가독성, 접근성 관점에서 피드백을 제공해주세요.',
    category: '개발',
    tags: 'ChatGPT',
    views: 998,
    createdAt: '2024.07.03',
    author: { id: 3, name: '개발자' },
  },
  {
    id: 9,
    title: 'Midjourney 캐릭터 시트 생성 프롬프트',
    description:
      'full body character sheet, front and side view, expression sheet, anime style, clean lineart, white background, highly detailed, consistent character design, 4k, artstation quality',
    category: '이미지 생성',
    tags: 'Midjourney',
    views: 1860,
    createdAt: '2024.05.18',
    author: { id: 8, name: '일러스트레이터' },
  },
  {
    id: 10,
    title: '서비스 이용약관 초안 작성 프롬프트',
    description:
      '당신은 IT 서비스 전문 변호사입니다. 아래 서비스 설명을 기반으로 한국 법률을 준수하는 서비스 이용약관 초안을 작성해주세요. 조항은 이용계약, 개인정보, 금지행위, 면책조항, 분쟁 해결로 구성해주세요.',
    category: '법무',
    tags: 'Claude',
    views: 412,
    createdAt: '2024.02.20',
    author: { id: 9, name: '로펌AI' },
  },
  {
    id: 11,
    title: '개발자 이력서 요약 프롬프트',
    description:
      '당신은 기술 채용 리크루터입니다. 아래 이력서 내용을 5줄 이내로 요약하고, 강점 3가지와 아쉬운 점 2가지를 bullet로 정리해주세요. 포지션은 프론트엔드 시니어 개발자입니다.',
    category: '커리어',
    tags: 'ChatGPT',
    views: 1290,
    createdAt: '2024.03.22',
    author: { id: 10, name: '커리어코치' },
  },
  {
    id: 12,
    title: 'OKR 작성 보조 프롬프트',
    description:
      '당신은 조직 컨설턴트입니다. 아래 회사 소개와 분기 목표를 바탕으로 팀별 OKR 초안을 작성해주세요. 각 Objective마다 3개의 측정 가능한 Key Result를 포함해야 합니다.',
    category: '조직관리',
    tags: 'Claude',
    views: 655,
    createdAt: '2024.04.12',
    author: { id: 11, name: '조직설계자' },
  },
  {
    id: 13,
    title: '코드 리팩토링 계획 수립 프롬프트',
    description:
      '당신은 레거시 프로젝트를 맡은 리드 엔지니어입니다. 아래 코드베이스 설명을 보고, 4주 동안 진행할 리팩토링 계획을 세워주세요. 우선순위, 예상 리스크, 코드 예시를 포함해주세요.',
    category: '개발',
    tags: 'ChatGPT',
    views: 480,
    createdAt: '2024.06.01',
    author: { id: 3, name: '개발자' },
  },
  {
    id: 14,
    title: '프롬프트 엔지니어링 교육용 예제 세트',
    description:
      '당신은 프롬프트 엔지니어링 강사입니다. 초급자 교육을 위해 좋은/나쁜 프롬프트 예시를 각각 5개씩 만들어주세요. 각 프롬프트에는 개선 전/개선 후 버전을 함께 제시해주세요.',
    category: '교육',
    tags: 'ChatGPT',
    views: 2033,
    createdAt: '2024.01.30',
    author: { id: 12, name: '트레이너' },
  },
  {
    id: 15,
    title: '고객 인터뷰 질문 리스트 생성',
    description:
      '당신은 UX 리서쳐입니다. 신규 기능 출시 전 고객 인터뷰에 사용할 질문 15가지를 만들어주세요. 개방형 질문 위주로, 문제 인식, 현재 행동, 니즈를 검증할 수 있어야 합니다.',
    category: '리서치',
    tags: 'Claude',
    views: 367,
    createdAt: '2024.05.27',
    author: { id: 13, name: 'UX연구원' },
  },
  {
    id: 16,
    title: '데일리 저널링 프롬프트 세트',
    description:
      '당신은 심리 상담사입니다. 매일 자기 성찰을 돕는 저널링 질문 7가지를 만들어주세요. 각 질문은 하루를 돌아보고 감정, 성취, 배움을 기록할 수 있도록 설계해주세요.',
    category: '자기계발',
    tags: 'ChatGPT',
    views: 1544,
    createdAt: '2024.02.05',
    author: { id: 14, name: '라이프코치' },
  },
  {
    id: 17,
    title: '코딩 테스트 문제 생성 프롬프트',
    description:
      '당신은 알고리즘 문제 출제자입니다. 난이도 중급의 코딩 테스트 문제 3개를 만들어주세요. 각 문제는 입력/출력 예시, 제한사항, 시간 복잡도 힌트를 포함해야 합니다.',
    category: '개발',
    tags: 'Claude',
    views: 921,
    createdAt: '2024.06.20',
    author: { id: 15, name: '알고리즘연구소' },
  },
  {
    id: 18,
    title: '뉴스 요약 및 인사이트 생성',
    description:
      '당신은 경제 전문 기자입니다. 아래 뉴스 기사 원문을 5줄로 요약하고, 개인 투자자 관점에서 인사이트 3가지를 bullet로 작성해주세요.',
    category: '요약',
    tags: 'Perplexity',
    views: 1880,
    createdAt: '2024.03.05',
    author: { id: 16, name: '뉴스요약러' },
  },
  {
    id: 19,
    title: '코드리뷰 댓글 템플릿 생성',
    description:
      "당신은 팀 리드입니다. 코드 리뷰 시 공감과 개선 제안을 함께 담을 수 있는 댓글 템플릿 5개를 작성해주세요. 상황별로 '칭찬 중심', '학습 유도', '리팩토링 제안' 등의 톤을 나눠주세요.",
    category: '개발',
    tags: 'ChatGPT',
    views: 433,
    createdAt: '2024.07.01',
    author: { id: 3, name: '개발자' },
  },
  {
    id: 20,
    title: '서비스 네이밍 브레인스토밍',
    description:
      '당신은 브랜드 네이밍 전문가입니다. AI 프롬프트 공유 플랫폼을 위한 서비스 이름 후보 20개를 제안해주세요. 한국어/영어를 섞어서 제시하고, 각 이름의 의미와 느낌을 한 줄로 설명해주세요.',
    category: '브랜딩',
    tags: 'ChatGPT',
    views: 2005,
    createdAt: '2024.04.30',
    author: { id: 17, name: '브랜딩스튜디오' },
  },
];
