import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./components/GlobalComponents/Router/AppRouter";
import './App.scss';
import { images } from "./utils/imagesToLoad";
import $ from 'jquery';
import { HelmetProvider } from "react-helmet-async";
import Loader from "./components/GlobalComponents/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const loadImage = (image) => {
    return new Promise((resolve, reject) => {
      const newImage = new Image();
      newImage.src = image;
      newImage.onload = () => {
        resolve(image);
      }
      newImage.onerror = (err) => reject(err);
    });
  };
  useEffect(() => {
    if (isLoading) {
      $('body').addClass("ovf-hidden");
    }
    Promise
      .all(images.map((image) => loadImage(image)))
      .then(() => setIsLoading(false))
      .catch((err) => console.log("Failed to load images", err));
  }, []);
  useEffect(() => {
    if (!isLoading) {
      $('body').removeClass("ovf-hidden");
    }
  }, [isLoading]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Loader isLoading={isLoading} />
      <HelmetProvider>
        {!isLoading && <div>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </div>}
      </HelmetProvider>
    </>
  );
}

export default App;
