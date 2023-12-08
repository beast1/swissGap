import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import Header from "../../components/GlobalComponents/Header/Header";
import Footer from "../../components/GlobalComponents/Footer/Footer";
import Banner from '../../components/AccountTypesPage/Banner/Banner';
import Table from '../../components/AccountTypesPage/Features/Table';
import Choose from '../../components/AccountTypesPage/Choose/Choose';

const AccountTypesPage = () => {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Asset Classes</title>
                <meta name="title" content="Trade Verse Asset Classes - Discover a Wide Selection of Cryptocurrencies, Commodities, Stocks, and Oil" />
                <meta property="og:title" content="Trade Verse Asset Classes - Discover a Wide Selection of Cryptocurrencies, Commodities, Stocks, and Oil" />
                <meta property="twitter:title" content="Trade Verse Asset Classes - Discover a Wide Selection of Cryptocurrencies, Commodities, Stocks, and Oil" />

                <meta name="description" content="Trade Verse offers a diverse range of asset classes, including cryptocurrencies, commodities, stocks, and oil. Diversify your portfolio and take advantage of trading opportunities in a variety of financial markets. Explore our diverse asset portfolio and begin trading with Trade Verse today!" />
                <meta property="og:description" content="Trade Verse offers a diverse range of asset classes, including cryptocurrencies, commodities, stocks, and oil. Diversify your portfolio and take advantage of trading opportunities in a variety of financial markets. Explore our diverse asset portfolio and begin trading with Trade Verse today!" />
                <meta property="twitter:description" content="Trade Verse offers a diverse range of asset classes, including cryptocurrencies, commodities, stocks, and oil. Diversify your portfolio and take advantage of trading opportunities in a variety of financial markets. Explore our diverse asset portfolio and begin trading with Trade Verse today!" />

                <meta property="og:image" content="preview.png" />
                <meta property="og:type" content="website" />
                <meta property="twitter:image" content="preview.png" />
                <meta property="twitter:card" content="summary_large_image" />
            </Helmet>
            <div className="ovf-hidden">
                <Header />
                <Banner />
                <Table />
                <Choose />
                <Footer />
            </div>
        </HelmetProvider>
    )
}

export default AccountTypesPage