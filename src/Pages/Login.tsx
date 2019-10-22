import React, { useState } from 'react';
import { useLoginMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { setAccessToken } from '../accessToken';

export const Login: React.FC<RouteComponentProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();

  return (
    <form 
      onSubmit={async e => {
        e.preventDefault()

        const res = await login({
          variables: {
            email,
            password
          }
        });
        console.log(res.data);
        if (res && res.data) {
          setAccessToken(res.data.login.accessToken);
        } 

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
        <button type='submit' >Login</button>
      </div>
    </form>
  )
}
