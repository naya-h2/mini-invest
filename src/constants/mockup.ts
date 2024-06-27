import { GetItemType } from "../type/data";

//인기있는 투자 & 인기 top3
export const POPULAR_DATA: GetItemType[] = [
  {
    id: 1,
    name: "몬스테라 오벨리스카",
    category: "희귀식물",
    isProfitable: true,
    rate: 6.04,
    startDate: "2024.05.12",
    endDate: "2024.05.24",
    method: "토큰화 투자",
    investNum: 78,
    imgUrl: "https://i.pinimg.com/564x/fb/2b/2a/fb2b2a83e2ffb95dc3b862fc0823970e.jpg",
  },
  {
    id: 2,
    name: "바리에가티드 에덴늄",
    category: "희귀식물",
    isProfitable: true,
    rate: 12.04,
    startDate: "2024.05.12",
    endDate: "2024.05.24",
    method: "토큰화 투자",
    investNum: 78,
    imgUrl: "https://i.pinimg.com/564x/66/ac/96/66ac96e847c9e78c82850abd1b50826f.jpg",
  },
  {
    id: 3,
    name: "오데마 피게 로얄 오크",
    category: "명품",
    isProfitable: false,
    rate: 1.42,
    startDate: "2024.05.12",
    endDate: "2024.05.24",
    method: "토큰화 투자",
    investNum: 78,
    imgUrl: "https://i.pinimg.com/564x/f2/ce/38/f2ce3803b5683fbc04fc15c7fde88f51.jpg",
  },
];
