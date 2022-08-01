import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* В эти компоненты так же можно передавать и объекты и массивы и булевы */}
        <FunctionComponent firstName="Dmitry" lastName="Dmitriev"/>
        
        {/* <FunctionComponent firstName={true} lastName={"Dmitriev"}/>
        <FunctionComponent firstName={[1, 2, 3]} lastName={{test: 1}}/> */}

        {/* Если не передать в аргументы ничего И если внутри компонента прописаны default значения, то они передадутся сюда*/}
        <FunctionComponent />
        <p>
          Страница реакта <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://ru.reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
