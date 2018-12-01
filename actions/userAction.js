import {actionType} from '../reducers/userReducer';
import userApi from '../api/userApi';

function setUserProp(name, value) {
    return (dispatch) => dispatch(
        {
            type:actionType.SET_USER_PROP, 
            payload:{name, value}
        }
    )
}


export default {
    setUserProp
}