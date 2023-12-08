import React from 'react';

import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";
import Why from "../../components/MarketsPage/Why/Why";
import Banner from "../../components/MarketsPage/Banner/Banner";
import MarketSlider from "../../components/MarketsPage/MarketSlider/MarketSlider";
import ExtraSlider from "../../components/MarketsPage/ExtraSlider/ExtraSlider";

const MarketsPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Trading Strategies</title>
                <meta name="title" content="Trading Strategies That Work. Trade Verse - Strategies Your Trading Skills and Make Informed Decisions" />
                <meta property="og:title" content="Trading Strategies That Work. Trade Verse - Strategies Your Trading Skills and Make Informed Decisions" />
                <meta property="twitter:title" content="Trading Strategies That Work. Trade Verse - Strategies Your Trading Skills and Make Informed Decisions" />

                <meta name="description" content="On Trade Verse, you can learn effective trading strategies to improve your trading skills and make more informed decisions. Discover a variety of tried-and-true trading strategies, risk management techniques, and trading hints to help you improve your trading performance. Explore our Trading Strategies page and use Trade Verse to take your trading to the next level." />
                <meta property="og:description" content="On Trade Verse, you can learn effective trading strategies to improve your trading skills and make more informed decisions. Discover a variety of tried-and-true trading strategies, risk management techniques, and trading hints to help you improve your trading performance. Explore our Trading Strategies page and use Trade Verse to take your trading to the next level." />
                <meta property="twitter:description" content="On Trade Verse, you can learn effective trading strategies to improve your trading skills and make more informed decisions. Discover a variety of tried-and-true trading strategies, risk management techniques, and trading hints to help you improve your trading performance. Explore our Trading Strategies page and use Trade Verse to take your trading to the next level." />

                <meta property="og:image" content="preview.png" />
                <meta property="og:type" content="website" />
                <meta property="twitter:image" content="preview.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className={`ovf-hidden`}>
                <Header />
                <Banner />
                <MarketSlider />
                <ExtraSlider />
                <Why />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default MarketsPage;