import React, { useState, ChangeEvent } from 'react';
import './index.scss';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';

export default function SearchBar() {

  const [searchValue, setSearchValue] = useState<string>('');
  
  const changeSearchValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setSearchValue(event.target.value);
  }

  return (
    <Paper component="form" className="search-wrapper">
      <IconButton type="submit" className="search-icon" aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        className="search-input"
        onChange={ changeSearchValue }
        value={ searchValue }
        placeholder="探索新世界..."
        inputProps={{ 'aria-label': '探索新世界' }}
      />
      <IconButton className="search-icon" aria-label="close"
        onClick={ () => setSearchValue('') }
        style={{ display: searchValue ? '' : 'none' }}>
        <Close />
      </IconButton>
      <Divider className="search-divider" orientation="vertical" />
      <IconButton color="primary" className="search-icon" aria-label="directions">
        <DirectionsIcon />
      </IconButton>
    </Paper>
  );
}
