import React from "react";
import styled from "styled-components";

function Workspase() {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,
  };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);

  return (
    <>
      <StyledTextarea placeholder={formattedDate} />
    </>
  );
}

export default Workspase;

const StyledTextarea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 2px;
  border: 1px solid #d6d6d6;
  padding: 10px;
`;
