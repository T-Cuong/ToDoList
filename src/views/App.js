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
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Nav />
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>{/**https://v5.reactrouter.com/web/api/Switch giai thich cach dung switch noi chung dung switch de khi ta nhan vao duong link nao no se hien ra chinh xac component, con neu ko dung thi no se render tat ca cac component */}
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
