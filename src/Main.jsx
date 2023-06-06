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
  const [accordsValue, setAccordsValue] = useState(0);
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
        headers: { "Access-Control-Allow-Origin": "*" },
        params: {
          intervalType: intervalType,
          exerciseType: exerciseType,
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
        headers: { "Access-Control-Allow-Origin": "*" },
        params: {
          exerciseType: accordsValue,
        },
      });

      if (!response) return;

      console.log(response);

      setMainAccord(require(`./sounds/${response.data.mainTone}.mp3`));
      setThirdAccord(require(`./sounds/${response.data.thirdTone}.mp3`));
      setFifthAccord(require(`./sounds/${response.data.fifthTone}.mp3`));
      setHalfstepsFirst(response.data.halfstepsInFirst);
      setHalfstepsSecond(response.data.halfstepsInSecond);
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
      <div
        className="theory__button"
        onClick={() => {
          setModalIsOpen(!modalIsOpen);
        }}
      >
        ?
      </div>
      {modalIsOpen && (
        <>
          <div className="theory__modal">
            <h3>ЗВУК И ЕГО СВОЙСТВА:</h3> Определения звука: 1) Колебания
            воздушной среды, возникающие в результате колебания упругого тела
            2)Ощущение, возбуждённое в мозге раздражением слухового органа
            Свойства звука: 1) Громкость в целом зависит от амплитуды колебаний
            2) Длительность зависит от продолжительности колебаний источника
            колебания с большей амплитудой требуют больше времени на затухание
            изменение дительности не меняет физических свойств звука, но это
            важное свойство в музыке 3) Высота зависит от частоты колебания
            звуковой волны выше частота - выше звук разделяет звуки на
            музыкальные и шумовые (у последних нет чёткой высоты) 4) Тембр
            "окраска" звука звуки одной высоты, воспроизведённые разными
            инструментами обладают разной окраской человеческие голоса
            различаются друг от друга также тембрами различие тембров
            обусловлено обертонами Обертоны - частичные тона, присущие каждому
            звуку Образуются в результате сложной структуры звуковой волны
            <h3> МУЗЫКАЛЬНАЯ СИСТЕМА И ЗВУКОРЯД</h3> Музыкальная система - ряд
            звуков в высотном отношении Звукоряд - расположение звуков системы
            по высоте состоит из 88 звуковот 16 Гц до 4'176 Гц Ступень звукоряда
            - звук из звукоряда 7 основных ступеней: До - Ре - Ми - Фа - Соль -
            Ля - Си, они периодически повторяются, покрывая все белые клавиши
            повторение происходит из-за того, что каждый восьмой звук имеет
            удвоенную частоту, совпадая с самым ярким обертоном и полностью
            сливаясь с исходным звуком Существует несколько способов обозначения
            основных ступеней и смежных с ними элементов теории музыки
            Вышеописанный способ - это слоговая система Есть также буквенные
            системы обозначения звуков Немецкая: C - D - E - F - G - A - H
            Английская: C - D - E - F - G - A - B Здесь будет использоваться
            английская; немецкая будет только упоминаться Октава - расстояние
            между одинаковыми ступениями также - часть звукоряда, в которую
            входят все 7 основных ступеней от C до C В английской системе октавы
            звукоряда обозначаются от 0 до 8, где октавы с 1 по 7 являются
            полными, в октаве 0 содержится три звука, а в октаве 8 содержится
            один звук В немецкой системе: субконтроктава (N2) контроктава (N1)
            большая октава (N) малая октава (n) первая октава (n1) вторая октава
            (n2) третья октава (n3) четвёртая октава (n4) пятая октава (n5)
            Регистр - часть звуков звукоряда, объединённых схожими
            высотно-тембровыми качествами Нижний регистр: содержит октавы 0 - 2
            Средний регистр: содержит октавы 3 - 5 Верхний регистр: содержит
            октавы 6 - 8 Музыкальный строй - соотношение точно отрегулированной
            (абсолютной) высоты звуков Основа современного строя - [A4 = 440 Гц]
            Октава делится на 12 равных частей - полутонов Полутон - самое узкое
            расстояние между звуками строя Самое узкое расстояние всегда будет
            между любыми соседними звуками Темперирование - деление строя на
            равные части так, чтобы все полутоны были равны Тон - расстояние,
            равное 2м полутонам Между основными ступенями звукоряда есть 5 тонов
            и 2 полутона: C тон D тон E полутон F тон G тон A тон B полутон C
            Тоны между белыми клавишами тоже делятся на полутоны, которые
            извлекаются на черных клавишах Таким образом, октава состоит из 12
            ступеней, между которыми полутоны Каждая основная ступень может быть
            повышена или понижена Изменённые ступени считаются производными,
            поэтому их названия происходят от названий основных: Дубль-бемоль -
            понижение на тон Бемоль - понижение на полутон Диез - повышение на
            полутон Дубль-диез - повышение на тон Обозначения в английской
            системе: Nbb - дубль-бемоль Nb - бемоль N - основная ступень N# -
            диез Nx - дубль-диез Обозначения в немецкой системе: Neses -
            дубль-бемоль Nes - бемоль N - основная ступень Nis - диез Nisis -
            дубль-диез Исключения: Es - Ми бемоль As - Ля бемоль B - Си бемоль
            Немецкая система сложилась в средние века, когда звукоряд начинался
            с Ля и содержал Си бемоль Появившийся позже Си стали обозначать H
            Изменение ступени называется Альтерация
          </div>
          <div
            className="overlay"
            onClick={() => {
              setModalIsOpen(!modalIsOpen);
            }}
          ></div>
        </>
      )}
      <Sidebar
        sidebarItemClick={sidebarItemClick}
        setIsAccords={setIsAccords}
        fetchAccordData={fetchAccordData}
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
                setAccordsValue(
                  +event.explicitOriginalTarget.attributes.type.value
                );
                setAccordsType(event.target.value);
                console.log(event.target.value);
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
        <p className="answer">
          {success === true && <p className="true">Верно</p>}
          {success === false && (
            <p className="false">
              Неверно, колличество полушагов -
              {isAccords ? ` ${halfstepsFirst}, ${halfstepsSecond}` : halfsteps}
            </p>
          )}
        </p>
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
        </div>
      </div>
    </div>
  );
};

export default Main;
