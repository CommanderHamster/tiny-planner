import {createSlice} from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: 'searchR',
  initialState: {},
  reducers: {
    "GET_SEARCH_REQUESTED": (state, action) => {return { loading: true }},
    "GET_SEARCH_FAILED": () => {return { loading: false, failed: true }},
    "GET_SEARCH_SUCCEEDED": (state, action) => {return { loading: false, ...action.payload }},
  }
})

export const { GET_SEARCH_REQUESTED, GET_SEARCH_FAILED, GET_SEARCH_SUCCEEDED } = searchSlice.actions

export default searchSlice.reducer
