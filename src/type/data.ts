import { CategoryType } from "./homepage";

export interface GetItemType {
  id: number;
  name: string;
  category: CategoryType;
  isProfitable: boolean;
  rate: number;
  startDate: string;
  endDate: string;
  method: string;
  investNum: number;
  imgUrl: string;
}

export interface GetDeadlineItemType {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  price: number;
  yearRate: number;
  dDay: number;
}
