const actionType = {
    SET_USER : 'user.setUser',
    SET_USER_PROP : 'user.setUserProp',
}

const initialState = {
    user : {
        'name' : '',
        'roles' : []
    }
}

function reducer(state=initialState, action) {
    return {
        user : userReducer(state.user, action)
    }
}

function userReducer(userState, {type, payload}) {
    switch(type) {
        case actionType.SET_USER_PROP : 
            let value = null;
            if(payload.name === 'roles') {
                if(userState.roles === undefined) userState.roles = [];
                userState.roles.push(payload.value);
                return { ...userState };
            } 
            return {
                    ...userState,
                    [payload.name] : payload.value
            }
        default : 
            return userState;
    }
}

export default reducer;
export {actionType};