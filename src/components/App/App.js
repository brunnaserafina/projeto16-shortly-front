import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageRanking from "../Pages/PageRaking";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<PageRanking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
