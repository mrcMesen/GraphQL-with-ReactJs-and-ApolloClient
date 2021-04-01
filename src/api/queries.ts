// src/api/queries.ts
import { gql } from '@apollo/client';

export const ALL_PEOPLE = gql`
  query GetAllPeople {
    allPeople {
      people {
        id
        name
        species {
          name
        }
      }
    }
  }
`;

export const PERSON = gql`
  query GetPerson($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      eyeColor
      height
      species {
        name
      }
      homeworld {
        name
      }
    }
  }
`;
