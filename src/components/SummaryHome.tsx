import { ReactElement } from 'react';
import { useQuery } from '@apollo/client';
import { ALL_PEOPLE } from '../api/queries';
import { AllPeople } from '../api/responses';
import { PersonCard } from './PersonCard';

export const SummaryHome = (): ReactElement => {
  const { loading, error, data } = useQuery<AllPeople>(ALL_PEOPLE);

  if (loading) return <p className='result'>Loading...</p>;
  if (error) return <p className='result'>Error</p>;

  return (
    <div className='person-list'>
      {data?.allPeople.people.map(person => (
        <PersonCard key={person.id} person={person} />
      ))}
    </div>
  );
};
