import { React } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PageRanking, PageSignIn, PageSignUp, PageWelcome } from "../Pages";
import PrivatePage from "../Pages/PrivatePage";
import GlobalStyle from "./GlobalStyle";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<PageRanking />} />
          <Route path="/sign-in" element={<PageSignIn />} />
          <Route path="/sign-up" element={<PageSignUp />} />
          <Route
            path="/welcome"
            element={
              <PrivatePage>
                <PageWelcome />
              </PrivatePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
