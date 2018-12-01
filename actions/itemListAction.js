import {actionType} from '../reducers/itemListReducer';
import itemApi from '../api/itemApi';

function findItems() {
    return (dispatch) => itemApi.findItemList().then(
        (items) => {
            dispatch({
                type : actionType.SET_ITEMSS,
                payload : items
            })
        }
    )
}

export default {
    findItems
}