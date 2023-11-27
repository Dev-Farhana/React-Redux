
export const incAndDecHandler = (state = 0, action) => {
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    else {
        return state
    }
}

export const addAndsubtractHandler = (state=0 , action) => {
    if(action.type === "Add"){
        return state + 1
    }
    if(action.type === "Subtract"){
        return state - 1
     }
  else{
        return state
    }

}