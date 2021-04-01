import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import { Person } from '../api/responses';

interface Props {
  person: Person;
}

export const PersonCard = ({ person }: Props): ReactElement => {
  return (
    <Link to={`/person-details/${person.id}`}>
      <div className='person-card'>
        <h3>{person.name}</h3>
        <div className='person-card-description'>
          <span>Specie</span>
          <span>{person.species?.name || 'Not specificate'}</span>
        </div>
      </div>
    </Link>
  );
};
