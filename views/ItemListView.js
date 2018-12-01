import React, { Component } from 'react';
import { Container, Header, Divider, Grid, Button, Table, Icon } from 'semantic-ui-react';
// import {Link} from 'react-router-dom'; 
import autobind from 'autobind-decorator';

@autobind
export default class ItemListView extends Component {
    
    render() {
        const{items} = this.props;
        return(
            <Container style={{ margin: '2em' }}>
                <Header as='h1' content='Item List  ' />
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
                        <Table.HeaderCell>Start price</Table.HeaderCell>
                        <Table.HeaderCell>Price step</Table.HeaderCell>
                        <Table.HeaderCell>Current price</Table.HeaderCell>
                        <Table.HeaderCell>Seller</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                    {   
                        Array.isArray(items) && items.length > 0 ?
                        <Table.Row>
                            <Table.Cell  textAlign="center">No registered items now!</Table.Cell>
                        </Table.Row>   
                        
                        :
                        <Table.Row>
                            <Table.Cell  textAlign="center">No registered items now!</Table.Cell>
                        </Table.Row>
                        }
                    </Table.Body>
                </Table>
            </Container>
        )
    }
    
}