import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRanking, PageSignIn } from "../Pages";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<PageRanking />} />
          <Route path="/sign-in" element={<PageSignIn />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
