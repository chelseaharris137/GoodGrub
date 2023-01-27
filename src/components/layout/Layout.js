import { Footer } from './Footer';
import { Navbar } from './Navbar';
import classes from './Layout.module.scss';

export const Layout = ({ children }) => {
  return (
    <>
      <div className={classes.container}>
        <Navbar />

        {children}
      </div>

      <Footer />
    </>
  );
};
