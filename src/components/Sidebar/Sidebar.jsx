import React from "react";
import styled from "styled-components";
import SerchBox from "../SearchBox/SerchBox";

function Sidebar() {
  return (
    <WrappSidebar>
      <BtnBox>
        <button>Add</button>
        <button>Delete</button>
        <button>Edit</button>
      </BtnBox>
      <SerchBox />
    </WrappSidebar>
  );
}

export default Sidebar;

const WrappSidebar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  width: 100%;
  padding: 0 20px;
  background-color: #d6d6d6;
`;
const BtnBox = styled.div`
  display: flex;
  gap: 10px;
`;
