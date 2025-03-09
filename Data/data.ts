// Define interfaces for each data type
interface BaseInfoType {
  name: string;
  position: string;
  description: string;
  profilePic: string;
}

interface ReviewType {
  name: string;
  review: string;
  rating: number;
  profession: string;
  image: string;
}

interface AboutInfoType {
  description: string;
  client: string;
  experience: string;
  project: string;
  website: string;
}

interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface ProjectType {
  title: string;
  id: number;
  image: string;
  url: string;
}

// interface SkillType {
//   id: number;
//   title: string;
//   image: string;
//   percent: string;
// }

interface BlogType {
  id: number;
  title: string;
  summary: string;
  date: string;
  image: string;
}

interface ContactDataType {
  phone: string;
  email: string;
  address: string;
}

// Export data with types
export const BaseInfo: BaseInfoType = {
  name: "",
  position: "KSA 후보 1번",
  description:
    "회장 후보: 권혁인\n외무부 부회장: 김희승\n내무부 부회장: 김수형",
  profilePic: "/images/hero.jpg",
};

export const clientReviews: ReviewType[] = [
  {
    name: "권혁인",
    review:
      'KSA 회장직에 출마하는 21학번 Marketing 전공 권혁인입니다.\n\n✦ 투명하고 열린 학생회 운영\n✦ 한국 문화 전파 및 학생 간 유대감 강화\n✦ 참여형 이벤트로 즐거운 대학생활 구축\n✦ 적극적 소통으로 실질적 변화 추구\n\n"여러분의 목소리가 KSA의 미래입니다. 함께 만들어가겠습니다."',
    rating: 4.6,
    profession: "KSA President\n카카오톡 아이디: your_kakao_id",
    image: "/images/u3.png",
  },
  {
    name: "김희승",
    review:
      'External Vice President로 출마하는 21학번 Operation Management 전공 김희승입니다.\n\n✦ 학생 의견 최우선 정책 수립\n✦ 정기적 소통 창구 운영\n✦ 신입생-재학생 네트워킹 활성화\n✦ 다양한 커뮤니티와 협업 확대\n\n"더 즐겁고, 더 가치 있는 대학 생활을 만들겠습니다."',
    rating: 4.6,
    profession: "External Vice President\n카카오톡 아이디: your_kakao_id",
    image: "/images/u1.png",
  },
  {
    name: "김수형",
    review:
      'Internal Vice President로 출마하는 21학번 MGMT 전공 김수형입니다.\n\n✦ 지속적인 학기 중 이벤트 기획\n✦ 월간 회계·일정·회의록 공개\n✦ 다국적 이벤트 주관\n✦ 학생 의견 기반 프로그램 개발\n\n"11년부터 이어진 한인회, 15기에서 잊지 못할 변화를 만들겠습니다."',
    rating: 4.6,
    profession: "Internal Vice Presiden\n카카오톡 아이디: your_kakao_id",
    image: "/images/u2.png",
  },
];

export const aboutInfo: AboutInfoType = {
  description: "",
  client: "50+",
  experience: "3+",
  project: "200+",
  website: "100+",
};

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "2025 년 6월",
    description: "여름 방학",
    icon: "/images/march.png",
  },
  {
    id: 2,
    title: "2025 년 7월",
    description: "여름 방학",
    icon: "/images/april.png",
  },
  {
    id: 3,
    title: "2025 년 8월",
    description:
      "신입생 환영회\n신입생 오리엔테이션\n썸컴 모집\n신규동아리 모집\n과잠 및 KSA 옷 분배",
    icon: "/images/may.png",
  },
  {
    id: 4,
    title: "2025 년 9월",
    description:
      "개강총회 (BePain) 및 개강파티\n맨토맨티 모집\nMT\n과잠 및 KSA 옷 분배\n 보트파티",
    icon: "/images/june.png",
  },
  {
    id: 5,
    title: "2025 년 10월",
    description: "중간고사 이벤트",
    icon: "/images/july.png",
  },
  {
    id: 6,
    title: "2025 년 11월",
    description: "eSports (리그 오브 레전드)\n썸컴 기획 이벤트",
    icon: "/images/aug.png",
  },
  {
    id: 7,
    title: "2025 년 12월",
    description: "기말고사 이벤트\n새해인사",
    icon: "/images/sep.png",
  },
  {
    id: 8,
    title: "2026 년 1월",
    description: "겨울 방학",
    icon: "/images/oct.png",
  },
  {
    id: 9,
    title: "2026 년 2월",
    description:
      "개강총회 및 개강파티\n 봄맞이 소개팅 \n 과기대 내 타 학생회 연합 이벤트",
    icon: "/images/nov.png",
  },
  {
    id: 10,
    title: "2026 년 3월",
    description:
      "삼일절 이벤트\n다음 학생회 기수 지원 및 투표\n중간고사 이벤트",
    icon: "/images/dec.png",
  },
  {
    id: 11,
    title: "2026 년 4월",
    description: "미드텀 브레이크 이벤트",
    icon: "/images/jan.png",
  },
  {
    id: 12,
    title: "2026 년 5월",
    description: "기말고사 이벤트\n기수 마무리 인사\n다음 기수 인수인계",
    icon: "/images/feb.png",
  },
];

export const projectData: ProjectType[] = [
  {
    id: 1,
    title: "",
    image: "/images/p1.png",
    url: "https://drive.google.com/file/d/1K4RaSoFmUdTm7k_PGivcpSk3MnEDaLRC/view",
  },
  {
    id: 2,
    title: "",
    image: "/images/p2.png",
    url: "https://drive.google.com/file/d/1K4RaSoFmUdTm7k_PGivcpSk3MnEDaLRC/view",
  },
  {
    id: 3,
    title: "",
    image: "/images/p3.png",
    url: "https://drive.google.com/file/d/1K4RaSoFmUdTm7k_PGivcpSk3MnEDaLRC/view",
  },
  {
    id: 4,
    title: "",
    image: "/images/p4.png",
    url: "https://drive.google.com/file/d/1K4RaSoFmUdTm7k_PGivcpSk3MnEDaLRC/view",
  },
  {
    id: 5,
    title: "",
    image: "/images/p5.png",
    url: "https://drive.google.com/file/d/1K4RaSoFmUdTm7k_PGivcpSk3MnEDaLRC/view",
  },
];

// export const skillsData: SkillType[] = [
//   {
//     id: 1,
//     title: "React",
//     image: "/images/react.svg",
//     percent: "90%",
//   },
//   // ... other skills data
// ];

export const blogs: BlogType[] = [
  {
    id: 1,
    title: "Top Web Development Trends to Watch in 2024",
    summary:
      "Explore the key web development trends for 2024 and their impact on your business.",
    date: "August 18, 2024",
    image: "/images/b1.jpg",
  },
  {
    id: 2,
    title: "Why Your Business Needs a Custom Web Application",
    summary:
      "Discover why custom web applications are crucial for driving business growth and efficiency.",
    date: "August 10, 2024",
    image: "/images/b2.jpg",
  },
  {
    id: 3,
    title: "The Importance of Website Speed Optimization",
    summary:
      "Understand how website speed impacts user experience and learn essential optimization tips.",
    date: "July 25, 2024",
    image: "/images/b3.jpg",
  },
];

export const contactData: ContactDataType = {
  phone: "+88(012345 789)",
  email: "example@gmail.com",
  address: "Dhaka , Bangladesh",
};
