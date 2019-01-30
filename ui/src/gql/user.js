import gql from "graphql-tag";

export const userQuery = gql`
  query user($name: String!) {
    User(name: $name) {
      id
      name
      last
      email
      username
      phone
      dob {
        formatted
      }
      street
      city {
        name
        state {
          name
          country {
            name
          }
        }
      }
    }
  }
`;

export const usersPaginateQuery = gql`
  query usersPaginateQuery($first: Int, $offset: Int, $orderBy: _UserOrdering) {
    User(first: $first, offset: $offset, orderBy: $orderBy) {
      id
      name
      last
      email
      username
      phone
      street
      city {
        name
        state {
          name
          country {
            name
          }
        }
      }
      friends {
        id
        name
      }
      lots {
        id
        name
        thumbnail {
          id
          url
        }
      }
      avatar {
        id
        url
      }
      created {
        formatted
      }
      dob {
        formatted
      }
    }
  }
`;
