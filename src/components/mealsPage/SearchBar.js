import React from 'react';
import classes from './SearchBar.module.scss';

export const SearchBar = ({ searchText, setSearchText }) => (
  <input
    className={classes.input}
    onChange={(e) => setSearchText(e.target.value)}
    value={searchText}
  />
);
