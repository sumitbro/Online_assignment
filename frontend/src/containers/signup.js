import React, { useState } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
// import axios from 'axios';

const Signup = ({ signup, isAuthenticated }) => {
    const [accountCreated, setAccountCreated] = useState(false);
    const [formData, setFormData] = useState({
        username:'',
        email: '',
        password: '',
        re_password: ''
    });

    const { username, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        if (password === re_password) {
            signup(username, email, password, re_password);
            setAccountCreated(true);
        }
    };

    
    if (isAuthenticated) {
        return <Redirect to='/' />
    }
    if (accountCreated) {
        return <Redirect to='/login' />
    }

    return(
        <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 550 }}>
          <Header as='h2' color='teal' textAlign='center'>
            <Image src='/logo.png' /> Create your account
          </Header>
          <Form size='large' onSubmit={e=>onSubmit(e)}>
            <Segment stacked>
            <Form.Input
                fluid
                icon='user'
                iconPosition='left'
                type="text"
                placeholder='Username'
                name="username"
                value= {username}
                onChange={e=> onChange(e)}
                required
              />

               

              
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
              <Form.Input
                fluid
                icon='lock'
    
                iconPosition='left'
                placeholder='Confirm Password*'
                type='password'
                name='re_password'
                value={re_password}
                onChange={e=> onChange(e)}
                required
              />
    
              <Button color='teal' fluid size='large' type='submit'>
                Login
              </Button>
    
            </Segment>
    
          </Form>
          <Message>
            Already have an account? <Link to='/login'>Sign In</Link><br />
            
          </Message>
        </Grid.Column>
      </Grid>
    
    
      )
    };
    const mapStateToProps = state => ({
        isAuthenticated: state.auth.isAuthenticated
    });
    
    export default connect(mapStateToProps, { signup })(Signup);
 
