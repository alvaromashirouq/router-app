import { MainNavigation } from './MainNavigation';
import classes from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </>
  );
};
