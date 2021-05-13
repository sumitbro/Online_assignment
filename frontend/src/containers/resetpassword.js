
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';

const Resetpassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
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
            icon='user'
            iconPosition='left'
            type="email"
            placeholder='E-mail address'
            name="email"
            value= {email}
            onChange={e=> onChange(e)}
            required
          />
         

          <Button color='teal' fluid size='large' type='submit'>
            Submit
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



export default connect(null, { reset_password })(Resetpassword);