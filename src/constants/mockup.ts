import { GetItemType, ProfileType } from "../type/data";

export const PROFILE: ProfileType = {
  name: "유지민",
  imgUrl: "https://i.pinimg.com/564x/19/ff/f1/19fff10e9ee3e6eb48e3f5b4a747685b.jpg",
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
