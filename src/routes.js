import Home from './components/Home'

export const routes = [
    { path: '/', component: Home },
    { path: '/portfolio', component: () => import('./components/portfolio/Portfolio') },
    { path: '/stocks', component: () => import('./components/stocks/Stocks') }
];
