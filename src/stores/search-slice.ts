import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define a type for the slice state
export interface ISearchState {
  placeholder: string;
  searchType: string;
}

// Define the initial state using that type
const initialState: ISearchState = {
  placeholder: 'Enter search text...',
  searchType: 'GLOBAL',
};

export const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchAction: (state, action:PayloadAction | any) => {
      switch(action.payload){
        case '/': state.placeholder = 'Enter search text...',  state.searchType = 'GLOBAL'; break;
        case '/orders-new':
            state.placeholder = 'Enter new orders...',  state.searchType = 'NEW_ORDER'; break;
        case '/order-completed':
            state.placeholder = 'Enter completed orders...',  state.searchType = 'COMPLETED_ORDER'; break;
        case '/order-cancelled':
            state.placeholder = 'Enter cancelled orders...',  state.searchType = 'CANCELLED_ORDER'; break;
        case '/leads':
            state.placeholder = 'Enter leads...',  state.searchType = 'LEADS'; break;
        default: 
            state.placeholder = 'Enter search text...',  state.searchType = 'GLOBAL'; break;
    }
    },
  },
});

export const { setSearchAction } = SearchSlice.actions;
export default SearchSlice.reducer;
