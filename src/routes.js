import Sidebar from "./App/Components/Sidebar";
import TopBar from "./App/Components/TopBar";
import Wrapper from "./Components/Wrapper"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from "./App/pages/HomePage";

function RoutesController() {
  return (
    <Wrapper>
      <Wrapper width="100%" height="50px" bgColor="white" position="sticky" top="0" zIndex="999">
        <TopBar />
      </Wrapper>
      <Wrapper display="flex" margin="10px 0 0 0">
        <Wrapper flex="1" height="calc(100vh - 50px)" bgColor="rgb(251, 251, 255)" position="sticky" top="50px">
          <Sidebar />
        </Wrapper>
        <Wrapper flex="4" margin="15px 0 0 0">
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default RoutesController;
