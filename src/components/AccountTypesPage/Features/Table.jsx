import React, {useEffect, useState} from "react";
import classes from './Table.module.scss';

import img1 from "../../../assets/img/AccountTypesPage/img-thumbnail-1.png";
import img2 from "../../../assets/img/AccountTypesPage/img-thumbnail-2.png";
import img3 from "../../../assets/img/AccountTypesPage/img-thumbnail-3.png";
import img4 from "../../../assets/img/AccountTypesPage/img-thumbnail-4.png";

const data = [
    {
        tab: "standard",
        minDeposit: "$250",
        spread: "From 0.3",
        commission: "No commission",
        maxLeverage: "1:Unlimited",
        instruments: "Forex, metals, cryptocurrencies, stocks, indices",
        maxPositions: "Unlimited",
        hedgedMargin: "0%",
        marginCall: "60%",
        stopOut: "0%",
        orderExecution: "Market",
        swapFree: "Unavailable"
    },
    {
        tab: "rawSpread",
        minDeposit: "$250",
        spread: "From 0.0",
        commission: "Up to $3.50 each side per lot",
        maxLeverage: "1:Unlimited",
        instruments: "Forex, metals, cryptoсurrencies, stocks, indices",
        maxPositions: "Unlimited",
        hedgedMargin: "0%",
        marginCall: "30%",
        stopOut: "0%",
        orderExecution: "Market",
        swapFree: "Unavailable"
    },
    {
        tab: "zero",
        minDeposit: "$1.000",
        spread: "From 0.0",
        commission: "From $0.2 each side per lot",
        maxLeverage: "1:Unlimited",
        instruments: "Forex, metals, cryptoсurrencies, stocks, indices",
        maxPositions: "Unlimited",
        hedgedMargin: "0%",
        marginCall: "30%",
        stopOut: "0%",
        orderExecution: "Market",
        swapFree: "Unavailable"
    },
    {
        tab: "pro",
        minDeposit: "$5.000",
        spread: "From 0.1",
        commission: "No commission",
        maxLeverage: "1:Unlimited",
        instruments: "Forex, metals, cryptoсurrencies, stocks, indices",
        maxPositions: "Unlimited",
        hedgedMargin: "0%",
        marginCall: "30%",
        stopOut: "0%",
        orderExecution: "Instant",
        swapFree: "Unavailable"
    }
];

const Table = ({ tabs }) => {
    const TABS_ID = {
        standard: 1,
        rawSpread: 2,
        zero: 3,
        pro: 4,
    }
    const [currentTab, setCurrentTab] = useState(1);

    const switchTab = (id) => {
        setCurrentTab(id)
    }
    return (
        <section className={`mt container ${classes.tableBlock}`}>
            <div className={classes.tableNav}>
                <button className={`${classes.tableNav__item} ${currentTab === TABS_ID.standard ? classes.tableNav__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.standard)}>
                    <span className={`${classes.tableNav__itemText}`}>Standard</span>
                </button>
                <button className={`${classes.tableNav__item} ${currentTab === TABS_ID.rawSpread ? classes.tableNav__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.rawSpread)}>
                    <span className={`${classes.tableNav__itemText}`}>Raw Spread</span>
                </button>
                <button className={`${classes.tableNav__item} ${currentTab === TABS_ID.zero ? classes.tableNav__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.zero)}>
                    <span className={`${classes.tableNav__itemText}`}>Zero</span>
                </button>
                <button className={`${classes.tableNav__item} ${currentTab === TABS_ID.pro ? classes.tableNav__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.pro)}>
                    <span className={`${classes.tableNav__itemText}`}>Pro</span>
                </button>
            </div>

            <section className={`decoAngleContainer ${classes.tableWrap}`}>
                <div className={`decoAngleTop`}></div>
                <div className={`decoAngleBottom`}></div>
                {data.map((item, index) => {
                    return (
                        <div className={`${classes.table} ${index + 1 === TABS_ID[Object.keys(TABS_ID)[currentTab - 1]] ? classes.tableShow : ""}`}>
                            <div className={`${classes.table__body}`}>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Minimum deposit</div>
                                    <div className={`${classes.table__td}`}>{item.minDeposit}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Spread</div>
                                    <div className={`${classes.table__td}`}>{item.spread}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Commission</div>
                                    <div className={`${classes.table__td}`}>{item.commission}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Maximum leverage</div>
                                    <div className={`${classes.table__td}`}>{item.maxLeverage}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Instruments</div>
                                    <div className={`${classes.table__td}`}>{item.instruments}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Maximum number of positions</div>
                                    <div className={`${classes.table__td}`}>{item.maxPositions}</div>
                                </div>
                            </div>

                            <div className={`${classes.table__body}`}>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Hedged margin</div>
                                    <div className={`${classes.table__td}`}>{item.hedgedMargin}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Margin call</div>
                                    <div className={`${classes.table__td}`}>{item.marginCall}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Stop out</div>
                                    <div className={`${classes.table__td}`}>{item.stopOut}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Order execution</div>
                                    <div className={`${classes.table__td}`}>{item.orderExecution}</div>
                                </div>
                                <div className={`${classes.table__tr}`}>
                                    <div className={`${classes.table__td}`}>Swap-free</div>
                                    <div className={`${classes.table__td}`}>{item.swapFree}</div>
                                </div>
                            </div>
                        </div>
                    )}
                )}
            </section>

            <div className={classes.thumbnails}>
                <button className={`${classes.thumbnails__item} ${currentTab === TABS_ID.standard ? classes.thumbnails__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.standard)}>
                    <img src={ img1 } className={`${classes.thumbnails__itemImg}`} alt="" />
                </button>
                <button className={`${classes.thumbnails__item} ${currentTab === TABS_ID.rawSpread ? classes.thumbnails__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.rawSpread)}>
                    <img src={ img2 } className={`${classes.thumbnails__itemImg}`} alt="" />
                </button>
                <button className={`${classes.thumbnails__item} ${currentTab === TABS_ID.zero ? classes.thumbnails__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.zero)}>
                    <img src={ img3 } className={`${classes.thumbnails__itemImg}`} alt="" />
                </button>
                <button className={`${classes.thumbnails__item} ${currentTab === TABS_ID.pro ? classes.thumbnails__itemCurrent : ""}`} onClick={() => switchTab(TABS_ID.pro)}>
                    <img src={ img4 } className={`${classes.thumbnails__itemImg}`} alt="" />
                </button>
            </div>
        </section>
    );
};

export default Table;
