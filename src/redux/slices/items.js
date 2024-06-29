import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from '../../axios'
const initialState = {
    data:null,
    status:'loading'
}
export const fetchGetItems = createAsyncThunk('/fetchGetItems', async()=>{
    const {data} = await axios.get('/getItems')
    return data;
})

export const fetchGetOne= createAsyncThunk('/fetchGetOne', async(id)=>{
    const {data} = await axios.get(`/item/${id}`)

    return data;
})

const itemSlice = createSlice({
    name:"item",
    initialState,
    extraReducer:{
        [fetchGetItems.pending]:(state,action)=>{
            state.status = "loading";
            state.data = null;
        },
        [fetchGetItems.fulfilled]:(state,action)=>{
            state.status = "loaded";
            state.data = action.payload
        },
        [fetchGetItems.rejected]:(state,action)=>{
            state.status = "loading";
            state.data = [];
        },

    },

    [fetchGetOne.pending]:(state,action)=>{
        state.status = "loading";
        state.data = null;
    },
    [fetchGetOne.fulfilled]:(state,action)=>{
        state.status = "loaded";
        state.data = action.payload
    },
    [fetchGetOne.rejected]:(state,action)=>{
        state.status = "loading";
        state.data = [];
    },
    
    
    
})
export const itemReducer = itemSlice.reducer;