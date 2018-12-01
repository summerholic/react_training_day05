import React, { Component, Fragment } from 'react';
import { Container, Header, Grid, Table, Button, Icon, Divider, Form } from 'semantic-ui-react';

class UserView extends Component {
    render() {
        const {onSetUserProp, onRegisterUser} = this.props;
        return(
            <Container>
                <Divider />

                <Form>
                    <Form.Group>
                        <Form.Input 
                            label='Name'
                            type='text'
                            onChange={(e) => onSetUserProp('name', e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group inline>
                        <label>Role</label>
                        <Form.Checkbox
                            label='Seller'
                            onChange={(e) => onSetUserProp('roles', 'Seller')}
                        />
                        <Form.Checkbox
                            label='Bidder'
                            onChange={(e) => onSetUserProp('roles', 'Bidder')}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Button primary floated="right" onClick={onRegisterUser}>Save</Button>
                        <Button secondary floated="right">Cancel</Button>
                    </Form.Group>
                </Form>

                {/* <Table>
                    
                </Table> */}
            </Container>

        )
    }
}

export default UserView;