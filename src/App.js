import React, { useEffect, useState } from "react";
import "../src/styles/Styles.scss";
import LoaderMain from "./pages/loader/Loader";
import PageLayout from "./layout/PageLayout";
import { useTheme } from "./context/theme/ThemeSection"
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainHome from "./pages/home/MainHome";
import MainContact from "./pages/contact/MainContact";
import MainBlog from "./pages/blogs/MainBlog";
import MainServices from "./pages/service/MainServices";
import MainProjects from "./pages/projects/MainProjects";
import ProfileInformation from "./pages/profile/ProfileInformation";

function App() {
  const { darkMode } = useTheme();
  const [isLoader, setIsLoader] = useState(true);

  React.useEffect(() => {
    if (darkMode) {
      document.getElementById("maindisplay").classList.add('dark-mode');
    } else {
      document.getElementById("maindisplay").classList.remove('dark-mode');
    }
  }, [darkMode]);

  useEffect(() => {
    const textTimer = setTimeout(() => {
      setIsLoader(false)
    }, 7000);
    return () => {
      clearTimeout(textTimer);
    };
}, []);

  return (
    <Router>
      <div className="container">
        {isLoader?<LoaderMain /> :
        <>
          <PageLayout />
          <Routes>
            <Route path="/" exact component={MainHome} />
            <Route path="/blogs" component={MainBlog} />
            <Route path="/services" component={MainServices} />
            <Route path="/projects" component={MainProjects} />
            <Route path="/contacts" component={MainContact} />
            <Route path="/about" component={ProfileInformation} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </>}
      </div>
    </Router>
  );
}

export default App;
