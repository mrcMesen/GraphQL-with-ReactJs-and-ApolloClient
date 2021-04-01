import { ReactElement } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { PERSON } from '../api/queries';
import { Person } from '../api/responses';

export const PersonDetail = (): ReactElement => {
  const { id } = useParams<{ id: string }>();
  const { loading, error, data } = useQuery<{ person: Person }>(PERSON, {
    variables: {
      id,
    },
  });

  if (loading) return <p className='result'>Loading...</p>;
  if (error) return <p className='result'>Error: {error.message}</p>;

  return (
    <div className='person-details'>
      <h1>{data?.person.name}</h1>
      <span> Especie: {data?.person.species?.name || 'Not specificate'}</span>
      <span>Año de Nacimiento {data?.person.birthYear}</span>
      <span>Altura: {data?.person.height}</span>
      <span>Color de ojos: {data?.person.eyeColor}</span>
      <span>Nombre de planeta: {data?.person.homeworld?.name}</span>
    </div>
  );
};
