import { useState, useEffect } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./styles.css";

const Sidebar = ({
  sidebarItemClick,
  setIsAccords,
  fetchAccordData,
  setAccords,
  setButtonsValues,
  setAccordsValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  function itemClick(event) {
    setIsAccords(false);
    const value = event.target.parentElement.dataset.value
      ? event.target.parentElement.dataset.value.split(",")
      : event.target.children[0].dataset.value.split(",");
    const type = event.target.parentElement.attributes[2]
      ? event.target.parentElement.attributes[2].value
      : event.target.children[0].attributes[2].value;
    const pitches = event.target.parentElement.attributes[3]
      ? event.target.parentElement.attributes[3].value
      : event.target.children[0].attributes[3].value;
    sidebarItemClick(value, type, pitches);
  }

  function toggleDrawer() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isMobile && (
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          className="menu-button"
        >
          <MenuIcon />
        </IconButton>
      )}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer}
        className="sidebar"
        classes={{
          paper: "sidebar-paper",
        }}
      >
        <List>
          <ListItem button>
            <ListItemText
              primary="Определение аккорда на слух"
              onClick={() => {
                setIsAccords(true);
                fetchAccordData();
                setButtonsValues(["Мажорные", "Минорные"]);
                setAccords([
                  [3, 4],
                  [4, 3],
                ]);
                setAccordsValue(1);
              }}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Большая и малая секунда"
              data-value={["Большая секунда", "Малая секунда"]}
              type={0}
              pitches={[2, 1]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Большая и малая терция"
              data-value={["Большая терция", "Малая терция"]}
              type={1}
              pitches={[4, 3]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Чистая кварта и квинта"
              data-value={["Чистая кварта", "Чистая квинта"]}
              type={2}
              pitches={[5, 7]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Большая и малая Секста"
              data-value={["Большая Секста", "Малая Секста"]}
              type={3}
              pitches={[9, 8]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Большая и малая септима"
              data-value={["Большая септима", "Малая септима"]}
              type={4}
              pitches={[11, 10]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Секунды и терции"
              data-value={[
                "Малая секунда",
                "Большая секунда",
                "Малая терция",
                "Большая терция",
              ]}
              type={5}
              pitches={[1, 2, 3, 4]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Терции и кварта"
              data-value={["Малая терция", "Большая терция", "Чистая кварта"]}
              type={6}
              pitches={[3, 4, 5]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Тритон, квинта и сексты"
              data-value={[
                "Тритон",
                "Чистая квинта",
                "Малая секста",
                "Большая секста",
              ]}
              type={7}
              pitches={[6, 7, 8, 9]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Сексты и септимы"
              data-value={[
                "Малая секста",
                "Большая секста",
                "Малая септима",
                "Большая септима",
              ]}
              type={8}
              pitches={[8, 9, 10, 11]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Консонансы"
              data-value={[
                "Малая терция",
                "Большая терция",
                "Чистая кварта",
                "Чистая квинта",
                "Малая секста",
                "Большая секста",
                "Чистая октава",
              ]}
              type={9}
              pitches={[3, 4, 5, 7, 8, 9, 12]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Диссонансы"
              data-value={[
                "Малая секунда",
                "Большая секунда",
                "Тритон",
                "Малая септима",
                "Большая септима",
              ]}
              type={10}
              pitches={[1, 2, 6, 10, 11]}
            />
          </ListItem>
          <ListItem button onClick={(event) => itemClick(event)}>
            <ListItemText
              primary="Все интервалы"
              data-value={[
                "Малая секунда",
                "Большая секунда",
                "Малая терция",
                "Большая терция",
                "Чистая кварта",
                "Тритон",
                "Чистая квинта",
                "Малая секста",
                "Большая секста",
                "Малая септима",
                "Большая септима",
                "Чистая октава",
              ]}
              type={11}
              pitches={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
            />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
