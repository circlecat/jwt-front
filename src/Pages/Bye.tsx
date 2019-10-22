import React from 'react';
import { useByeQuery } from '../generated/graphql';

interface Props {
  
}

export const Bye: React.FC<Props> = () => {
  const { data, error, loading } = useByeQuery();

  if(loading) {
    return <div>loading!</div>
  }

  if(!data) {
    return <div>No data!</div>
  }

  if(error) {
    console.log(error);
    return <div>error!</div>
  }

  return (
    <div>
      woked 
      {data}
    </div>
  )
}
