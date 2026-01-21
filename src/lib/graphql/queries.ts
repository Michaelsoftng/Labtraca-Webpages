import { gql } from "@apollo/client";

export const GetTests = gql`
  query getPublicAllTest($limit: Int, $offset: Int) {
    getPublicAllTest(limit: $limit, offset: $offset) {
      testCount
      tests {
        id
        createdAt
        updatedAt
        deletedAt
        deletedBy
        name
        code
        description
        specimen
        group
        testType
        normalRange
        unit
        preparation
        methodology
        duration
        percentageIncrease
        minimumIncrease
        isPublicHealthTest
        price
      }
    }
  }
`;

export const GET_PUBLIC_USERS_BY_TYPE = gql`
  query GetPublicUserByUserType(
    $userType: String!
    $offset: Int!
    $limit: Int!
  ) {
    getPublicUserByUserType(
      userType: $userType
      offset: $offset
      limit: $limit
    ) {
      usersCount
      users {
        id
        email
        phoneNumber
        firstName
        lastName
        userType
        origin
        accountStatus
        isStaff
        isSuperuser
        createdAt
        updatedAt
        location
        streetAddress
        city
        state
        country
        postal

        facilityAdmin {
          id
          facilityName
          facilityType
          facilityImage
          role
          rating
          ratingCount
          openingHours
        }

        doctor {
          id
          approval
          gender
          yearsOfExperience
          specialization
          online
        }
      }
    }
  }
`;
