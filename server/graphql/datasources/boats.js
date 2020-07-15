const gql = require("graphql-tag");
const { GraphQLDataSource } = require("apollo-datasource-graphql");

const BOATS = gql`
  query {
    getBoats {
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
    const response = await this.query(BOATS);
    return response.data.getBoats;
  }
}
module.exports = BoatsAPI;
