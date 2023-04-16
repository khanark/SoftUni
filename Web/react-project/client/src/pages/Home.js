import './home.scss';

import { Header } from '../components/Header/Header';
import { HomeBody } from './components/Body';

export const Home = () => {
  return (
    <div className="container fade-in">
      <Header />
      <HomeBody />
    </div>
  );
};
