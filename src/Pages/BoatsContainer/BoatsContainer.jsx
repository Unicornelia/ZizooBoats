import React, { useState } from "react";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import { useQuery } from "@apollo/react-hooks";
import BoatsList from "../../components/BoatsList/BoatsList";
import { Filter, TopWrapper, ContentWrapper, Title, Header } from "./styles";
import Error from "../../components/Indicators/Error";
import Loading from "../../components/Indicators/Loading";
import "rc-slider/assets/index.css";
import Slider from "rc-slider";

export const GET_BOATS = gql`
  query getBoats {
    getBoats(input: { active: true }) {
      id
      name
      price
      active
      imageUrl
      length
      country
      locality
      skipper
      type
      guests
      year
      cabins
      marina
      reviews {
        total
        score
      }
    }
  }
`;

const BoatsContainer = () => {
  const { data, error, loading } = useQuery(GET_BOATS);
  const [sliderYearBegin, setSliderYearBegin] = useState(2004);
  const [sliderYearEnd, setSliderYearEnd] = useState(2020);
  const [sliderLengthBegin, setSliderLengthBegin] = useState(1);
  const [sliderLengthEnd, setSliderLengthEnd] = useState(20);

  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);

  const handleYearChange = sliderValues => {
    setSliderYearBegin(sliderValues[0]);
    setSliderYearEnd(sliderValues[1]);
  };

  const handleLengthChange = sliderValues => {
    setSliderLengthBegin(sliderValues[0]);
    setSliderLengthEnd(sliderValues[1]);
  };

  const boats = data?.getBoats
    .filter(
      boat => boat.length > sliderLengthBegin && boat.length <= sliderLengthEnd
    )
    .filter(boat => boat.year > sliderYearBegin && boat.year <= sliderYearEnd);

  if (error) {
    return <Error>Error! {error.message}</Error>;
  }

  if (loading) {
    return <Loading>Loading...</Loading>;
  }

  return (
    <>
      <TopWrapper>
        <Header>
          <Title>Welcome to our selection of boats</Title>
        </Header>
      </TopWrapper>
      <ContentWrapper>
        <Filter>
          <h1>Filter</h1>
          <label>
            <h3 style={{ paddingBottom: "10px" }}>Year</h3>
            <div style={{ paddingBottom: "40px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between"
                }}
              >
                <div>2004</div>
                <div>2020</div>
              </div>
              <Range
                min={2004}
                max={2020}
                onChange={handleYearChange}
                defaultValue={[sliderYearBegin, 2010, sliderYearEnd]}
              />
            </div>
          </label>
          <label>
            <h3 style={{ paddingBottom: "10px" }}>Boat length</h3>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>1m</div>
                <div>20m</div>
              </div>
              <Range
                min={1}
                max={20}
                onChange={handleLengthChange}
                defaultValue={[sliderLengthBegin, 15, sliderLengthEnd]}
              />
            </div>
          </label>
        </Filter>
        <BoatsList boats={boats} />
      </ContentWrapper>
    </>
  );
};

BoatsContainer.propTypes = {
  boats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  )
};

BoatsContainer.defaultProps = {
  boats: []
};

export default BoatsContainer;
