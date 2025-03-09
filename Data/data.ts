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
  //rating: number;
  profession: string;
  image: string;
}

interface AboutInfoType {
  title: string;
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

// interface BlogType {
//   id: number;
//   title: string;
//   summary: string;
//   date: string;
//   image: string;
// }

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
      "안녕하십니까!\n\nKSA 회장직에 출마하는 21학번 Marketing 전공하고 있는 권혁인입니다.\n저는 여러분과 함께하는 학생회가 되기를 희망하며 다양한 활동을 통해 즐거운 대학생활을 만들어가고 싶습니다.\n\n한인 학생회 회장으로서 투명한 학생회 및 열린 마인드셋으로 한인 학생들에게 다가가겠습니다.\n\n 한국의 문화를 전파하며, 학생 간의 유대감을 강화하여 더 발전된 커뮤니티를 구축하는 데 기여하고자 합니다. \n 이러한 목표를 달성하기 위해 저는 여러분과 함께 즐길 수 있는 이벤트를 구성하고, 함께 성장할 수 있는 커뮤니티를 만들어가겠습니다.\n\n저는 탁월한 리더십을 바탕으로 학생회 및 한인 학생들의 의견을 존중하고 적극적으로 소통하며, 다양한 사람들과 어울릴 수 있는 사교성을 지니고 있습니다. \n또한, 긍정적인 사고로 어려운 상황에서도 희망을 잃지 않고 새로운 도전을 두려워하지 않으며 지속적으로 성장하는 것을 목표로 삼고 있습니다. \n이러한 제 특성들은 제가 학생회 회장직에 적합한 후보임을 증명하며, 함께하는 모든 사람들과 긍정적인 변화를 만들어나가는 데 기여할 것입니다.\n\n저는 여러분의 의견에 귀 기울이고, 실질적인 변화를 만드는 학생회장이 되기 위해 최선을 다하겠습니다. \n성공적인 한 해를 함께 만들어 나가기를 바라며, 여러분의 귀중한 지지를 부탁드리겠습니다. 감사합니다!",
    //rating: 4.6,
    profession: "KSA President",
    image: "/images/u3.png",
  },
  {
    name: "김희승",
    review:
      "안녕하십니까!\n\n이번 학생회에 External Vice President 로 출마하는  21학번 Operation Management 전공 하고 있는 김희승입니다.\n\n과기대에서 학업과 생활을 이어오면서, 학생회가 학생들에게 얼마나 중요한 역할을 하는지깊이 실감했습니다.\n 학생회는 단순한 조직을 넘어, 유학생들의 든든한 버팀목이자 서로를 연결하는 다리 역할을 합니다.\n 이같은 귀중한 책무를 가진 조직을 더욱 발전시키고, 학생들을 위한 변화를 직접 만들어가고 싶다는 마음으로 지원하게 되었습니다.\n과거 학창 시절, 학생회와 여러 동아리에서 부장을 맡으며 조직을 운영하고 다양한 행사를 기획한 경험이 있습니다.\n 이러한 경험을 바탕으로 차기 회장을 도와 학생회의 일원으로서 책임감 있게 역할을 수행하고, 학생들에게 더욱 만족스럽고 의미 있는 대학 생활을 만들고자합니다.\n\n학생들의 의견을 최우선으로 반영하겠습니다.\n\nEVP로서 가장 중요하게 생각하는 것은 소통과 의견 수렴입니다. 정기적인 소통 창구를 운영하여 학생들의 다양한 의견을 적극 반영하고, 이에 맞는 행사와 프로그램을 기획하겠습니다.\n 부족한 점이 있다면 빠르게 개선하고, 보다 발전적인 방향으로 학생회를 운영하여 모든 학생이 만족할 수 있는 변화를 만들어가겠습니다.\n\n학생 간 교류와 네트워킹을 활성화하겠습니다.\n\n지난 학교 생활을 돌아보았을 때, 많은 한인 학생들이 있음에도 불구하고 학생들 간의 교류와 소통이 부족한 점이 가장 아쉽게 다가왔습니다.\n 이를 해결하기 위해 신입생과 재학생이 자연스럽게 어울릴 수 있는 네트워킹 행사, 다양한 커뮤니티와의 협업을 통한 교류 프로그램,\n 그리고 학생들이 함께할 수 있는 흥미로운 이벤트를 적극적으로 기획하겠습니다.\n풍요롭고 의미 있는 대학 생활을 만들겠습니다.\n\n저는 학생들이 서로 소통하고, 성장하며, 대학 생활을 보다 의미 있게 보낼 수 있도록 최선을 다할것입니다.\n 후회 없이, 그리고 아쉬움 없이 더 즐겁고, 더 가치 있는 대학 생활을 누릴 수 있도록 적극적으로 노력하겠습니다.\n\n 감사합니다.",
    //rating: 4.6,
    profession: "External Vice President",
    image: "/images/u1.png",
  },
  {
    name: "김수형",
    review:
      "안녕하십니까!\n\n이번에 Internal Vice President으로 출마하는 21학번 MGMT 전공 김수형입니다.\n\n저의 목표는 학생들과의 소통을 강화하고, 이를 바탕으로 학생들의 의견과 요구를 반영한프로그램과 정책을 만들어가는 것입니다.\n 또한, 신입생과 재학생 간의 연결을 도모하여,모두가 편안하고 즐거운 커뮤니티를 형성하는 데 기여하고자 출마하게 되었습니다.\n\n지속적인 KSA가 되겠습니다.\n\n과기대 생활은 학업적으로 스트레스가 많습니다. 이러한 애로사항을 KSA에서 학기 중 흥미로운 이벤트들을 통해 조금이나마 즐거운 학교생활이 되게 도움이 되고 싶습니다.\n단순히 하루 즐거운 것이 아닌, 지속적으로 여러분들이 과기대에 다니며 즐거우실 수 있게하겠습니다.\n\n열린 KSA가 되겠습니다.\n\n저는 KSA란, 뽑아주시는 여러분들께 보답하는 마음가짐으로 행하여야 된다고 생각합니다.\n월간 회계 보고 와 KSA 월간 일정 보고 및 회의록 공개를 통해 여러분들께 더 다가가고 투명한 KSA를 만들도록 노력하겠습니다.\n\n다국적 이벤트를 주관하겠습니다.\n\n저는 해외 유학의 이점 중 하나가 여러 문화권의 조화라고 생각합니다. 다른 학생회와의 협업을 통해 여러분들이 다양한 사람들을 만나며 경험을 하실 수 있도록 두 발로 뛰겠습니다.\n여러분들이 있기에 KSA가 존재해왔습니다. 21년도부터 시작된 한인회가 이제는 15기를 앞두고 있습니다. 여러분들께 앞으로 잊히지 않을, 인상 깊을 15기 학생회가 되겠습니다.",
    //rating: 4.6,
    profession: "Internal Vice President",
    image: "/images/u2.png",
  },
];

export const aboutInfo: AboutInfoType = {
  title: "공약 세부 설명",
  description: "",
  client: "50+",
  experience: "3+",
  project: "200+",
  website: "100+",
};

export const servicesData: ServiceType[] = [
  {
    id: 1,
    title: "2025 년 3월",
    description:
      "임원진 모집\n삼일절 이벤트\n다음 학생회 기수 지원 및 투표\n중간고사 이벤트",
    icon: "/images/march.png",
  },
  {
    id: 2,
    title: "2025 년 4월",
    description: "미드텀 브레이크 이벤트",
    icon: "/images/april.png",
  },
  {
    id: 3,
    title: "2025 년 5월",
    description: "기말고사 이벤트\n기수 마무리 인사\n다음 기수 인수인계",
    icon: "/images/may.png",
  },
  {
    id: 4,
    title: "2025 년 6월",
    description: "여름방학",
    icon: "/images/june.png",
  },
  {
    id: 5,
    title: "2025 년 7월",
    description: "여름방학",
    icon: "/images/july.png",
  },
  {
    id: 6,
    title: "2025 년 8월",
    description:
      "신입생 환영회 (한국)\n신입생 오리엔테이션\n썸컴 모집\n신규동아리 모집\n과잠 및 KSA 옷 신청",
    icon: "/images/aug.png",
  },
  {
    id: 7,
    title: "2025 년 9월",
    description:
      "가을학기\n개강총회 (BePlain) 및 개강파티\n멘토멘티 모집\nMT\n과잠 및 KSA 옷 분배\n보트파티",
    icon: "/images/sep.png",
  },
  {
    id: 8,
    title: "2025 년 10월",
    description: "중간고사 이벤트",
    icon: "/images/oct.png",
  },
  {
    id: 9,
    title: "2025 년 11월",
    description: "eSports 이벤트 (리그 오브 레전드)\n썸컴 기획 이벤트",
    icon: "/images/nov.png",
  },
  {
    id: 10,
    title: "2025 년 12월",
    description: "기말고사 이벤트\n새해 인사",
    icon: "/images/dec.png",
  },
  {
    id: 11,
    title: "2026 년 1월",
    description: "겨울 방학",
    icon: "/images/jan.png",
  },
  {
    id: 12,
    title: "2026 년 2월",
    description:
      "봄학기\n개강총회 및 개강파티\n봄 맞이 소개팅\n과기대 내 타 학생회 연합 이벤트",
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
//   {
//     id: 2,
//     title: "CSS",
//     image: "/images/css.svg",
//     percent: "97%",
//   },
//   {
//     id: 3,
//     title: "JavaScript",
//     image: "/images/js.svg",
//     percent: "77%",
//   },
//   {
//     id: 4,
//     title: "TypeScript",
//     image: "/images/ts.svg",
//     percent: "67%",
//   },
//   {
//     id: 5,
//     title: "HTML",
//     image: "/images/html.svg",
//     percent: "67%",
//   },
//   {
//     id: 6,
//     title: "Node JS",
//     image: "/images/node.svg",
//     percent: "77%",
//   },
//   {
//     id: 7,
//     title: "MongoDB",
//     image: "/images/mongo.svg",
//     percent: "65%",
//   },
//   {
//     id: 8,
//     title: "Python",
//     image: "/images/python.svg",
//     percent: "55%",
//   },
//   {
//     id: 9,
//     title: "Firebase",
//     image: "/images/firebase.svg",
//     percent: "75%",
//   },
//   {
//     id: 10,
//     title: "Vue",
//     image: "/images/vue.svg",
//     percent: "35%",
//   },
// ];

// export const blogs: BlogType[] = [
//   {
//     id: 1,
//     title: "Top Web Development Trends to Watch in 2024",
//     summary:
//       "Explore the key web development trends for 2024 and their impact on your business.",
//     date: "August 18, 2024",
//     image: "/images/b1.jpg",
//   },
//   {
//     id: 2,
//     title: "Why Your Business Needs a Custom Web Application",
//     summary:
//       "Discover why custom web applications are crucial for driving business growth and efficiency.",
//     date: "August 10, 2024",
//     image: "/images/b2.jpg",
//   },
//   {
//     id: 3,
//     title: "The Importance of Website Speed Optimization",
//     summary:
//       "Understand how website speed impacts user experience and learn essential optimization tips.",
//     date: "July 25, 2024",
//     image: "/images/b3.jpg",
//   },
// ];

export const contactData: ContactDataType = {
  phone: "+88(012345 789)",
  email: "example@gmail.com",
  address: "Dhaka , Bangladesh",
};
