import { create } from "zustand";
import { CategorySlice, createCategorySlice } from "./CategorySlice";

type SliceType = CategorySlice;

export const useStore = create<SliceType>((...a) => ({
  ...createCategorySlice(...a),
}));
