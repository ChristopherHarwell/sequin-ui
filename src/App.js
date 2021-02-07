import './App.css';
import { getCardBalance, postCardLimit } from "./state/actions/index.js";
import { GetBalance } from './components/FetchBalance/card-data/GetBalance';
import { connect, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import { SetCardLimit } from './components/setCardLimit/setLimit';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';

const initialState = [
  { id: uuid(), limit: 1000, balance: 2000, total_usage: 400 },
  { id: uuid(), limit: 1000, balance: 2000, total_usage: 400 },
]

function App(props) {
  const state = useSelector(state => state.cards)

  return (
    <div className="App">

      <GetBalance />
      <Button variant="outlined"
        style={{
          borderColor: "#FFFFF0", color: "#FFFFF0",
          backgroundColor: "#40E0D0"
        }}
        onClick={() => state.getCardBalance(state.id)}>Fetch the Balance</Button>


      <SetCardLimit />
            <Button variant="outlined"
        style={{
          borderColor: "#FFFFF0", color: "#FFFFF0",
          backgroundColor: "#40E0D0"
        }}
        onClick={() => console.log("id", state)}>Fetch The Card Limit</Button>
      </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state)
  // console.log(state.cardsReducer.cards.map((item) => item))
  // console.log("State.cards", state)
  // console.log("State:", state.cardsReducer.cards.map((item) => item.balance))
  return {
    storeProps: state.cards
  }
};
export default connect(mapStateToProps, { getCardBalance })(App);
