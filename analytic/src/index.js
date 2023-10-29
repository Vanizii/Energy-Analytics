import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from 'react-router-dom';

import Layout from './components/layout/layout';
import Blueprint from './components/blueprint/blueprint';
import Dashboard from './components/dashboard/dashboard';
import RoomDetails from "./components/roomdetails/roomdetails";

import {std_fp} from './data'

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="/grundriss" element={<Blueprint fp={std_fp}/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>
      
      <Route path="/raum/:id" element={<RoomDetails/>}/>       
      <Route path="" element={<Dashboard/>}/>
    </Route>
  )
);


class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      energieverbrauch: "2 kWh/m²a",
      eneregieersparnis: "8 kWh/m²",
      geldersparnis: 243};
  }

  // HTML Rendern
  render() {

    return (
        <Layout title="Willkommen zurück, Louise" subtitle="Alle wichtigen Informationen">
          <RouterProvider router={router}/>
        </Layout>
    );
  }

}
root.render(
  <React.StrictMode>
    <Homepage />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
