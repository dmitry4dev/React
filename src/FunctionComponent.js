import React, { useState } from 'react';


// в реакте в компонент передаются аргументы, называются props
// в реакте внутри компонетов таких как этот, значения переменных props... НЕ прописываются.
// их прописывают из других файлов, конкретно сюда значения идут из App.js
const FunctionComponent = (props) => {
// useState это хук, который дает возможность управлять состоянием компонента
// useState функция принимает 1 аргумент, который назначается по умолчанию
// useState возвращает массив, и значение index 0 в данном случае по умолчанию, index 1 это уже функция
// которая воздействует на состояние
// useState = setCount заставляет компонент перезапускаться каждый раз при изменении состояния
  const [count, setCount] = useState(0);
// тоже самое что
  // const count = useState(0)[0];
  // const setCount = useState(0)[1];

  return(
    <div>
{/* Аналог IF из JS*/}
      <div>
        {count ? (<>Опа опа {props.firstName} {props.lastName}</>) : ''}
        <button onClick={() => setCount(count + 1)}>Add {count}</button>
      </div>
      <div>
        Это функциональный компонент {props.firstName} {props.lastName}
        <button onClick={() => setCount(count + 1)}>Add {count}</button>
      </div>
    </div>
  );
}

// Назначение дефолтных props прямо внутри компонента
FunctionComponent.defaultProps = {
  firstName: "Default Name",
  lastName: "Default LastName"
};

export default FunctionComponent;