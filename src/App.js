import './App.css';
import { Radio, Typography } from "@mui/material";
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import RadioGroup from '@mui/material/RadioGroup';
import FilteredList from './FilteredList';
import Button from '@mui/material/Button';

function App() {
  const [sortBy, setSortBy] = useState("Name");
  const [myFilter, addMyFilter] = useState(["All", "All", "Unstarred"]);

  function makeButtonPanel() {
    const drawerWidth=300;

    const isFilt = (index, filt) => {
      return(myFilter[index] === filt)
    }

    const isSortBy = (item) => {
        return(sortBy=== item)

    }

    const resetFilt = () => {
      let newFilter = [...myFilter];
      newFilter[0] = "All";
      newFilter[1] = "All";
      addMyFilter(newFilter);
    }

    const changeFilt = (index, filt) => {
      let newFilter = [...myFilter];
      newFilter[index] = filt;
      addMyFilter(newFilter);
    }

      return(
        <div>
          <CssBaseline />
          <Drawer
              sx={{
                  width: drawerWidth,
                  flexShrink: 0,
                  '& .MuiDrawer-paper': {
                      width: drawerWidth,
                      boxSizing: 'border-box',},}}
              variant="permanent"
              anchor="left">
          
              <FormGroup class="buttons">
                  <Typography>
                      Sort by
                  </Typography>
                  <RadioGroup value={sortBy}>
                      <FormControlLabel checked={isSortBy("Name")} value="Name" control={<Radio onChange={() => setSortBy('Name')}/>} label="Name"/>
                      <FormControlLabel checked={isSortBy("Price")} value="Price" control={<Radio onChange={() => setSortBy('Price')}/>} label="Price"/>
                      <FormControlLabel checked={isSortBy("Rarity")} value="Rarity" control={<Radio onChange={() => setSortBy('Rarity')}/>} label="Rarity"/>
                  </RadioGroup>
              </FormGroup>
              <Divider />

              <FormGroup class="buttons">
                  <Typography>
                      Rarity
                  </Typography>
                <RadioGroup value={myFilter}>
                  <FormControlLabel checked={isFilt(0, "Common")} value="Common" control={<Radio onChange={() => changeFilt(0, 'Common')}/>} label="Common"/>
                  <FormControlLabel checked={isFilt(0, "Uncommon")} value="Uncommon" control={<Radio onChange={() => changeFilt(0, 'Uncommon')}/>} label="Uncommon"/>
                  <FormControlLabel checked={isFilt(0, "Rare")} value="Rare" control={<Radio onChange={() => changeFilt(0, 'Rare')}/>} label="Rare"/>
                  <FormControlLabel checked={isFilt(0, "Ultra-rare")} value="Ultra-rare" control={<Radio onChange={() => changeFilt(0, 'Ultra-rare')}/>} label="Ultra-rare"/>
                </RadioGroup>
              </FormGroup>
              <Divider />
              <FormGroup class="buttons">
                  <Typography>
                      Location
                  </Typography>
                  <RadioGroup value={sortBy}>
                      <FormControlLabel checked={isFilt(1, "Pond")} value="Pond" control={<Radio onChange={() => changeFilt(1, 'Pond')}/>} label="Pond"/>
                      <FormControlLabel checked={isFilt(1, "Sea")} value="Sea" control={<Radio onChange={() => changeFilt(1, 'Sea')}/>} label="Sea"/>
                      <FormControlLabel checked={isFilt(1, "River")} value="River" control={<Radio onChange={() => changeFilt(1, 'River')}/>} label="River"/>
                      <FormControlLabel checked={isFilt(1, "Pier")} value="Pier" control={<Radio onChange={() => changeFilt(1, 'Pier')}/>} label="Pier"/>
                </RadioGroup>
              </FormGroup>
              
              <FormGroup style={{margin:'auto'}}>
                <FormControlLabel value="All" control={<Button size='small' color='warning' variant="contained" onClick={() => {resetFilt()}}>Reset Filters</Button>}/>
              </FormGroup>

              <FormGroup class="buttons">
                <FormControlLabel checked={isFilt(2, "Starred")} control={<Checkbox onChange={() => {if(isFilt(2,"Starred")) {changeFilt(2, "Unstarred")} else {changeFilt(2,"Starred")}}} />} label='Show Inventory'/>
              </FormGroup>
          </Drawer>
        </div>
      )
}

  return (
    <div className="App">
      <div>
      <Box sx={{display: 'flex'}}>
        {makeButtonPanel()}
        <Box
        component="main"
        sx={{ flexGrow: 1, p: 3}}>
          <header className="App-header">
            <Typography variant="h1">
                <strong>Animal Crossing Fish</strong>
            </Typography>
          </header>

          <div class="card-item">
            <FilteredList filtering={myFilter} sorting={sortBy}/>
          </div>
          <div style={{height: '12vh'}} />
        </Box>
      </Box>
        
      </div>
    </div>
  );
}

export default App;
