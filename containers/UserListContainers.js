import React, {Component} from 'react';
import autobind from 'autobind-decorator';
import { Container, Button } from 'semantic-ui-react';
// import LineButtons from '../shared/LineButtons';
import UserListView from '../views/UserListView';
import UserView from '../views/UserView';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux'; 
// import PageHeader from '../shared/PageHeader';
import userListAction from '../actions/userListAction';
import userAction from '../actions/userAction';



@autobind
class UserListContainer extends Component {


    componentDidMount() {
        this.findUserList();
    }

    componentDidUpdate() {
        this.findUserList();
    }

    findUserList() {
        this.props.userListAction.findUsers();
    }

    onShowUserForm() {
        console.log('test');
        this.props.userListAction.onShowUserForm();
    }

    onRegisterUser() {
        const {user} = this.props;
        console.log(user);
        this.props.userListAction.registerUser(user);
    }

    onSetUserProp(name, value) {
        this.props.userAction.setUserProp(name, value);
    }

    onRouteItem(id) {
        const {history} = this.props;
        history.push(`/front/item?sellerId=${id}`);
    }

    render() {
        const {users} = this.props;
        const {showUserForm} = this.props;
        return(
            <Container>
                <UserListView 
                    users = {users}
                    routeUserBasePath = '/users'
                    onShowUserForm = {this.onShowUserForm}
                    onRouteItem = {this.onRouteItem}
                />
                {showUserForm && (
                <UserView 
                    onSetUserProp = {this.onSetUserProp}
                    onRegisterUser = {this.onRegisterUser}
                />
                )}
            </Container>
        )
    }
}

const mapStateToProps = ({userListState, userState}) => ({
    users : userListState.users,
    showUserForm: userListState.showUserForm,
    user : userState.user
})

const maptDispatchToProps = (dispatch) => ({
    userListAction : bindActionCreators(userListAction, dispatch),
    userAction : bindActionCreators(userAction, dispatch)
})

export default connect(mapStateToProps, maptDispatchToProps)(UserListContainer);