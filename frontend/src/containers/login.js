import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import {login} from '../actions/auth'


const Login = ({login, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''


  });
  const { email, password } = formData;
  const onChange= e=> setFormData({...formData, [e.target.name]: e.target.value})
  const onSubmit=e=>{
    e.preventDefault();
    login(email,password);
  };
  if (isAuthenticated) {
    return <Redirect to='/' />
}
  return(
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 550 }}>
      <Header as='h2' color='teal' textAlign='center'>
        <Image src='/logo.png' /> Log-in to your account
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
          <Form.Input
            fluid
            icon='lock'

            iconPosition='left'
            placeholder='Password'
            type='password'
            name='password'
            value={password}
            onChange={e=> onChange(e)}
            required
          />

          <Button color='teal' fluid size='large' type='submit'>
            Login
          </Button>

        </Segment>

      </Form>
      <Message>
        New to us? <Link to='/signup'>Sign Up</Link><br />
        <Link to='/reset_password'>Forget Password?</Link>
      </Message>
    </Grid.Column>
  </Grid>


  )
};


const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login);