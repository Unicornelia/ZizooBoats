import React from "react";
import { Card, Content, ContentRow } from "./styles";
import { transformEnum } from "../../helpers/transformEnum";
import StarRating from "../StarRating/StarRating";
import { IoMdPeople, IoIosBoat } from "react-icons/io";
import { GiShipWheel } from "react-icons/gi";

const Boat = ({
  boat: {
    id,
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
    guests
  }
}) => {
  return (
    <li>
      <>
        <Card>
          <a href={`/details/${id}`}>
            <img src={imageUrl} alt="displayed cooked food" />
          </a>
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
              <div style={{ display: "flex", color: "#7e7e7e" }}>
                <StarRating rating={score} />{" "}
                <div style={{ paddingLeft: "5px" }}>
                  <i>Read reviews</i>
                </div>
              </div>
              <div id="right" style={{ color: "#7e7e7e" }}>
                {country}
              </div>
            </ContentRow>
            <ContentRow>
              <div id="left">
                <p>
                  <IoIosBoat /> Skipper: {transformEnum(skipper)}
                </p>
              </div>
              <div id="right">Length: {length}</div>
            </ContentRow>
            <ContentRow>
              <div id="left">
                <GiShipWheel /> Cabins: {cabins}
              </div>
              <div id="right">Instant booking</div>
            </ContentRow>
            <ContentRow>
              <div id="left">
                <IoMdPeople /> Guests: Up to {guests}
              </div>
            </ContentRow>
            <ContentRow>
              <div />
              <div>
                <button
                  style={{
                    borderRadius: "3px",
                    border: "none",
                    padding: "7px",
                    backgroundColor: "#49b8c5",
                    color: "white"
                  }}
                >
                  View Details >
                </button>
              </div>
            </ContentRow>
          </Content>
        </Card>
      </>
    </li>
  );
};

export default Boat;
