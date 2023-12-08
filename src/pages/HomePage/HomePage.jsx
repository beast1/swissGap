import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";
import Banner from "../../components/MainComponents/Banner/Banner";
import Features from "../../components/MainComponents/Features/Features";
import Accounts from "../../components/MainComponents/Accounts/Accounts";
import Advantages from "../../components/MainComponents/Advantages/Advantages";
import Numbers from "../../components/MainComponents/Numbers/Numbers";
import "./HomePage.module.scss";

const HomePage = () => {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Trade Verse</title>
        <meta name="title" content="Trade Verse is a dependable trading platform for cryptocurrency, commodities, stocks, and oil." />
        <meta property="og:title" content="Trade Verse is a dependable trading platform for cryptocurrency, commodities, stocks, and oil." />
        <meta property="twitter:title" content="Trade Verse is a dependable trading platform for cryptocurrency, commodities, stocks, and oil." />

        <meta name="description" content="Trade Verse is a cutting-edge trading platform that lets you trade cryptocurrencies, commodities, stocks, and oil. Discover an easy-to-use interface, a large asset selection, and dedicated support. Begin trading with Trade Verse right away!" />
        <meta property="og:description" content="Trade Verse is a cutting-edge trading platform that lets you trade cryptocurrencies, commodities, stocks, and oil. Discover an easy-to-use interface, a large asset selection, and dedicated support. Begin trading with Trade Verse right away!" />
        <meta property="twitter:description" content="Trade Verse is a cutting-edge trading platform that lets you trade cryptocurrencies, commodities, stocks, and oil. Discover an easy-to-use interface, a large asset selection, and dedicated support. Begin trading with Trade Verse right away!" />

        <meta property="og:image" content="preview.png" />
        <meta property="og:type" content="website" />
        <meta property="twitter:image" content="preview.png" />
        <meta property="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="ovf-hidden">
        <Header />
        <Banner />
        <Features />
        <Advantages />
        <Accounts />
        <Numbers/>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default HomePage;
