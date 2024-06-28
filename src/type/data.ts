import { CategoryType } from "./homepage";

export interface GetItemType {
  isProfitable?: boolean;
  id: number;
  name: string;
  description: string;
  category: CategoryType;
  rate: number;
  yearRate: number;
  investNum: number;
  startDate: string;
  endDate: string;
  method: string;
  price: number;
  dday: number;
  imgUrl: string;
}

interface MyInvestType {
  type: "string";
  ratio: number;
}
export interface ProfileType {
  name: string;
  imgUrl: string;
  coin: number;
  rate: number;
  myInvest: MyInvestType[];
  myCategory: CategoryType[];
}
