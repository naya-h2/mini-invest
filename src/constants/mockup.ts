import { GetItemType, ProfileType } from "../type/data";

export const PROFILE: ProfileType = {
  name: "유지민",
  imgUrl: "https://cdn.slist.kr/news/photo/202406/559461_884638_4410.jpg",
  coin: 400000,
  rate: 2.14,
  myInvest: [
    {
      type: "국내 공동구매",
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
  myCategory: ["식물", "명품", "독립영화"],
};
