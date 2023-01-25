import React from 'react';
import classes from './SearchBar.module.scss';

export const SearchBar = ({ searchText, setSearchText }) => 
  <input
    className={classes.input}
    value={searchText}
    onChange={(e) => setSearchText(e.target.value)}
  />;
