import React from 'react'

import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";
import Faq from "../../components/FaqPage/Faq/Faq";

import classes from "./FaqPage.module.scss";

const FaqPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>About us</title>
                <meta name="title" content="Trade Verse - Providing Traders with a Trustworthy and User-Friendly Trading Platform" />
                <meta property="og:title" content="Trade Verse - Providing Traders with a Trustworthy and User-Friendly Trading Platform" />
                <meta property="twitter:title" content="Trade Verse - Providing Traders with a Trustworthy and User-Friendly Trading Platform" />

                <meta name="description" content="Learn about Trade Verse, a leading trading platform that empowers traders of all levels of experience. Learn about our dedication to providing a dependable and user-friendly trading environment. Investigate our platform features, asset selection, customer service, and commitment to continuous innovation." />
                <meta property="og:description" content="Learn about Trade Verse, a leading trading platform that empowers traders of all levels of experience. Learn about our dedication to providing a dependable and user-friendly trading environment. Investigate our platform features, asset selection, customer service, and commitment to continuous innovation." />
                <meta property="twitter:description" content="Learn about Trade Verse, a leading trading platform that empowers traders of all levels of experience. Learn about our dedication to providing a dependable and user-friendly trading environment. Investigate our platform features, asset selection, customer service, and commitment to continuous innovation." />

                <meta property="og:image" content="preview.png" />
                <meta property="og:type" content="website" />
                <meta property="twitter:image" content="preview.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className={`ovf-hidden`}>
                <Header />
                <Faq />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default FaqPage