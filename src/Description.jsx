import React from "react";
import "./Description.scss";

export const Description = () => {
  return (
    <div className="guide-page">
      <h1>Глава 1</h1>
      <h2>ЗВУК И ЕГО СВОЙСТВА</h2>

      <h3>Определения звука:</h3>
      <ol>
        <li>
          Колебания воздушной среды, возникающие в результате колебания упругого
          тела
        </li>
        <li>Ощущение, возбуждённое в мозге раздражением слухового органа</li>
      </ol>

      <h3>Свойства звука:</h3>
      <ol>
        <li>
          <strong>Громкость</strong>: в целом зависит от амплитуды колебаний
        </li>
        <li>
          <strong>Длительность</strong>: зависит от продолжительности колебаний
          источника. Колебания с большей амплитудой требуют больше времени на
          затухание. Изменение длительности не меняет физических свойств звука,
          но это важное свойство в музыке.
        </li>
        <li>
          <strong>Высота</strong>: зависит от частоты колебания звуковой волны.
          Выше частота - выше звук. Разделяет звуки на музыкальные и шумовые (у
          последних нет чёткой высоты).
        </li>
        <li>
          <strong>Тембр</strong>: "окраска" звука. Звуки одной высоты,
          воспроизведённые разными инструментами, обладают разной окраской.
          Человеческие голоса различаются друг от друга также тембрами. Различие
          тембров обусловлено обертонами.
        </li>
      </ol>

      <p>
        <strong>Обертоны</strong> - частичные тона, присущие каждому звуку.
        Образуются в результате сложной структуры звуковой волны.
      </p>
      <h2>МУЗЫКАЛЬНАЯ СИСТЕМА И ЗВУКОРЯД</h2>
      <p>Музыкальная система - ряд звуков в высотном отношении</p>
      <p>
        Звукоряд - расположение звуков системы по высоте, состоит из 88 звуков
        от 16 Гц до 4'176 Гц
      </p>
      <p>Ступень звукоряда - звук из звукоряда</p>
      <p>
        7 основных ступеней: До - Ре - Ми - Фа - Соль - Ля - Си, они
        периодически повторяются, покрывая все белые клавиши. Повторение
        происходит из-за того, что каждый восьмой звук имеет удвоенную частоту,
        совпадая с самым ярким обертоном и полностью сливаясь с исходным звуком.
      </p>
      <p>
        Существует несколько способов обозначения основных ступеней и смежных с
        ними элементов теории музыки. Вышеописанный способ - это слоговая
        система.
      </p>
      <p>Есть также буквенные системы обозначения звуков:</p>
      <ul>
        <li>Немецкая: C - D - E - F - G - A - H</li>
        <li>Английская: C - D - E - F - G - A - B</li>
      </ul>
      <p>
        Здесь будет использоваться английская система, а немецкая будет только
        упоминаться.
      </p>
      <p>
        Октава - расстояние между одинаковыми ступенями, также - часть
        звукоряда, в которую входят все 7 основных ступеней от C до C.
      </p>
      <p>
        В английской системе октавы звукоряда обозначаются от 0 до 8, где октавы
        с 1 по 7 являются полными, в октаве 0 содержится три звука, а в октаве 8
        содержится один звук.
      </p>
      <p>В немецкой системе:</p>
      <ul>
        <li>субконтроктава (N2)</li>
        <li>контроктава (N1)</li>
        <li>большая октава (N)</li>
        <li>малая октава (n)</li>
        <li>первая октава (n1)</li>
        <li>вторая октава (n2)</li>
        <li>третья октава (n3)</li>
        <li>четвёртая октава (n4)</li>
        <li>пятая октава (n5)</li>
      </ul>
      <p>
        Регистр - часть звуков звукоряда, объединённых схожими
        высотно-тембровыми качествами:
      </p>
      <ul>
        <li>Нижний регистр: содержит октавы 0 - 2</li>
        <li>Средний регистр: содержит октавы 3 - 5</li>
        <li>Верхний регистр: содержит октавы 6 - 8</li>
      </ul>
      <p>
        Музыкальный строй - соотношение точно отрегулированной (абсолютной)
        высоты звуков:
      </p>
      <p>
        Основа современного строя - [A4 = 440 Гц]. Октава делится на 12 равных
        частей - полутонов. Полутон - самое узкое расстояние между звуками
        строя. Самое узкое расстояние всегда будет между любыми соседними
        звуками. Темперирование - деление строя на равные части так, чтобы все
        полутоны были равны.
      </p>
      <p>
        Тон - расстояние, равное 2м полутонам. Между основными ступенями
        звукоряда есть 5 тонов и 2 полутона: C тон D тон E полутон F тон G тон A
        тон B полутон C.
      </p>
      <p>
        Тоны между белыми клавишами также делятся на полутоны, которые
        извлекаются на черных клавишах. Таким образом, октава состоит из 12
        ступеней, между которыми полутоны.
      </p>
      <p>
        Каждая основная ступень может быть повышена или понижена. Изменённые
        ступени считаются производными, поэтому их названия происходят от
        названий основных:
      </p>
      <ul>
        <li>Дубль-бемоль - понижение на тон</li>
        <li>Бемоль - понижение на полутон</li>
        <li>Диез - повышение на полутон</li>
        <li>Дубль-диез - повышение на тон</li>
      </ul>
      <p>Обозначения в английской системе:</p>
      <ul>
        <li>Nbb - дубль-бемоль</li>
        <li>Nb - бемоль</li>
        <li>N - основная ступень</li>
        <li>N# - диез</li>
        <li>Nx - дубль-диез</li>
      </ul>
      <p>Обозначения в немецкой системе:</p>
      <ul>
        <li>Neses - дубль-бемоль</li>
        <li>Nes - бемоль</li>
        <li>N - основная ступень</li>
        <li>Nis - диез</li>
        <li>Nisis - дубль-диез</li>
      </ul>
      <p>Исключения:</p>
      <ul>
        <li>Es - Ми бемоль</li>
        <li>As - Ля бемоль</li>
        <li>B - Си бемоль</li>
      </ul>
      <p>
        Немецкая система сложилась в средние века, когда звукоряд начинался с Ля
        и содержал Си бемоль. Появившийся позже Си стали обозначать H.
      </p>
      <p>Изменение ступени называется Альтерация.</p>
      <p>
        Благодаря тому, что все полутоны октавы равны, одна и та же производная
        ступень может быть образована как повышением одной основной ступени, так
        и понижением другой: C# ≈ Db, D# ≈ Eb, F# ≈ Gb, G# ≈ Ab, A# ≈ Bb
      </p>
      <p>Энгармонизм звуков - такое равенство.</p>
      <p>
        Производная ступень может оказаться энгармонически равна основной
        ступени: E ≈ Fb, E# ≈ F, B ≈ Cb, B# ≈ C.
      </p>
      <p>Такое часто происходит.</p>
      <h3>ДИАТОНИЧЕСКИЕ И ХРОМАТИЧЕСКИЕ ПОЛУТОНЫ И ТОНЫ</h3>
      <p>
        Диатонический полутон образуется между 2мя соседними ступенями звукоряда
        (основными и производными):
        <br />E - F, G - Ab, D# - E, Bb - Cb, …
      </p>
      <p>
        Хроматический полутон образуется:
        <br />
        а) между основной ступенью и её повышением или понижением
        <br />
        &nbsp;&nbsp; F - F#, Ab - A, …<br />
        б) между повышенной (пониженной) ступенью и её двойным повышением
        (понижением)
        <br />
        &nbsp;&nbsp; Dx - D#, Ab - Abb, Gx - G#, Bbb - Bb, …
      </p>
      <p>
        Диатонический тон образуется:
        <br />
        а) между основными соседними ступенями
        <br />
        &nbsp;&nbsp; C - D, D - E, F - G, G - A, A - B<br />
        б) между основной и производной ступенью
        <br />
        &nbsp;&nbsp; Eb - F, E - F#, Bb - C, B - C#
        <br />
        в) между двумя производными ступенями
        <br />
        &nbsp;&nbsp; F# - G#, Db - Eb, E# - Fx, Abb - Bbb
      </p>
      <p>
        Хроматический тон образуется:
        <br />
        а) между основной ступенью и её двойным изменением
        <br />
        &nbsp;&nbsp; F - F#, Gbb - G, …<br />
        б) между двумя производными ступенями одной ступени
        <br />
        &nbsp;&nbsp; Eb - E#, Gb - G#, …<br />
        в) между ступенями, расположенными через одну ступень
        <br />
        &nbsp;&nbsp; C# - Eb, E - Gb, Gx - B
      </p>
      <p>
        Упрощая:
        <br />
        Чтобы полутон/целый тон был диатоническим, нужно
        <br />
        &nbsp;&nbsp; Чтобы это был, собственно, полутон/целый тон
        <br />
        &nbsp;&nbsp; Чтобы его ступени имели 2 соседних названия основных
        ступеней, если убрать знаки альтерации
        <br />В противном случае полутон/целый тон - хроматический
      </p>
      <p>
        Есть некоторые случаи, не попадающие под это правило, а именно случаи
        вроде E# - Fb, в которых нижний звук получается выше верхнего
        <br />
        Такие случаи обычно не рассматриваются, а тем более на практике не
        используются
      </p>
      <h2>О, ВЫ ИЗ АНГЛИИ!</h2>
      <h4>Tone row</h4>
      <p>
        Pitch class - любая ступень с заданным названием (из любой октавы)
        <br />
        Pitch - конкретная ступень конкретной октавы
        <br />
        Octave equivalence - повторение ступеней через октаву
      </p>
      <h4>Enharmonic pitches</h4>
      <p>
        Accidentals - знаки альтерации
        <br />
        Sharp - диез
        <br />
        Flat - бемоль
        <br />
        Double sharp - дубль-диез
        <br />
        Double flat - дубль-бемоль
        <br />
        Half step (semitone) - полутон
        <br />
        Whole step (whole tone) - целый тон
      </p>
    </div>
  );
};