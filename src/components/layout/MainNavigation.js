import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>grat quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to={'/quotes'} activeClassName={classes.active}>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to={'/new-quote'} activeClassName={classes.active}>
              New quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
