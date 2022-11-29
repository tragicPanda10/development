import data from './fish.json'
import FishCard from './FishCard';
import { Grid } from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Inventory from './Inventory.jsx';

export default function FilteredList(props) {
    const [cart, setCart] = useState({});

    function MyButton(props) {
      let isActive = true;

      function handleClick(bool) {

        if(bool === false) {
          isActive = false;
          addCart(props.fish);

        }
        else {
          isActive = true;
          removeCart(props.fish);
        }
      }

      return(
        <div>
          <Button
          color='primary'
          variant="contained"
          size="small"
          onClick={() => {handleClick(false)}}
          >
            Add to Inventory
          </Button>
          <Button
          color='warning'
          variant='contained'
          size='small'
          onClick={() => {handleClick(true)}}>
            Return to Sea
          </Button>
        </div>
        
      )

    }
    var fishArray = [];
    let filters = props.filtering;

    //Fills the fishArray with all fish values in order to access elements from the JSON file.
    function runThrough() {
      for(let i in data) {
        fishArray.push({
          name: data[i]["file-name"],
          rarity: data[i]["availability"]["rarity"],
          location: data[i]["availability"]["location"],
          price: data[i]["price"],
        })
      }
    }
  
    runThrough();

    const addCart = (item) => {
      var newCart = {...cart};
      newCart[item] = (newCart[item] || 0) + 1;
      setCart(newCart);
    }

    const removeCart = (item) => {
      var newCart = {...cart};
      delete newCart[item];
      setCart(newCart);
    }
  
    function sumCartItems() {
      var total = 0;
      let items = Object.keys(cart);
      if(items.length !==0) {
        items.map((fish) => {
          total += data[fish]['price'];
        })
      }

      return total;
    }



    //Checks the items in the fish array and only pushes the ones with the filters to the filteredArray
    function selectItems() {
      var bestArray=fishArray;
      
      if(filters[2] === "Starred") {
        let cartArray = Object.keys(cart);
        bestArray = bestArray.filter((fish) => {
          return(cartArray.includes(fish.name));
        })
      } 

      else {
        if(filters[0] !== "All") {
          bestArray = fishArray.filter((fish) => {
            return(fish.rarity === filters[0])
          })
        }

        if(filters[1] !== "All") {
          bestArray = bestArray.filter((fish) => {
            return(fish.location.includes(filters[1]));
          })
        }
    }

      return bestArray;
    }

    var filteredArray = selectItems();

    //comparator function for sorting by rarity
    function compareRarity(a,b) {
        const rare1 = a.rarity;
        var a1 = 0;
        const rare2 = b.rarity;
        var b1 = 0;

        rare1==="Ultra-rare"
          ? a1=4
          : rare1==="Rare"
            ? a1=3
            : rare1 ==="Uncommon"
              ? a1=2
              : a1=1
        
        rare2==="Ultra-rare"
        ? b1=4
        : rare2==="Rare"
          ? b1=3
          : rare2 ==="Uncommon"
            ? b1=2
            : b1=1

        return(a1<b1
          ? -1
          : a1>b1
          ? 1
          : 0);
      }

    function sortFish() {
      props.sorting === "Name"
      ? filteredArray.sort(function(a,b) {
        return(
          a.name.localeCompare(b.name)
        )
      })
      : props.sorting === "Price"
      ? filteredArray.sort(function(a,b) {
        return(
          a.price - b.price
        )
        })
      :filteredArray.sort(compareRarity)
    }

    sortFish();

    return(
      <div>
        <Grid container rowSpacing={2} columnSpacing={2}>
        {filteredArray.map((fish, index)=> (
          <Grid item xs={4} key={index}>
              {FishCard(data[fish.name])}
              <div>
                <MyButton fish={fish.name}></MyButton>
              </div>

          </Grid>)
          )}
        </Grid>
        <Inventory total={sumCartItems()} count={Object.keys(cart).length}/>
      </div>
    )
}