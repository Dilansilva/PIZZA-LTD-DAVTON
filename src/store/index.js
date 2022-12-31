import { createStore } from "redux";

const reducerFunction = (state = {counter:10},action) => {
    if(action.type == 'INCREMENT'){
        return {counter : state.counter + 1}
    } else if(action.type == 'DECREMENT'){
        return {counter : state.counter - 1}
    } else {
        return state
    }
}

const store = createStore(reducerFunction);
export default store;