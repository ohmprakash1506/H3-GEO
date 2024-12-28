import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    lat:'',
    lng:'',
    resolution:'',
    center: null,
    boundary: [],
    status:'idle',
    error: null
}

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMapState: (state, action) => {
            state.lat = action.payload.lat
            state.lng = action.payload.lng
            state.resolution = action.payload.resolution
        }
    }
})