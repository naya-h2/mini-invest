import { GetItemType, ProfileType } from "../type/data";

//인기있는 투자 & 인기 top3
export const POPULAR_DATA: GetItemType[] = [
  {
    id: 1,
    name: "몬스테라 오벨리스카",
    category: "희귀식물",
    isProfitable: true,
    rate: 6.04,
    yearRate: 2.0,
    dday: 3,
    startDate: "2024.05.12",
    endDate: "2024.05.24",
    method: "토큰화 투자",
    investNum: 78,
    imgUrl: "https://i.pinimg.com/564x/fb/2b/2a/fb2b2a83e2ffb95dc3b862fc0823970e.jpg",
    price: 240000000,
    description: "녹색과 흰색이 섞인 잎이 매력적인 희귀식물",
  },
  {
    id: 2,
    name: "바리에가티드 에덴늄",
    category: "희귀식물",
    isProfitable: true,
    rate: 12.04,
    yearRate: 2.0,
    dday: 3,
    startDate: "2024.05.12",
    endDate: "2024.05.24",
    method: "토큰화 투자",
    investNum: 78,
    imgUrl: "https://i.pinimg.com/564x/66/ac/96/66ac96e847c9e78c82850abd1b50826f.jpg",
    price: 240000000,
    description: "녹색과 흰색이 섞인 잎이 매력적인 희귀식물",
  },
  {
    id: 3,
    name: "오데마 피게 로얄 오크",
    category: "명품",
    isProfitable: false,
    rate: 1.42,
    yearRate: 2.0,
    dday: 3,
    startDate: "2024.05.12",
    endDate: "2024.05.24",
    method: "토큰화 투자",
    investNum: 78,
    imgUrl: "https://i.pinimg.com/564x/f2/ce/38/f2ce3803b5683fbc04fc15c7fde88f51.jpg",
    price: 240000000,
    description: "녹색과 흰색이 섞인 잎이 매력적인 희귀식물",
  },
];

export const PROFILE: ProfileType = {
  name: "유지민",
  imgUrl: "https://i.pinimg.com/736x/1c/1d/8e/1c1d8e0dbf45dbe1644125bb0eea97a5.jpg",
  coin: 400000,
  rate: 2.14,
  myInvest: [
    {
      type: "국내 부동산",
      ratio: 64,
    },
    {
      type: "국내 미술품",
      ratio: 24,
    },
    {
      type: "독립영화",
      ratio: 8,
    },
  ],
  myCategory: ["희귀식물", "명품", "독립영화"],
};
