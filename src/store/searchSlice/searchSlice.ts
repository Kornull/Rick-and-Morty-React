import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export type SearchDataType = {
  type: string;
  valueSearch: string;
  searchCard: string;
  page: number;
};

type SearchState = {
  search: SearchDataType;
};

export const InitialSearchState: SearchState = {
  search: {
    type: 'all',
    valueSearch: '',
    searchCard: '',
    page: 1,
  },
};

export const searchSlice = createSlice({
  name: 'cards',
  initialState: InitialSearchState,
  reducers: {
    searchCard(state: SearchState, action: PayloadAction<string>) {
      state.search.valueSearch = action.payload;
    },
    searchCardToPage(state: SearchState, action: PayloadAction<string>) {
      state.search.searchCard = action.payload;
    },
    searchStatus(state: SearchState, action: PayloadAction<string>) {
      state.search.type = action.payload;
    },

    pageNumber(state: SearchState, action: PayloadAction<number>) {
      state.search.page = action.payload;
    },
  },
});

export const { pageNumber, searchCard, searchCardToPage, searchStatus } = searchSlice.actions;
export default searchSlice.reducer;
