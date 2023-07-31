import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const initialState = {
    data: [],
    error: "",
    status: false,
}

export const userFetchThunk = createAsyncThunk(
    "userFetchThunk/get",
    async () => {
        try {

            const { data } = await axios.get("https://panorbit.in/api/users.json")
            // console.log(data, "sellerSliceeeeeeee")
            return data.users;
        } catch (error) {
            if (error.response.status === 404) {
                throw new Error("something Wrong")
            }
            if (error.response.status === 500) {
                throw new Error("Server error")
            }
        }
    }
)
const userSlice = createSlice({
    name: "emp",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(userFetchThunk.pending, (state, action) => {
            state.data = ['pending'];
            state.status = true;
            state.error = "";
        })
        builder.addCase(userFetchThunk.fulfilled, (state, action) => {
            state.data = action.payload;
            state.status = false;
            state.error = "";
        })
        builder.addCase(userFetchThunk.rejected, (state, action) => {
            state.data = ['rejected'];
            state.status = false;
            state.error = action.error.message;
        })
    }

})
export default userSlice.reducer;