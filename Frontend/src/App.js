import { Fragment, useState } from "react";
import classes from "./App.module.css";
import Header from "./components/Header/Header";
import AboutUs from "./components/AboutUs/AboutUs";
import Feedback from "./components/Feedback/Feedback";
import CropDetail from "./components/CropDetail/CropDetail";
import CropDisplay from "./components/CropDisplay/CropDisplay";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import axios from "axios";

function App() {
  const [data, setData] = useState({});

  async function postData() {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.

      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
 // JSON data parsed by `data.json()` call
  });

  // const userDataHandler = (data) => {
  //   // setData(data);
  //   // console.log(data);
  //   const {
  //     nitrogen: enteredNitrogen,
  //     potassium: enteredPotassium,
  //     phosphorus: enteredPhosphorus,
  //     ph: enteredPh,
  //     rainfall: enteredRainfall,
  //   }
  //   fetch("http://localhost:8000/Efarma/", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       data_options: data,
  //     }),
  //   })
  //     .then((res) => console.log(res))
  //     .catch((error) => alert(error.message));
  // };

  return (
    <Fragment>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/Home" />
        </Route>

        <Route path="/Home">
          <div className={classes.container__home}>
            <Header />
            <AboutUs />
            <Feedback />
            <CropDetail onSaveUserData={userDataHandler} />
            <Footer />
          </div>
        </Route>

        <Route path="/crop-detail">
          <CropDisplay />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
