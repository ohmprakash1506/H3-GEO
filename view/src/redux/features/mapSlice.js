import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
    lat: '',
    lng: '',
    resolution: '',
    submit: false
};

const mapSlice = createSlice({
    name: 'map',
    initialState,
    reducers: {
        setMapState: (state, action) => {
            state.lat = action.payload.lat 
            state.lng = action.payload.lng 
            state.resolution = action.payload.resolution 
        },
        clearMapState: (state) => {
            state.lat = '';
            state.lng = '';
            state.resolution = '';
            state.submit = false
        },
        setSubmitState: (state, action) => {
            console.log(`action:`, action);
            state.submit = action.payload.submit
        } 
    },
});

export const { setMapState, clearMapState, setSubmitState } = mapSlice.actions;
export default mapSlice.reducer;
