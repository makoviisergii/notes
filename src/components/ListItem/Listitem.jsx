import React from "react";
import { useContext } from "react";
import styled from "styled-components";
import { DataContext } from "../DataProvider/DataProvider";

export const Listitem = () => {
  const data = useContext(DataContext);
  return (
    <ListBox>
      <StyledList>
        {data.map((item) => {
          const dateObj = new Date(item.timestamp);
          const day = dateObj.getDate().toString().padStart(2, "0");
          const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
          const year = dateObj.getFullYear().toString();
          return (
            <ListItem key={item.id}>
              <b>{item.text.slice(0, 20)}...</b>
              <br />
              <p>
                {day}/{month}/{year}
              </p>
            </ListItem>
          );
        })}
      </StyledList>
    </ListBox>
  );
};

const ListBox = styled.div`
  width: 30%;
  height: 100%;
`;
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ListItem = styled.li`
  border-radius: 2px;
  border: 1px solid #d6d6d6;
  padding: 10px;
`;
