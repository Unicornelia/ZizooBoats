import styled from "@emotion/styled";

export const List = styled("ul")(() => ({
  listStyleType: "none",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(720px, 1fr))",
  gridGap: "1rem",
  columnGap: "30px",
  rowGap: "30px",
  paddingTop: "16px",
  borderTop: "#e4e4e4 1px solid",
  textAlign: "-webkit-center"
}));
