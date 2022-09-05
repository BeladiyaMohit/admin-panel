import { Category } from "@syncfusion/ej2-react-charts";
import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { Dashbord } from "../Dashbord/Dashbord";
import { Company } from "../Company/Company";
import { Branch } from "../Branch/Branch";
import { Categorys } from "../Category/Category";
import { Product } from "../Product/Product";
import { Users } from "../Users/Users";
import { Application } from "../Application/Application";
import { NewLogin } from "../Login/Login";
import { PrivateRouter } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";
import { Table } from "../Table";

export const RoutesMain = () => {
  const responce = sessionStorage.getItem("userAccessToken");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<PublicRoute />}>
            <Route exact path="/login" element={<NewLogin />} /> 
            <Route exact path="/table" element={<Table />} /> 
          </Route>
          <Route element={<PrivateRouter />}>
            <Route exact path="/admin/company" element={<Dashbord page={Company}/>}/>
            <Route exact path="/admin/branch" element={<Dashbord page={Branch}/>}/>
            <Route exact path="/admin/category" element={<Dashbord page={Categorys}/>}/>
            <Route exact path="/admin/product" element={<Dashbord page={Product}/>}/>
            <Route exact path="/admin/users" element={<Dashbord page={Users}/>}/>
            <Route exact path="/admin/application" element={<Dashbord page={Application}/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
