const actionType = {
    SET_USERS : 'userList.setUsers',
    REGISTER_USER : 'userList.registerUser',
    SHOW_USER_FORM : 'userList.showUserForm'
}

const initialState = {
    users : [],
    showUserForm : false
}

function reducer(state=initialState, action) {
    return {
        users : userReducer(state.users, action),
        showUserForm : showUserFormReducer(state.showUserForm, action)
    }
}

function userReducer(userState, {type, payload}) {
    switch(type) {
        case actionType.SET_USERS :
            return [...payload];
        case actionType.REGISTER_USER :
            const userMap = new Map(userState.users);
            userMap.set(payload.id, payload);
            // return {
            //     userMap
            // }
            return [...payload];
        default :
            return userState;
    }
}

function showUserFormReducer(userState, {type, payload}) {
    switch(type) {
        case actionType.SHOW_USER_FORM :
            console.log(payload);
            userState = payload
            return userState;
        default :
            return userState;
    }
}

export default reducer;
export {actionType};