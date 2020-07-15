import React, { useState } from "react";
import gql from "graphql-tag";
import Slider from "rc-slider";
import { useQuery } from "@apollo/react-hooks";

import BoatsList from "../../components/BoatsList/BoatsList";
import {
  Filter,
  TopWrapper,
  ContentWrapper,
  Title,
  Header,
  Label
} from "./styles";
import Error from "../../components/Indicators/Error";
import Loading from "../../components/Indicators/Loading";
import "rc-slider/assets/index.css";

export const GET_BOATS = gql`
  query getBoats($input: GetBoatInput) {
    getBoats(input: $input) {
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
  const { data, error, loading } = useQuery(GET_BOATS, {
    variables: { input: { active: false } }
  });

  const [sliderYearBegin, setSliderYearBegin] = useState(2004);
  const [sliderYearEnd, setSliderYearEnd] = useState(2020);
  const [sliderLengthBegin, setSliderLengthBegin] = useState(0);
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

  const filteredBoats = data?.getBoats
    .filter(
      boat => boat.length >= sliderLengthBegin && boat.length <= sliderLengthEnd
    )
    .filter(boat => boat.year >= sliderYearBegin && boat.year <= sliderYearEnd);

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
          <h2>Filter</h2>
          <h3>Year</h3>
          <div>
            <Label>
              <div>2004</div>
              <div>2020</div>
            </Label>
            <Range
              min={2004}
              max={2020}
              onChange={handleYearChange}
              defaultValue={[sliderYearBegin, 2010, sliderYearEnd]}
            />
          </div>
          <h3>Boat length</h3>
          <div>
            <Label>
              <div>0m</div>
              <div>20m</div>
            </Label>
            <Range
              min={0}
              max={20}
              onChange={handleLengthChange}
              defaultValue={[sliderLengthBegin, 15, sliderLengthEnd]}
            />
          </div>
          <p style={{ paddingTop: "20px" }}>
            {`Showing ${filteredBoats.length} results out of
            ${data?.getBoats.length}`}
          </p>
        </Filter>
        <BoatsList boats={filteredBoats} />
      </ContentWrapper>
    </>
  );
};

BoatsContainer.displayName = "BoatsContainer";

export default BoatsContainer;
