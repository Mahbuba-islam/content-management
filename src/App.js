import React from 'react';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from "./redux/store"
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import routes from './routes/routes';

//homePage: users can sort the contents based on date/time
// there would be 2 options 1.sort by last upload. 2.sort by the frist upload

// each content card should have multiple tags realated to that topic , by clicking that tag the content card should rearrange(get filtered)

// after clicking on each content , a reading history should be generated on the "reading history" page.
// previously read content should be on this page, however, if a user clicks on already read content should move to the top of the page.(same content cannot be reapeated on this list)




function App() {
  return (

    <div className="App">
       <Provider store={store}>
     <RouterProvider router={routes} />
     </Provider>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="text-3xl underline">
      Hello world!
    </h1>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;
