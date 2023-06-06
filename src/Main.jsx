import React, { useEffect, useState } from "react";
import "./index.css";
import Sidebar from "./components/Sidebar";
import Button from "@mui/material/Button";
import axios from "axios";
import ReactAudioPlayer from "react-audio-player";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Main = () => {
  const [buttonsValues, setButtonsValues] = useState([]);
  const [exerciseType, setExerciseType] = useState([]);
  const [pitches, setPitches] = useState([1, 1]);
  const [firstNote, setFirtsNote] = useState();
  const [secondNote, setSecondNote] = useState();
  const [halfsteps, setHalfsteps] = useState();
  const [firstSound, setFirstSound] = useState();
  const [secondSound, setSecondSound] = useState();
  const [success, setSuccess] = useState("");
  const [intervalType, setIntervalType] = useState(0);
  const [intervalName, setIntervalName] = useState("Гармонические");
  const [isAccords, setIsAccords] = useState(false);
  const [accordsType, setAccordsType] = useState("Мажорные и минорные");
  const [accordsValue, setAccordsValue] = useState(1);
  const [mainAccord, setMainAccord] = useState();
  const [thirdAccord, setThirdAccord] = useState();
  const [fifthAccord, setFifthAccord] = useState();
  const [halfstepsFirst, setHalfstepsFirst] = useState();
  const [halfstepsSecond, setHalfstepsSecond] = useState();
  const [accords, setAccords] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const sidebarItemClick = (buttonsValue, type, pitches) => {
    setButtonsValues(buttonsValue);
    setExerciseType(type);
    setPitches(pitches.split(","));
  };

  useEffect(() => {
    console.log(buttonsValues);
    console.log(pitches);
  }, [buttonsValues, pitches]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5222/interval/get", {
        params: {
          intervalType: intervalType,
          intervalExerciseType: exerciseType,
        },
      });
      console.log(exerciseType);
      console.log(response);
      if (!response) return;
      setFirtsNote(response.data.top);
      setSecondNote(response.data.bottom);
      setHalfsteps(response.data.halfsteps);
      setFirstSound(require(`./sounds/${response.data.top}.mp3`));
      setSecondSound(require(`./sounds/${response.data.bottom}.mp3`));
      setSuccess(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAccordData = async () => {
    try {
      const response = await axios.get("http://localhost:5222/accord/get", {
        params: {
          accordExerciseType: accordsValue,
        },
      });

      if (!response) return;
      console.log(accordsValue);
      console.log(response);

      setMainAccord(require(`./sounds/${response.data.mainTone}.mp3`));
      setThirdAccord(require(`./sounds/${response.data.thirdTone}.mp3`));
      setFifthAccord(require(`./sounds/${response.data.fifthTone}.mp3`));
      setHalfstepsFirst(response.data.halfstepsInFirst);
      setHalfstepsSecond(response.data.halfstepsInSecond);
      setSuccess(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [buttonsValues]);

  const buttonClick = (event) => {
    if (isAccords) {
      setSuccess(
        event.target.value.split(",")[0] == halfstepsFirst &&
          event.target.value.split(",")[1] == halfstepsSecond
      );
      console.log(
        event.target.value.split(",")[0] == halfstepsFirst &&
          event.target.value.split(",")[1] == halfstepsSecond
      );
    } else {
      setSuccess(event.target.value == halfsteps);
      console.log(event.target.value);
    }
  };

  const playSound = () => {
    if (isAccords) {
      const main = new Audio(mainAccord);
      const first = new Audio(thirdAccord);
      const second = new Audio(fifthAccord);
      main.play();
      first.play();
      second.play();
    } else {
      const first = new Audio(firstSound);
      const second = new Audio(secondSound);

      if (intervalType === 0) {
        first.play();
        second.play();
      } else if (intervalType === 1) {
        first.addEventListener("ended", () => {
          second.play();
        });
        first.play();
      } else if (intervalType === 2) {
        second.addEventListener("ended", () => {
          first.play();
        });
        second.play();
      }
    }
  };

  return (
    <div className="wrapper">
      <Sidebar
        sidebarItemClick={sidebarItemClick}
        setIsAccords={setIsAccords}
        fetchAccordData={fetchAccordData}
        setAccords={setAccords}
        setButtonsValues={setButtonsValues}
        setAccordsValue={setAccordsValue}
      />
      <div className="main">
        <FormControl>
          <InputLabel id="demo-simple-select-label">
            {isAccords ? "Тип трезвучия" : "Тип интервала"}
          </InputLabel>
          {isAccords ? (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Выберите тип тризвучия"
              value={accordsType}
              onChange={(event) => {
                fetchData();
              }}
            >
              <MenuItem
                value={"Мажорные и минорные"}
                type={0}
                onClick={() => {
                  setButtonsValues(["Мажорные", "Минорные"]);
                  setAccords([
                    [3, 4],
                    [4, 3],
                  ]);
                  setAccordsValue(1);
                }}
              >
                Мажорные и минорные
              </MenuItem>
              <MenuItem
                value={"Уменьшенные и увеличенные"}
                type={1}
                onClick={() => {
                  setButtonsValues(["Уменьшенные", "Увеличенные"]);
                  setAccords([
                    [3, 3],
                    [4, 4],
                  ]);
                  setAccordsValue(0);
                }}
              >
                Уменьшенные и увеличенные
              </MenuItem>
              <MenuItem
                value={"Все"}
                type={2}
                onClick={() => {
                  setButtonsValues([
                    "Мажорные",
                    "Минорные",
                    "Уменьшенные",
                    "Увеличенные",
                  ]);
                  setAccords([
                    [3, 4],
                    [4, 3],
                    [3, 3],
                    [4, 4],
                  ]);
                  setAccordsValue(2);
                }}
              >
                Все
              </MenuItem>
            </Select>
          ) : (
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Гармонические"
              value={intervalName}
              onChange={(event) => {
                setIntervalType(
                  +event.explicitOriginalTarget.attributes.type.value
                );
                setIntervalName(event.target.value);
                fetchData();
              }}
            >
              <MenuItem value={"Гармонические"} type={0}>
                Гармонические
              </MenuItem>
              <MenuItem value={"Восходящие"} type={1}>
                Восходящие
              </MenuItem>
              <MenuItem value={"Нисходящие"} type={2}>
                Нисходящие
              </MenuItem>
            </Select>
          )}
        </FormControl>

        <div className="buttons-container">
          {buttonsValues.map((value, index) => (
            <Button
              variant="contained"
              color="primary"
              key={index}
              value={isAccords ? accords[index] : pitches[index]}
              onClick={(event) => buttonClick(event)}
            >
              {value}
            </Button>
          ))}
          {/* <ReactAudioPlayer src={audioFile ? audioFile : '/'} controls /> */}
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              playSound();
              setSuccess("");
            }}
          >
            Play
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              isAccords ? fetchAccordData() : fetchData();
            }}
          >
            Далее
          </Button>
          <div className="answer">
            {success === true && <p className="true">Верно</p>}
            {success === false && (
              <p className="false">
                Неверно, колличество полушагов -
                {isAccords
                  ? ` ${halfstepsFirst}, ${halfstepsSecond}`
                  : halfsteps}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
