import React from "react";
import Boat from "../Boat/Boat";
import { List } from "./styles";

const BoatsList = ({ boats }) => {
  return (
    <List>
      {boats.length > 0 ? (
        boats.map(boat => <Boat key={boat.id} boat={boat} />)
      ) : (
        <h2>No search results</h2>
      )}
    </List>
  );
};

export default BoatsList;
