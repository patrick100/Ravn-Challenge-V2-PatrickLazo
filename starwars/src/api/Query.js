import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
    query{
      allPeople {
        people {
          id,
          name,
          hairColor,
          skinColor,
          eyeColor,
          birthYear,
          homeworld {
            name
          },
          species {
            name
          },
          vehicleConnection
          {
            vehicles {
              name
            }
          }
        }
      }
    }
`;