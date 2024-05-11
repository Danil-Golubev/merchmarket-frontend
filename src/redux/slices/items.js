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
export const fetchGetMusic = createAsyncThunk('/fetchGetMusic', async()=>{
    const {data} = await axios.get('/getItemsMusic')
    return data;
})

export const fetchGetApparel = createAsyncThunk('/fetchGetApparel', async()=>{
    const {data} = await axios.get('/getItemsApparel')
    return data;
})

export const fetchGetOther= createAsyncThunk('/fetchGetOther', async()=>{
    const {data} = await axios.get('/getItemsOther')
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
        [fetchGetMusic.pending]:(state,action)=>{
            state.status = "loading";
            state.data = null;
        },
        [fetchGetMusic.fulfilled]:(state,action)=>{
            state.status = "loaded";
            state.data = action.payload
        },
        [fetchGetMusic.rejected]:(state,action)=>{
            state.status = "loading";
            state.data = [];
        },
        [fetchGetApparel.pending]:(state,action)=>{
            state.status = "loading";
            state.data = null;
        },
        [fetchGetApparel.fulfilled]:(state,action)=>{
            state.status = "loaded";
            state.data = action.payload
        },
        [fetchGetApparel.rejected]:(state,action)=>{
            state.status = "loading";
            state.data = [];
        },
    },
    [fetchGetOther.pending]:(state,action)=>{
        state.status = "loading";
        state.data = null;
    },
    [fetchGetOther.fulfilled]:(state,action)=>{
        state.status = "loaded";
        state.data = action.payload
    },
    [fetchGetOther.rejected]:(state,action)=>{
        state.status = "loading";
        state.data = [];
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