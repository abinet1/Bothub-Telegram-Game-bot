import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface IUserState { 
  username: string, 
  location?: {
    label: string, 
    value: string, 
    icon?: React.ReactNode
  }, 
  rank?: number, 
  score?: number 
}

export interface IUserStateUpdate { 
  location?: {
    label: string, 
    value: string, 
    icon?: React.ReactNode
  }, 
  rank?: number, 
  score?: number 
}

export interface UserState {
  user: IUserState|null;
}

const initialState: UserState = {
  user: null,
};


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUserState>) => {
      state.user = action.payload;
    },
    setUpdate: (state, action: PayloadAction<IUserStateUpdate>) => {
      state.user = {...state.user, ...action.payload, username: state.user?.username || ''};
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser, setUpdate } = userSlice.actions;
const userReducer = userSlice.reducer;

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;