const initialState = {
    name: 'Ogi Bin Edi'
}

const globalReducer = (state = initialState, action) => {
    if (action.type === 'UPDATE_NAME') {
        return {
            ...state,
            name: 'Giper'
        }
    }
    return state;
}

export default globalReducer;