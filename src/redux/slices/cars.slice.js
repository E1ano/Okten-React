import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cars: [],
    carForUpdate: null
}

const slice = createSlice({
    name: 'carsSlice',
    initialState,
    reducers: {
        setAllCars: (state, action) => {
            state.cars = action.payload;
        },
        addNewCar: (state, action) => {
            state.cars = [...state.cars, action.payload];
        },
        updateCar: (state, action) => {
            state.cars = state.cars.map(item => item.id === state.carForUpdate.id ? {id: item.id, ...action.payload} : item);
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(item => item.id !== action.payload)
        },
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        clearCarForUpdate: (state) => {
            state.carForUpdate = null;
        }
    }
});

const {reducer: carsReducer, actions} = slice;
const carsActions = {...actions};

export {
    carsReducer,
    carsActions
}