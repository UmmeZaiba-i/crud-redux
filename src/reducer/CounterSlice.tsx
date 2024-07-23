import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState: {counter:0},
    reducers:{
        increment(state, action){
            // state.counter + 1; why assignment opertor becauase it uses the Immer library
            // state.counter++;  is also okay
            state.counter += 1;
        },
        decrement(state, action){
            state.counter -=1 ;
        },
        addBy(state, action){
            state.counter +=action.payload;
        },
    }
})
export const actions = counterSlice.actions;

export const store = configureStore({
    reducer: counterSlice.reducer
})






























// import {createStore} from 'redux';

// const reducer = (state = {counter:0}, action:any)=>{
//     //SYNCHRONOUS FUNCTION
//     //we shud not mutate the original state

//     if(action.type === 'INC'){
//         return{counter: state.counter+1};
//     }
//     if(action.type === 'DEC'){
//         return{counter: state.counter-1};
//     }
//     if(action.type === 'ADD'){
//         return{counter: state.counter + action.payload}
//     }

//    return state
// }

// const store = createStore(reducer)

// export default store;