import { logo } from '../../images';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import classes from './Navbar.module.scss'

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link href="/" className={classes.logo}>
          <Image src={logo} alt="GoodGrub" />
      </Link>

      <ul className={classes.navLinks}>
        <li>
           <Link href="/meals">Meals</Link>
        </li>

         <li>
           <Link href="/savedMeals">Saved List</Link>
         </li>
      </ul>
    </nav>
  );
};
