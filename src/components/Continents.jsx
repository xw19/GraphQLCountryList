import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_CONTINENTS = gql`
{
  continents {
    name
    code
  }
}
`

const Continents = ({onSelect}) => {

  const {loading, data} = useQuery(GET_CONTINENTS)

  if (loading) return <p>Loading ...</p>;
  return (
    <div className="form">
      <select className="form-control" onChange={onSelect}>
        <option value={undefined}>-------</option>
        {data.continents.map((continent) => {     
          return (<option key={continent.code} value={continent.code}>{continent.name}</option>) 
        })}
      </select>
    </div>
  );
}

export default Continents;
