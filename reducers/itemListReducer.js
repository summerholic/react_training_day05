const actionType = {
    SET_ITEMS : 'itemList.setItems',
    REGISTER_ITEM : 'itemList.registerItem',
}

const initialState = {
    items : []
}

function reducer(state=initialState, action) {
    return {
        items : itemReducer(state.items, action),
    }
}

function itemReducer(itemState, {type, payload}) {
    switch(type) {
        case actionType.SET_USERS :
            return [...payload];
        case actionType.REGISTER_USER :
            const itemMap = new Map(itemState.items);
            itemMap.set(payload.id, payload);
            return [...payload];
        default :
            return itemState;
    }
}


export default reducer;
export {actionType};