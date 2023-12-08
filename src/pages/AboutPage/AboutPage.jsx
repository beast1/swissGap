import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";
import scss from "./AboutPage.module.scss";
import Banner from "../../components/AboutPage/Banner/Banner";
import Vision from "../../components/AboutPage/Vision/Vision";



const AboutPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>News and Updates</title>
                <meta name="title" content="Trade Verse News and Updates – Stay Up to Date on the Most Recent Market Updates and Platform Developments" />
                <meta property="og:title" content="Trade Verse News and Updates – Stay Up to Date on the Most Recent Market Updates and Platform Developments" />
                <meta property="twitter:title" content="Trade Verse News and Updates – Stay Up to Date on the Most Recent Market Updates and Platform Developments" />

                <meta name="description" content="On Trade Verse, you can stay up to date on the latest market insights, trading updates, and platform developments. Find expert analysis, industry news, and useful information to help you improve your trading strategies. Keep up to date with Trade Verse's News and Updates page." />
                <meta property="og:description" content="On Trade Verse, you can stay up to date on the latest market insights, trading updates, and platform developments. Find expert analysis, industry news, and useful information to help you improve your trading strategies. Keep up to date with Trade Verse's News and Updates page." />
                <meta property="twitter:description" content="On Trade Verse, you can stay up to date on the latest market insights, trading updates, and platform developments. Find expert analysis, industry news, and useful information to help you improve your trading strategies. Keep up to date with Trade Verse's News and Updates page." />

                <meta property="og:image" content="preview.png" />
                <meta property="og:type" content="website" />
                <meta property="twitter:image" content="preview.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className={`ovf-hidden`}>
                <Header />
                <Banner />
                <Vision />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default AboutPage