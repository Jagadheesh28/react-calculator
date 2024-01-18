"use client";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export default function Home() {
  const [result, setResult] = useState("");
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value: any) => {
    if (value === "=") {
      try {
        setResult(eval(expression).toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "AC") {
      setResult("");
      setExpression("");
    } else {
      setExpression((prevExpression) => prevExpression + value);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
  }, []);
  const handleKeyPress = (e: any) => {
    console.log(e);
    const key = e.key;

    if (/^[0-9+\-*/.=]$/.test(key)) {
      e.preventDefault();
      handleButtonClick(key);
    } else if (key === "Enter") {
      e.preventDefault();
      handleButtonClick("=");
    } else if (key === "Backspace") {
      setExpression((prevExpression) => prevExpression.slice(0, -1));
    }
  };

  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "+",
    "0",
    ".",
    "%",
    "AC",
    "=",
  ];
  return (
    <main className="d-flex min-vh-100 flex-column align-items-center p-24 bg-primary">
      <h1 className="fs-1 font-bold ">Calculator</h1>
      <div className="bg-white p-6 w-50">
        <section>
          <div className="row">
            <div className="col-md-8">
              <input
                type="text"
                className="w-100  fs-3  border-bottom border-2 border-gray-400 text-dark text-center"
                value={expression}
                onKeyDown={handleKeyPress}
              />
            </div>

            <div className="col-md-4">
              <input
                type="text"
                className="w-100 fs-3 fw-bold border-bottom border-2 mb-4 text-danger text-center"
                value={result}
                readOnly
              />
            </div>
          </div>
        </section>
        <div className="grid grid-cols-4 gap-2 ">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="btn btn-outline-secondary btn-lg rounded-lg bg-light text-dark"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
