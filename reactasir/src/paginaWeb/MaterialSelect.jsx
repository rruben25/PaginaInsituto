import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import heroes from './heroes.json';

export default function BasicSelect() {
  const [selectedHero, setSelectedHero] = React.useState('');

  const handleChange = (event) => {
    setSelectedHero(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="hero-select-label">HEROES</InputLabel>
        <Select
          labelId="hero-select-label"
          id="hero-select"
          value={selectedHero}
          label="HEROES"
          onChange={handleChange}
        >
          {heroes.map((hero) => (
            <MenuItem key={hero.superhero} value={hero.superhero}>
              {hero.superhero}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
