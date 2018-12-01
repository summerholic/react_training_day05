import React, { Component } from 'react';
import { Container, Header, Divider, Grid, Button, Table, Icon } from 'semantic-ui-react';
// import {Link} from 'react-router-dom'; 
import autobind from 'autobind-decorator';

@autobind
export default class UserListView extends Component {
    render() {
        const{users, routeUserBasePath, onShowUserForm, onRouteItem} = this.props;
        return (
            <Container style={{ margin: '2em' }}>
                <Header as='h1' content='User List  ' />
                <Divider />

                <Grid>
                <Grid.Row>
                    <Grid.Column>
                    <Button primary floated="right" onClick={() => onShowUserForm()}>New</Button>
                    </Grid.Column>
                </Grid.Row>
                </Grid>

                <Table celled>
                    <Table.Header>
                        <Table.Row textAlign="center">
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Role</Table.HeaderCell>
                        <Table.HeaderCell>Item</Table.HeaderCell>
                        <Table.HeaderCell>Bid</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {   
                        Array.isArray(users) && users.length > 0 ?
                            users.map((user) =>
                            <Table.Row key={user.id}>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.roles[0]}</Table.Cell>
                            <Table.Cell>{user.roles[0] === 'Seller' ? <Button secondary onClick={() => onRouteItem(user.id)}>Item</Button> : ''}</Table.Cell>
                            <Table.Cell>{user.roles[0] === 'Bidder' ? <Button secondary>Bidding</Button> : ''}</Table.Cell>
                            </Table.Row>
                        )
                        :
                        <Table.Row>
                            <Table.Cell  textAlign="center">No registered users now!</Table.Cell>
                        </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </Container>
        )
    }
}
