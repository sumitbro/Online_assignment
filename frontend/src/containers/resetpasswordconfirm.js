
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';

const Resetpasswordconfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });

    const { new_password, re_new_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        const uid = match.params.uid;
        const token = match.params.token;

        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Redirect to='/' />
    }
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Request Password Reset:
      </Header>
      <Form size='large' onSubmit={e=>onSubmit(e)}>
        <Segment stacked>
        <Form.Input
            fluid
            icon='lock'

            iconPosition='left'
            placeholder='New Password'
            type='password'
            name='new_password'
            value={new_password}
            onChange={e=> onChange(e)}
            required
          />
          <Form.Input
            fluid
            icon='lock'

            iconPosition='left'
            placeholder='COnfirm New Password'
            type='password'
            name='re_new_password'
            value={re_new_password}
            onChange={e=> onChange(e)}
            required
          />
         

          <Button color='teal' fluid size='large' type='submit'>
            Login
          </Button>

        </Segment>

      </Form>
      {/* <Message>
        New to us? <Link to='/signup'>Sign Up</Link><br />
        <Link to='/reset_password'>Forget Password?</Link>
      </Message> */}
    </Grid.Column>
  </Grid>


  )
};



export default connect(null, { reset_password_confirm })(Resetpasswordconfirm);