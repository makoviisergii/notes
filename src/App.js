import styled from "styled-components";
import "./App.css";
import { Listitem } from "./components/ListItem/Listitem";
import Sidebar from "./components/Sidebar/Sidebar";
import Workspase from "./components/Workspace/Workspase";

function App() {
  return (
    <>
      <Sidebar />
      <WpappNotes>
        <Listitem />
        <Workspase />
      </WpappNotes>
    </>
  );
}

export default App;
const WpappNotes = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`;
