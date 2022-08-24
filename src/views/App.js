import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent.js';
import ListTodo from './Todos/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ListUser from './Users/ListUser';
import Nav from './Nav/Nav';
import Home from './Example/Home';
import DetailUser from './Users/DetailUser';

import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";


/**
 * 2 components: class component / function component ( function, arrow)
 * JSX
 */

function App() {
  // const  App = () =>  {
  return (
    <BrowserRouter>{/*push and replace state ,sync ui with url */}
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>{/**gom nhom cac route dambao tai 1 thoi diem chi render duy nhat 1 component dau tien co url hien tai trung voi path prop cua Route */}
            <Route path="/" exact>
              <Home />
            </Route>
            {/**truy cap vao duong link /todo thi no se ra ListTodo component */}
            <Route path="/todo">
              <ListTodo />
            </Route> 
            <Route path="/about">
              <MyComponent />
            </Route>
            <Route path="/user" exact>{/**exact de phan biet cac duong lin gan giong nhau nhu /user vs /user/:id */}
              <ListUser />
            </Route>

            <Route path="/user/:id">
              <DetailUser />
            </Route>

          </Switch>

        </header>

{/**https://www.npmjs.com/package/react-toastify */}
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
