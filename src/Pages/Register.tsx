import React, { useState } from 'react';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';

export const Register: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register] = useRegisterMutation();

  return (
    <form 
      onSubmit={async e => {
        e.preventDefault()

        await register({
          variables: {
            email,
            password
          }
        });
        
        history.push('/');
    }}>
      <div>
        <div>
          <input
            value={email}
            placeholder="email"
            onChange={e => {
              setEmail(e.target.value);
            }} />
        </div>
        <div>
          <input
            type='password'
            value={password}
            placeholder="password"
            onChange={e => {
              setPassword(e.target.value);
            }} />
        </div>
        <button type='submit' >Register</button>
      </div>
    </form>
  )
}
