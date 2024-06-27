import { StateCreator } from "zustand";
import { CategoryType } from "../type/homepage";

export interface CategorySlice {
  category: CategoryType;
  setCategory: (item: CategoryType) => void;
}

export const createCategorySlice: StateCreator<CategorySlice> = (set) => ({
  category: "전체보기",
  setCategory: (item) => set((state) => ({ ...state, category: item })),
});
