import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter> 
    <Routes>
      <Route path="/" element = {<UserLayout />}>
        <Route index element = {<Home />} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}