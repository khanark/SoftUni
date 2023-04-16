import './header.scss';

import { Navigation } from '../Navigation/Navigatin';

export const Header = () => {
  return (
    <header className="main-header slide-in-blurred-top">
      <h1>Logo</h1>
      <Navigation />
    </header>
  );
};
