import FaqPage from '../pages/FaqPage/FaqPage';
import AccountTypesPage from '../pages/AccountTypesPage/AccountTypesPage';
import AboutPage from '../pages/AboutPage/AboutPage';
import MarketsPage from '../pages/MarketsPage/MarketsPage';
import HomePage from '../pages/HomePage/HomePage';


export const routes = [
    { path: '/', element: HomePage },
    { path: '/trading-strategies', element: MarketsPage },
    { path: '/asset-classes', element: AccountTypesPage },
    { path: '/contact', element: FaqPage },
    { path: '/about', element: AboutPage },
    { path: '/:lang/', element: HomePage },
    { path: '/:lang/trading-strategies', element: MarketsPage },
    { path: '/:lang/asset-classes', element: AccountTypesPage },
    { path: '/:lang/contact', element: FaqPage },
    { path: '/:lang/about', element: AboutPage },
];

export const headerRoutes = [
    { id: 1, path: 'trading-strategies', text: 'Markets' },
    { id: 2, path: 'asset-classes', text: 'Account Types' },
    { id: 3, path: 'contact', text: 'FAQs' },
    { id: 4, path: 'about', text: 'About Us' },
];
