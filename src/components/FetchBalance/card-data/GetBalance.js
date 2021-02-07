import React, { useEffect, useState } from 'react';
import { getCardBalance } from "../../../state/actions/index.js";
import Axios from 'axios';

// import { getCardBalance } from "../../../state/actions/index.js";

import { Button, Card, CardContent, Typography } from '@material-ui/core';
import { connect, useSelector } from 'react-redux';

export const GetBalance = (props) => {

  const state = useSelector(state => state.cards)
  // const balance = useSelector(state => {var newBal = state.cardsReducer.cards})

  console.log("state", state)
  return (
    <form>
      <Typography variant="h2">Sequin Take Home</Typography>

      {state.map((cards) => {
        <div>
          <Card style={{ margin: "0 4vw 3vh 4vw", backgroundColor: "#40E0D0", color: "#FFFFF0" }} key={""} variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Balance: {cards.id}
              </Typography>
              <div className="info_block">
                <Typography variant="h4">ID: {cards.id}</Typography>
              </div>
            </CardContent>
          </Card>
        </div>
      })}
    </form>
  )
}
