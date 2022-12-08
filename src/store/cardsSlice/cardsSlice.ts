import { createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { AboutCard } from 'components/types/types';
import { createSlice } from '@reduxjs/toolkit';

export type CardInfo = {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: AboutCard[];
  viewPersonCard: boolean;
  personId: number | null;
  loading: boolean;
  error?: string | null;
};
type CardState = {
  cards: CardInfo;
};
export const InitialCardsState: CardState = {
  cards: {
    info: {
      count: 0,
      pages: 0,
      next: null,
      prev: null,
    },
    results: [],
    viewPersonCard: false,
    personId: null,
    loading: false,
  },
};

let newData: CardInfo;

export const fetchSearchCards = createAsyncThunk<CardInfo, string>(
  'cards/fetchSearchCards',
  async (searchPageLink: string) => {
    await fetch(searchPageLink)
      .then((response: Response) => response.json())
      .then((data: CardInfo) => {
        if (data.error?.length) {
          newData = InitialCardsState.cards;
        } else {
          newData = data;
        }
      });

    return newData;
  }
);

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: InitialCardsState,
  reducers: {
    setPersonCard(state: CardState, action: PayloadAction<boolean>) {
      state.cards.viewPersonCard = action.payload;
    },
    setPersonId(state: CardState, action: PayloadAction<number | null>) {
      state.cards.personId = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSearchCards.pending, (state) => {
        state.cards.loading = true;
        state.cards.error = null;
      })
      .addCase(fetchSearchCards.fulfilled, (state, action) => {
        state.cards.loading = false;
        state.cards = action.payload;
      });
  },
});

export const { setPersonCard, setPersonId } = cardsSlice.actions;
export default cardsSlice.reducer;
