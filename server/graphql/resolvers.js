module.exports = {
  Query: {
    getBoats: (_, __, { dataSources }) => {
      return dataSources.boatsAPI.getBoats();
    }
  }
};
