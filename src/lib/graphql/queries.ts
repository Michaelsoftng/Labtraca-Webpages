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

export const GetPackages = gql`
  query getAllPackages($limit: Int, $offset: Int) {
    getAllPackages(limit: $limit, offset: $offset) {
      packagesCount
      packages {
        id
        packageName
        description
        percentageIncrease
        minimumIncrease
        isPublicHealthPackage
        price
        test {
          id
          name
        }
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

export const GET_PACKAGES_BY_FACILITY = gql`
  query getAllPackagesByFacility($facilityId: ID!, $limit: Int, $offset: Int) {
    getAllPackagesByFacility(
      facilityId: $facilityId
      limit: $limit
      offset: $offset
    ) {
      packagesCount
      packages {
        id
        price
        facilityPrice
        package {
          id
          packageName
          description
          price
          isPublicHealthPackage
          test {
            id
            name
          }
        }
      }
    }
  }
`;

export const GET_TESTS_BY_FACILITY = gql`
  query GetAllTestsByFacilityPublic(
    $facilityId: String!
    $limit: Int!
    $offset: Int!
  ) {
    getAllTestsByFacilityPublic(
      facilityId: $facilityId
      limit: $limit
      offset: $offset
    ) {
      facilityTestCount
      facilityTests {
        id
        price
        facilityPrice
        duration
        preparation
        test {
          id
          name
          code
          group
          testType
        }
        facility {
          id
          firstName
          lastName
          email
        }
      }
    }
  }
`;

export const getUserByIdPublic = gql`
  query getUserByIdPublic($id: String!) {
    getUserByIdPublic(id: $id) {
      firstName
      lastName
      email
      id
      phoneNumber
      approvedAt
      approvedBy
      streetAddress
      streetAddress2
      city
      state
      country
      postal
      location
      referralBonus
      verificationCode
      verificationCodeExpiry
      createdAt
      accountStatus
      userType
      emailVerifiedAt
      facilityAdmin {
        id
        role
        facilityName
        facilityType
        facilityPercentage
        user {
          id
          firstName
          lastName
          email
        }
      }
      staff {
        id
        role
      }
      patient {
        id
        dateOfBirth
        gender
        organisationName
        patientType
        organisationType
        noOfEmployees
        location {
          id
          name
          state {
            id
            name
            country {
              id
              name
            }
          }
        }
        testChoice
      }
      phlebotomist {
        id
        dob
        gender
      }
      doctor {
        id
        gender
        uniqueId
        approval
        file
        identityCardNumber
        identityCardType
        licenseExpiry
        licenseNumber
        yearsOfExperience
        bankInformation
        affiliatedInstitutions
        additionalCertifications
        consultationHours
        specialization
        online
      }
      dispatcher {
        id
        approval
        gender
        online
        bankInformation
        dispatcherEarning
        uniqueId
        user {
          id
        }
      }
      pharmacist {
        id
        gender
        uniqueId
        approval
        file
        identityCardNumber
        identityCardType
        licenseExpiry
        licenseNumber
        yearsOfExperience
        bankInformation
        affiliatedInstitutions
        additionalCertifications
      }
      labScientist {
        id
        gender
        uniqueId
        approval
        file
        identityCardNumber
        identityCardType
        licenseExpiry
        licenseNumber
        yearsOfExperience
        bankInformation
        affiliatedInstitutions
        additionalCertifications
      }
      userModulePermissions {
        id
        canCreate
        canRead
        canUpdate
        canDelete
        modulepermissions {
          id
          module
        }
      }
    }
  }
`;

export const comparePrices = gql`
  query comparePrices(
    $itemId: ID!
    $itemType: PriceComparisonItemTypeEnum!
    $limit: Int
    $offset: Int
  ) {
    comparePrices(
      itemId: $itemId
      itemType: $itemType
      limit: $limit
      offset: $offset
    ) {
      itemId
      itemName
      itemType
      resultsCount
      results {
        price
        facilityPrice
        facility {
          id
          facilityName
          facilityType
          facilityImage
          rating
          ratingCount
          openingHours
          streetAddress
          streetAddress2
          city
          state
          country
          postal
          latitude
          longitude
          user {
            id
            firstName
            lastName
            email
            phoneNumber
          }
        }
      }
    }
  }
`;
