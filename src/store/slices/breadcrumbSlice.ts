import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Breadcrumb {
  path: string;
  breadcrumb: string;
}

interface BreadcrumbState {
  breadcrumbs: Breadcrumb[];
}

const initialState: BreadcrumbState = {
  breadcrumbs: [],
};

const breadcrumbSlice = createSlice({
  name: "breadcrumbs",
  initialState,
  reducers: {
    setBreadcrumbs: (state, action: PayloadAction<Breadcrumb[]>) => {
      state.breadcrumbs = action.payload;
    },
  },
});

export const { setBreadcrumbs } = breadcrumbSlice.actions;
export default breadcrumbSlice.reducer;
