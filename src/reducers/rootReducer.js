const initState = {
    transfers:[]
}



const rootReducer = (state = initState,action) => {
    if(action.type==='addTransfer') {
        // console.log('Added Transfer',action.payload)
        let newTransfers = state.transfers.concat(action.payload)
        newTransfers.sort((a,b) => {
            return new Date(a.date) - new Date(b.date)
        })
        return {
            ...state,
            transfers: newTransfers
        }
    }
    else if(action.type==='deleteTransfer') {
        // console.log("Delete", action.payload)
        return {
            ...state,
            transfers:state.transfers.filter(item =>   item !== action.payload)
        }
    }
    return state
}

export default rootReducer