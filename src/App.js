import { Route, Routes } from "react-router";
import Main from "./Main";

function App() {
  return (
    <>
      <Routes>
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
