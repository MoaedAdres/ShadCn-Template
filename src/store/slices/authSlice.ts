import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
    id: string | null;
    token: string | null;
    isLoggedIn: boolean;
}

const initialState: AuthState = {
    id: null,
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ id: string; token: string }>) => {
            state.id = action.payload.id;
            state.token = action.payload.token;
            state.isLoggedIn = true;
        },
        logout: (state) => {
            state.id = null;
            state.token = null;
            state.isLoggedIn = false;
        },
    },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
