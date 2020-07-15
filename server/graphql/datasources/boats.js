const gql = require("graphql-tag");
const { GraphQLDataSource } = require("apollo-datasource-graphql");

const BOATS = gql`
  query getBoats($input: GetBoatInput) {
    getBoats(input: $input) {
      id
      name
      type
      year
      reviews {
        total
        score
      }
      marina
      locality
      country
      skipper
      active
      cabins
      guests
      length
      price
      imageUrl
    }
  }
`;

class BoatsAPI extends GraphQLDataSource {
  constructor() {
    super();
    this.baseURL = "https://sls-sandbox.zizoo.com/graphql";
  }

  async getBoats() {
    try {
      const response = await this.query(BOATS, {
        variables: { input: { active: true } }
      });
      return response.data.getBoats;
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = BoatsAPI;
