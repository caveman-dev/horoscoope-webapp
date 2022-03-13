// import { Dialog } from "primereact/dialog";
import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import $ from "jquery";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

import { useFormik } from "formik";
import { InputText } from "primereact/inputtext";
// import { Button } from 'primereact/button';
import { Dropdown } from "primereact/dropdown";
import { Calendar } from "primereact/calendar";
import { Password } from "primereact/password";
import { Checkbox } from "primereact/checkbox";
// import { Dialog } from 'primereact/dialog';
import { Divider } from "primereact/divider";
import { classNames } from "primereact/utils";
import { InputTextarea } from "primereact/inputtextarea";
import { ScrollPanel } from "primereact/scrollpanel";
import { Skeleton } from "primereact/skeleton";
import { Card } from "primereact/card";
import moment from "moment";
// import "./DialogDemo.css";
function App() {
  const [countries, setCountries] = useState([]);
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({});
  const [value, setValue] = useState("");
  const [dateZ, setDateZ] = useState(new Date());
  const [dateForm, setDateForm] = useState("");
  const [resultDisplay, setResultDisplay] = useState("");
  const [finalResult, setFinalResult] = useState("");
  const [defaultZodiac, setDefaultZodiac] = useState("");
  // const zodiac = [
  //   "ARIES",
  //   "TAURUS",
  //   "GEMINI",
  //   "CANCER",
  //   "LEO",
  //   "VIRGO",
  //   "LIBRA",
  //   "SCORPIO",
  //   "SAGITTARIUS",
  //   "CAPRICORN",
  //   "AQUARIUS",
  //   "PISCES",
  // ];
  const zodiac = [
    { label: "ARIES", value: "ARIES" },
    { label: "TAURUS", value: "TAURUS" },
    { label: "GEMINI", value: "GEMINI" },
    { label: "CANCER", value: "CANCER" },
    { label: "LEO", value: "LEO" },
    { label: "VIRGO", value: "VIRGO" },
    { label: "LIBRA", value: "LIBRA" },
    { label: "SCORPIO", value: "SCORPIO" },
    { label: "SAGITTARIUS", value: "SAGITTARIUS" },
    { label: "CAPRICORN", value: "CAPRICORN" },
    { label: "AQUARIUS", value: "AQUARIUS" },
    { label: "PISCES", value: "PISCES" },
  ];

  useEffect(() => {
    let aa = new Date(dateZ).toISOString().split("T");
    aa = aa[0];

    setDateForm(aa);
    if (dateZ) {
      let currentMonth = dateZ.getMonth() + 1;
      let currentDate = dateZ.getDate();

      if (currentMonth == 1) {
        if (currentDate < 20) {
          formik.values.zodiacV = "CAPRICORN";
        } else {
          formik.values.zodiacV = "AQUARIUS";
          // setValue("AQUARIUS");
        }
      } else if (currentMonth == 2) {
        if (currentDate < 19) {
          formik.values.zodiacV = "AQUARIUS";
          // setValue("AQUARIUS");
        } else {
          formik.values.zodiacV = "PISCES";
          // setValue("PISCES");
        }
      } else if (currentMonth == 3) {
        if (currentDate < 21) {
          formik.values.zodiacV = "PISCES";
          // setValue("PISCES");
        } else {
          formik.values.zodiacV = "ARIES";
          // setValue("ARIES");
        }
      } else if (currentMonth == 4) {
        if (currentDate < 20) {
          formik.values.zodiacV = "ARIES";
          // setValue("ARIES");
        } else {
          formik.values.zodiacV = "TAURUS";
          // setValue("TAURUS");
        }
      } else if (currentMonth == 5) {
        if (currentDate < 21) {
          formik.values.zodiacV = "TAURUS";
          // setValue("TAURUS");
        } else {
          formik.values.zodiacV = "GEMINI";
          // setValue("GEMINI");
        }
      } else if (currentMonth == 6) {
        if (currentDate < 21) {
          formik.values.zodiacV = "GEMINI";
          // setValue("GEMINI");
        } else {
          formik.values.zodiacV = "CANCER";

          // setValue("CANCER");
        }
      } else if (currentMonth == 7) {
        if (currentDate < 23) {
          formik.values.zodiacV = "CANCER";
          // setValue("CANCER");
        } else {
          formik.values.zodiacV = "LEO";
          // setValue("LEO");
        }
      } else if (currentMonth == 8) {
        if (currentDate < 23) {
          formik.values.zodiacV = "LEO";
          // setValue("LEO");
        } else {
          formik.values.zodiacV = "VIRGO";
          // setValue("VIRGO");
        }
      } else if (currentMonth == 9) {
        if (currentDate < 23) {
          formik.values.zodiacV = "VIRGO";
          // setValue("VIRGO");
        } else {
          formik.values.zodiacV = "LIBRA";
          // setValue("LIBRA");
        }
      } else if (currentMonth == 10) {
        if (currentDate < 23) {
          formik.values.zodiacV = "LIBRA";
          // setValue("LIBRA");
        } else {
          formik.values.zodiacV = "SCORPIO";
          // setValue("SCORPIO");
        }
      } else if (currentMonth == 11) {
        if (currentDate < 22) {
          formik.values.zodiacV = "SCORPIO";
          // setValue("SCORPIO");
        } else {
          formik.values.zodiacV = "SAGITTARIUS";
          // setValue("SAGITTARIUS");
        }
      } else if (currentMonth == 12) {
        if (currentDate < 22) {
          formik.values.zodiacV = "SAGITTARIUS";
          // setValue("SAGITTARIUS");
        } else {
          formik.values.zodiacV = "CAPRICORN";
          // setValue("CAPRICORN");
        }
      }
      if (!defaultZodiac) {
        setDefaultZodiac(formik.values.zodiacV);
      }
    }
  }, [dateZ]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",

      date: new Date(),
      zodiacV: null,
      // accept: true,
    },
    validate: (data) => {
      let errors = {};

      if (!data.name) {
        errors.name = "Name is required.";
      }

      if (!data.email) {
        errors.email = "Email is required.";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)
      ) {
        errors.email = "Invalid email address. E.g. example@email.com";
      }

      return errors;
    },
    onSubmit: (data) => {
      handlePredictions();
    },
  });
  const handlePredictions = (e) => {
    if (defaultZodiac == formik.values.zodiacV) {
      document.getElementById("main-body").style.backgroundColor = "#f58231";
    } else {
      document.getElementById("main-body").style.backgroundColor = "#1976D2";
    }

    let dateU = new Date().toISOString().split("T");
    dateU = dateU[0];

    $.post(
      "https://divineapi.com/api/1.0/get_daily_horoscope.php",
      {
        date: dateU,
        api_key: "2421fcb1263b9530df88f7f002e78ea5",
        sign: formik.values.zodiacV,
        timezone: 5.5,
      },
      function (val) {
        setFinalResult(JSON.parse(val));
      }
    ).fail(function (xhr) {});
  };

  const isFormFieldValid = (name) =>
    !!(formik.touched[name] && formik.errors[name]);
  const getFormErrorMessage = (name) => {
    return (
      isFormFieldValid(name) && (
        <small className="p-error">{formik.errors[name]}</small>
      )
    );
  };

  const dialogFooter = (
    <div className="flex justify-content-center">
      <Button
        label="OK"
        className="p-button-text"
        autoFocus
        onClick={() => setShowMessage(false)}
      />
    </div>
  );

  return (
    <div id="main-body" className="main-body">
      <div className="heading-parent">
        <Card
          className="heading"
          title="Know Your Horoscope"
          style={{ width: "25rem", marginBottom: "2em" }}
        ></Card>
      </div>
      <div className="main-parent">
        <div className="form-demo main">
          <div className="flex justify-content-center">
            <div className="card ">
              <div className="heading-details">
                {/* <h5 className="text-center"> */}
                <span>Enter the fields to know your horoscope </span>&nbsp;
                <span className="top-right">
                  {/* <div className="field form-elements "> */}
                  <Button
                    onClick={() => {
                      window.location.reload();
                    }}
                    type="button"
                    className=" mt-2 "
                  >
                    <i className="pi pi-undo"></i>
                  </Button>
                  {/* </div> */}
                </span>
              </div>
              {/* </h5> */}

              <form onSubmit={formik.handleSubmit} className="p-fluid">
                <div className="field form-elements">
                  <span className="p-float-label">
                    <InputText
                      id="name"
                      name="name"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      autoFocus
                      className={classNames({
                        "p-invalid": isFormFieldValid("name"),
                      })}
                    />
                    <label
                      htmlFor="name"
                      className={classNames({
                        "p-error": isFormFieldValid("name"),
                      })}
                    >
                      Name*
                    </label>
                  </span>
                  {getFormErrorMessage("name")}
                </div>
                <div className="field form-elements">
                  <span className="p-float-label p-input-icon-right">
                    <i className="pi pi-envelope" />
                    <InputText
                      id="email"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      className={classNames({
                        "p-invalid": isFormFieldValid("email"),
                      })}
                    />
                    <label
                      htmlFor="email"
                      className={classNames({
                        "p-error": isFormFieldValid("email"),
                      })}
                    >
                      Email*
                    </label>
                  </span>
                  {getFormErrorMessage("email")}
                </div>

                <div className="field form-elements">
                  <span className="p-float-label">
                    <Calendar
                      id="date"
                      name="date"
                      value={dateZ}
                      onChange={(e) => {
                        setDateZ(e.target.value);

                        // console.log(e.target.value, "datechange");
                      }}
                      dateFormat="dd/mm/yy"
                      mask="99/99/9999"
                      showIcon
                    />
                    <label htmlFor="date">Birthday</label>
                  </span>
                </div>
                <div className="field form-elements">
                  <span className="p-float-label">
                    <Dropdown
                      disabled
                      id="country"
                      name="zodiacV"
                      value={formik.values.zodiacV}
                      onChange={formik.handleChange}
                      options={zodiac}
                      // optionLabel="name"
                    />
                    <label htmlFor="country">Zodiac</label>
                  </span>
                </div>

                <div className="field form-elements">
                  <Button type="submit" label="Submit" className=" mt-2 " />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="main">
          <ScrollPanel
            style={{ width: "100%", height: "50vh" }}
            className="custom"
          >
            <br />
            {finalResult && (
              <div className="result">
                <div>{"Hey! " + formik.values.name + ""}</div>
                <br />
                <div>{"Your sign: " + formik.values.zodiacV}</div>
                <br />
                <div>
                  {"Personal:" + finalResult.data.prediction.personal + ""}
                </div>
                <br />
                <div>
                  {"Health: " + finalResult.data.prediction.health + ""}
                </div>
                <br />
                <div>
                  {"Profession: " + finalResult.data.prediction.profession + ""}
                </div>
                <br />
                <div>
                  {"Travel: " + finalResult.data.prediction.travel + ""}
                </div>{" "}
                <br />
                <div>{finalResult.data.prediction.luck[0] + ""}</div>
                <div>{finalResult.data.prediction.luck[1]}</div>
                <div>{finalResult.data.prediction.luck[2]}</div>
                <div>{finalResult.data.prediction.luck[3]}</div>
                <div>{finalResult.data.prediction.luck[4]}</div>
                <div>{finalResult.data.prediction.luck[5]}</div>
              </div>
            )}
          </ScrollPanel>
        </div>
      </div>
    </div>
  );
}

export default App;
