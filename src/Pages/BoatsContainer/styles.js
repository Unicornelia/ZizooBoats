import styled from "@emotion/styled";

export const TopWrapper = styled("div")(() => ({
  display: "flex",
  width: "100%",
  padding: "24px 24px",
  justifyContent: "center"
}));
export const ContentWrapper = styled("div")(() => ({
  display: "grid",
  gridTemplateColumns: "400px auto",
  padding: "24px 0px"
}));

export const Header = styled("div")(() => ({
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center"
}));

export const Title = styled("h1")(() => ({
  fontSize: "20px",
  maxWidth: "65vw"
}));

export const Label = styled("div")(() => ({
  display: "flex",
  justifyContent: "space-between"
}));

export const Filter = styled("div")(() => ({
  display: "flex",
  padding: "10px 30px 10px 60px",
  flexDirection: "column",
  position: "relative",
  "& h2": {
    paddingBottom: "20px"
  },
  "& h3": {
    padding: "20px 0"
  }
}));
