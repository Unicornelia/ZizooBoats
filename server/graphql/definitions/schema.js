const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    getBoats(input: GetBoatInput): [Boat!]!
  }

  input GetBoatInput {
    active: Boolean
  }

  type Boat {
    id: ID!
    name: String
    type: BoatTypeEnum
    year: Int
    reviews: BoatReview
    marina: String
    locality: String
    country: String
    skipper: SkipperTypeEnum
    active: Boolean
    cabins: Int
    guests: Int
    length: Int
    price: Float
    imageUrl: String
  }

  type BoatReview {
    total: Int
    score: Float
  }

  enum BoatTypeEnum {
    CATAMARAN
    GULET
    MOTOR_BOAT
    MOTOR_CATAMARAN
    RIB
    SAILBOAT
    SPEEDBOAT
  }

  scalar Date

  enum SkipperTypeEnum {
    OPTIONAL
    MANDATORY
    BAREBOAT
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
  ) on FIELD_DEFINITION | OBJECT | INTERFACE
`;

module.exports = typeDefs;
