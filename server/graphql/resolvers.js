module.exports = {
  Query: {
    getBoats: (_, { input }, { dataSources }) => {
      return dataSources.boatsAPI.getBoats({ input });
    }
  }
};
