import React from "react";
import { GiShipWheel } from "react-icons/gi";
import { IoMdPeople, IoIosBoat } from "react-icons/io";
import { transformEnum } from "../../helpers/transformEnum";
import StarRating from "../StarRating/StarRating";
import {
  Button,
  Card,
  Content,
  ContentRow,
  CountryWrapper,
  StarWrapper
} from "./styles";

const Boat = ({
  boat: {
    name,
    length,
    year,
    imageUrl,
    country,
    cabins,
    type,
    price,
    reviews: { score },
    skipper,
    guests,
    active
  }
}) => {
  return (
    <li>
      <>
        <Card>
          <img src={imageUrl} alt="displayed cooked food" />
          <Content>
            <ContentRow>
              <div id="left">
                <h5>
                  {transformEnum(type)} {length}m {name} ({year})
                </h5>
              </div>
              <div id="right">
                <h5>€{price}/Day</h5>
              </div>
            </ContentRow>
            <ContentRow>
              <StarWrapper>
                <StarRating rating={score} />
                <div style={{ paddingLeft: "5px" }}>
                  <i>Read reviews</i>
                </div>
              </StarWrapper>
              <CountryWrapper>{country}</CountryWrapper>
            </ContentRow>
            <ContentRow>
              <div id="left">
                <p>
                  <IoIosBoat /> Skipper: {transformEnum(skipper)}
                </p>
              </div>
              <div id="right">Length: {length}m</div>
            </ContentRow>
            <ContentRow>
              <div id="left">
                <GiShipWheel /> Cabins: {cabins}
              </div>
              <div id="right" style={{ color: "#23ae56" }}>
                Instant booking
              </div>
            </ContentRow>
            <ContentRow>
              <div id="left">
                <IoMdPeople /> Guests: Up to {guests}
              </div>
            </ContentRow>
            <ContentRow>
              <div />
              <div>
                <p>{active}</p>
                <Button>View Details ></Button>
              </div>
            </ContentRow>
          </Content>
        </Card>
      </>
    </li>
  );
};

Boat.displayName = "Boat";

export default Boat;
