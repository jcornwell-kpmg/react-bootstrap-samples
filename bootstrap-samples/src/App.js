//import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}

      <section className="container">
        <div className="row">
          <div className="col-md-4 p-3 d-flex justify-content-center">
            <button className="btn btn-primary">Primary</button>
          </div>

          <div className="col-md-4 p-3 d-flex justify-content-center">
            <button className="btn btn-secondary">Secondary</button>
          </div>

          <div className="col-md-4 p-3 d-flex justify-content-center">
            <button className="btn btn-tertiary">Tertiary</button>
          </div>
        </div>
      </section>

      <section className="container bg-dark mt-3 rounded-3">
        <div className="row">
          <div className="col-md-4 p-3 d-flex justify-content-center">
            <button className="btn btn-primary-dark">Primary</button>
          </div>

          <div className="col-md-4 p-3 d-flex justify-content-center">
            <button className="btn btn-secondary-dark">Secondary</button>
          </div>

          <div className="col-md-4 p-3 d-flex justify-content-center">
            <button className="btn btn-tertiary-dark">Tertiary</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
