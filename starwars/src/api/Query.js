import { gql } from '@apollo/client';

export const GET_ALL_PEOPLE = gql`
      query People($cursor: String){
      allPeople(first: 5, after: $cursor){
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
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
`;
