import { createSlice } from "@reduxjs/toolkit";


type User = {
    id: number;
    firstName: string;
    lastName: string;
}


export type CounterState = {
    user?: User;
    isLoggedIn?: boolean;
}
  
const initialState: CounterState = {
    user: undefined,
    isLoggedIn: undefined,
}


export const counterSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        setAuthState(state, action) {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setUser, setAuthState } = counterSlice.actions;

export const userReducer = counterSlice.reducer;
