import gql from "graphql-tag";

export * from "./lot";
export * from "./user";

export const categoriesQuery = gql`
  {
    Category {
      id
      name
    }
  }
`;

export const categoryQuery = gql`
  query Category($id: ID!) {
    Category(id: $id) {
      styles {
        id
        name
      }
      themes {
        id
        name
      }
      specials {
        id
        name
      }
      genders {
        id
        name
      }
      percs {
        id
        name
      }
      heights {
        id
        name
      }
      sizes {
        id
        name
      }
      grades {
        id
        name
      }
    }
  }
`;
