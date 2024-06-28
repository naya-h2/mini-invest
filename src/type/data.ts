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

export interface GetDeadlineItemType {
  id: number;
  name: string;
  imgUrl: string;
  description: string;
  price: number;
  yearRate: number;
  dDay: number;
}
