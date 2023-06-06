import { Route, Routes, useNavigate } from "react-router";
import Main from "./Main";
import { Description } from "./Description";
import { AppBar, Toolbar, Typography, Tab, Tabs } from "@mui/material";

function App() {
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    switch (newValue) {
      case 0:
        navigate("/main");
        break;
      case 1:
        navigate("/description");
        break;
      default:
        break;
    }
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            mused
          </Typography>
          <Tabs onChange={handleTabChange} centered>
            <Tab label="Главная" />
            <Tab label="Описание" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </>
  );
}

export default App;
