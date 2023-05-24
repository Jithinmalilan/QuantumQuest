import React, { useState } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { createBrowserHistory } from "history";
import HomePage from "../Pages/HomePage";
import BlogPage from "../Pages/BlogPage";

const customHistory = createBrowserHistory();

// Routes For Navigation

const MyRoutes = (props) => {

  return(

    <BrowserRouter history={customHistory}>
      
      <div style={{"height":"100%","width":"100%"}}>

          <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/blog" element={<BlogPage />}></Route>
          </Routes>

      </div>

    </BrowserRouter>

  );

}

export default MyRoutes;