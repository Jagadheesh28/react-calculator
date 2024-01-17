"use client";
import { useState } from "react";
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
      <div className=".bg-white p-6">
        <input
          type="text"
          className="w-100 mb-2 fs-4 border-bottom border-2 border-gray-400 text-dark"
          value={expression}
          readOnly
        />
        <input
          type="text"
          className="w-100 fs-3 fw-bold mb-4 text-danger"
          value={result}
          readOnly
        />
        <div className="grid grid-cols-4 gap-2">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => handleButtonClick(btn)}
              className="btn btn-outline-secondary btn-lg rounded-lg bg-danger"
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
