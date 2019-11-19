import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_COUNTRIES = gql`
    query getCountries($code: String!) {
        continent(code: $code) {
            countries {
                code
                name
                native
                phone
                currency        
            }
        }
    }
`

const Countries = ({code}) => {

  const {loading, data} = useQuery(GET_COUNTRIES, {
    variables: { code: code },
  });

  if (loading) return <p>Loading ...</p>;
  return (
    <table className="table">
        <thead>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Native</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
        {data.continent.countries.map((country) => {     
        return (
            <tr key={country.code}>
                <td>{country.code}</td>
                <td>{country.name}</td>
                <td>{country.phone}</td>
                <td>{country.native}</td>
                <td>{country.currency}</td>
            </tr>) 
        })}
        </tbody>
    </table>
  );
}

export default Countries;
