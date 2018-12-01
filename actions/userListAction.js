import {actionType} from '../reducers/userListReducer';
import userApi from '../api/userApi';

function findUsers() {
    return (dispatch) => userApi.findUserList().then(
        (users) => {
            dispatch({
                type : actionType.SET_USERS,
                payload : users
            })
        }
    )
}


function registerUser(user) {
    return () => userApi.registerUser(user);
}

function onShowUserForm() {
    return  (dispatch) => dispatch({type:actionType.SHOW_USER_FORM, payload:true});
}

export default {
    findUsers,
    registerUser,
    onShowUserForm
}