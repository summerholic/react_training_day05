import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Container, Button } from 'semantic-ui-react';
// import LineButtons from '../shared/LineButtons';
import ItemListView from '../views/ItemListView';
// import UserView from '../views/UserView';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'; 
// import PageHeader from '../shared/PageHeader';
import itemListAction from '../actions/itemListAction';

@autobind
class ItemListContainer extends Component {

    render() {
        const {items} = this.props;
        return(
            <ItemListView 
                items = {items}
                routeUserBasePath = '/items'
                onRouteItem = {this.onRouteItem}
            />
        )
    }
}


const mapStateToProps = ({itemListState}) => ({
    items : itemListState
})

const maptDispatchToProps = (dispatch) => ({
    itemListAction : bindActionCreators(itemListAction, dispatch)
})

export default connect(mapStateToProps, maptDispatchToProps)(ItemListContainer);