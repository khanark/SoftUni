import './navigation.scss';

import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className="main-navbar">
      <ul>
        <li>
          <Link to="/">Начало</Link>
        </li>
        <li>
          <a href="#">Каталог</a>
        </li>
        <li>
          <a href="#">Вход / Регистрация</a>
        </li>
      </ul>
    </nav>
  );
};
