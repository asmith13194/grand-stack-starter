import gql from "graphql-tag";

export const lotQuery = gql`
  query lot($id: ID!) {
    Lot(id: $id) {
      id
      name
      text
      status
      created {
        formatted
      }
      updated {
        formatted
      }
      price
      reserve
      qty
      increment
      status
      images {
        id
        url
      }
      bids {
        id
        bid
        User {
          id
          name
        }
      }
      thumbnail {
        id
        url
      }
      user {
        id
        name
      }
      category {
        name
      }
      size {
        name
      }
      grade {
        name
      }
      height {
        name
      }
      gender {
        name
      }
      specials {
        name
      }
    }
  }
`;

export const lotsPaginateQuery = gql`
  query lotsPaginateQuery($first: Int, $offset: Int, $orderBy: _LotOrdering) {
    Lot(first: $first, offset: $offset, orderBy: $orderBy) {
      id
      name
      text
      status
      created {
        formatted
      }
      updated {
        formatted
      }
      price
      reserve
      qty
      increment
      status
      images {
        id
        url
      }
      bids {
        id
        bid
        User {
          id
          name
        }
      }
      thumbnail {
        id
        url
      }
      user {
        id
        name
      }
      category {
        name
      }
      size {
        name
      }
      grade {
        name
      }
      height {
        name
      }
      gender {
        name
      }
      specials {
        name
      }
    }
  }
`;

export const addLot = gql`
  mutation addLot(
    $id: ID!
    $category: ID!
    $grade: ID!
    $gender: ID!
    $height: ID!
    $increment: Int
    $name: String
    $perc: ID!
    $price: Int
    $qty: Int
    $reserve: Int
    $size: ID!
    $specials: [ID!]
    $styles: [ID!]
    $themes: [ID!]
    $text: String
    $type: ID!
    $user: ID!
  ) {
    addLot(
      id: $id
      category: $category
      grade: $grade
      gender: $gender
      height: $height
      increment: $increment
      name: $name
      perc: $perc
      price: $price
      qty: $qty
      reserve: $reserve
      size: $size
      specials: $specials
      styles: $styles
      themes: $themes
      text: $text
      type: $type
      user: $user
    ) {
      id
      name
    }
  }
`;
