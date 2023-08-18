import { useState } from "react";
import "./App.css";
import DataContext from "./context/dataContext";
import { Routes, Route } from "react-router-dom";
import HeaderMain from "./components/Header/HeaderMain";
import HomePage from "./pages/HomePage/HomePage";
import Choice from "./pages/Choice/Choice";
import Footer from "./components/Footer/footer";
function App() {
  const [data, setData] = useState({
    result: {},
    isSearched: false,
    isPrompt: false,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div>
      <HeaderMain />
      <DataContext.Provider value={{ data, setData, isLoading, setIsLoading }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate" element={<Choice />} />
        </Routes>
      </DataContext.Provider>

      <Footer />
    </div>
  );
}

export default App;
