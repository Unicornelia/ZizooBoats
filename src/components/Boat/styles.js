import styled from "@emotion/styled";

export const Card = styled("div")(() => ({
  display: "grid",
  textAlign: "justify",
  border: "1px solid #e1e4e7",
  gridTemplateColumns: "auto minmax(330px, 1fr)",
  backgroundColor: "#fff",
  borderRadius: "0.5rem",
  position: "relative",
  overflow: "hidden",
  height: "225px",
  width: "720px",
  boxShadow: "0 1px 4px 0 rgba(0,0,0,.1)",
  "& img": {
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "0.5rem 0 0 0.5rem"
  }
}));

export const ContentRow = styled("div")(() => ({
  display: "grid",
  paddingBottom: "10px",
  gridTemplateColumns: "minmax(200px, 1fr) minmax(100px, 1fr)",
  "& #left": {
    textAlign: "left"
  },
  "& #right": {
    textAlign: "right"
  }
}));

export const Content = styled("div")(() => ({
  padding: "16px",
  fontSize: "12px",
  display: "grid",
  gridTemplateRows: "auto 50px",
  "& h5": {
    color: "#1ca3d6",
    fontWeight: "600",
    fontSize: "16px",
    letterSpacing: "0",
    textTransform: "none",
    paddingBottom: "8px",
    maxWidth: "100%",
    textOverflow: "ellipsis",
    whiteSpace: "wrap"
  },
  "& #type": {
    fontWeight: 400,
    paddingBottom: "4px",
    transition: "all .25s"
  }
}));

export const StarWrapper = styled("div")(() => ({
  display: "flex",
  color: "#7e7e7e"
}));

export const CountryWrapper = styled("div")(() => ({
  color: "#7e7e7e",
  textAlign: "right"
}));

export const Button = styled("div")(() => ({
  borderRadius: "3px",
  border: "none",
  padding: "8px",
  backgroundColor: "#1ca3d6",
  color: "white",
  fontWeight: 600
}));
