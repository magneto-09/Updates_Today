import "./App.css";

import React from "react";
import NavBar from "./custComp/NavBar";
import News from "./custComp/News";

import About from "./custComp/About";

import { Route, Routes } from "react-router-dom";

//  function based component
export default function App() {
  // cntry array bnaye jisse hm category wise har country ka news dekh payenge..pehle pura hardcode kiye the
  // toh code base iss component ka 1000 lines ka chal gya tha...toh usko thk krne k liye array bna k
  // traverse kr liye
  let cntry = ["au", "br", "cn", "fr", "il", "jp", "kr", "tw", "us", "gb"];

  // **********************************************************

  let api = process.env.REACT_APP_newsapp;

  // **********************************************************

  // method
  return (
    <div>
      {/* < NavBar /> */}
      {/* <News apiKey={api} Mode={this.state.mode} pageSize={8} category="science" country="us"/> */}

      <Routes>
        {/* ****************** 1st page, home, about page pe show krane k liye.   **************** */}
        <Route
          exact
          path="/"
          element={
            <>
              <NavBar /> {/* default props --> category=business h */}
              <News apiKey={api} key="general" pageSize={8} />{" "}
              {/* default props --> category=business & country=india h */}
            </>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <>
              <NavBar /> {/* default props --> category=business h */}
              <News apiKey={api} pageSize={8} />{" "}
              {/* default props --> category=business & country=india h */}
            </>
          }
        />
        {/* ************************************************************************************ */}

        {/* ***********general news ka different different country k liye bnana hoga ********/}

        {/* general news india wala home page pe hi h toh confuse mt hona ki general wala news india 
          k liye khn h jaise baaaki ctgry k liye india wla pehle h & then fir cntry arr traverse kr liye */}

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/general/${element}`}
              element={
                <>
                  <NavBar />
                  <News
                    apiKey={api}
                    key={element}
                    pageSize={8}
                    country={element}
                    color="warning"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* ********************************* general ends here ***********/}

        {/* ***************** different category ko traverse krenge ab ******** */}

        {/* ************* Business wala krenge ************** */}

        <Route
          exact
          path="business"
          element={
            <>
              <NavBar category="business" />
              <News
                apiKey={api}
                key="business"
                pageSize={8}
                country="in"
                category="business"
                color="success"
              />
            </>
          }
        ></Route>

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/business/${element}`}
              element={
                <>
                  <NavBar category="business" />
                  <News
                    apiKey={api}
                    key={element} // yhn pe iske jgh business rkho & then business wale category se diff.
                    //  country ko access krne ki koshish kr pta chl jayega kya error h.
                    pageSize={8}
                    country={element}
                    category="business"
                    color="success"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* *************************************************** */}

        {/* ************* entertainment wala krenge ************** */}

        <Route
          exact
          path="entertainment"
          element={
            <>
              <NavBar category="entertainment" />
              <News
                apiKey={api}
                key="entertainment"
                pageSize={8}
                country="in"
                category="entertainment"
                color="info"
              />
            </>
          }
        ></Route>

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/entertainment/${element}`}
              element={
                <>
                  <NavBar category="entertainment" />
                  <News
                    apiKey={api}
                    key={element}
                    pageSize={8}
                    country={element}
                    category="entertainment"
                    color="info"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* *************************************************** */}

        {/* ************* health wala krenge ************** */}

        <Route
          exact
          path="health"
          element={
            <>
              <NavBar category="health" />
              <News
                apiKey={api}
                key="health"
                pageSize={8}
                country="in"
                category="health"
                color="warning"
              />
            </>
          }
        ></Route>

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/health/${element}`}
              element={
                <>
                  <NavBar category="health" />
                  <News
                    apiKey={api}
                    key={element}
                    pageSize={8}
                    country={element}
                    category="health"
                    color="warning"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* *************************************************** */}

        {/* ************* science wala krenge ************** */}

        <Route
          exact
          path="science"
          element={
            <>
              <NavBar category="science" />
              <News
                apiKey={api}
                key="science"
                pageSize={8}
                country="in"
                category="science"
                color="secondary"
              />
            </>
          }
        ></Route>

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/science/${element}`}
              element={
                <>
                  <NavBar category="science" />
                  <News
                    apiKey={api}
                    key={element}
                    pageSize={8}
                    country={element}
                    category="science"
                    color="secondary"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* *************************************************** */}

        {/* ************* sports wala krenge ************** */}

        <Route
          exact
          path="sports"
          element={
            <>
              <NavBar category="sports" />
              <News
                apiKey={api}
                key="sports"
                pageSize={8}
                country="in"
                category="sports"
                color="primary"
              />
            </>
          }
        ></Route>

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/sports/${element}`}
              element={
                <>
                  <NavBar category="sports" />
                  <News
                    apiKey={api}
                    key={element}
                    pageSize={8}
                    country={element}
                    category="sports"
                    color="primary"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* *************************************************** */}

        {/* ************* technology wala krenge ************** */}

        <Route
          exact
          path="technology"
          element={
            <>
              <NavBar category="technology" />
              <News
                apiKey={api}
                key="technology"
                pageSize={8}
                country="in"
                category="technology"
                color="warning"
              />
            </>
          }
        ></Route>

        {/* cntry array traverse krenge */}
        {cntry.map((element) => {
          return (
            <Route
              key={element} // yeh array traverse krne k time jaroorat rehta h jisse define kr sake unique ko
              exact
              path={`/technology/${element}`}
              element={
                <>
                  <NavBar category="technology" />
                  <News
                    apiKey={api}
                    key={element}
                    pageSize={8}
                    country={element}
                    category="technology"
                    color="warning"
                  />
                </>
              }
            ></Route>
          );
        })}

        {/* *************************************************** */}

        {/* saare category ko traverse krna ho gya */}


    <Route exact path="/about" element={
      <About></About>
    }>



    </Route>

      </Routes>
    </div>
  );
}
