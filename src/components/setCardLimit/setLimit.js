import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';

// import { PostCardLimit } from "../../state/actions/index.js"

export const SetCardLimit = (props) => {

    const state = useSelector(state => state.cards)

    console.log("state", state)
    return (
        <>
            <Typography variant="h2">POST /create/limit/</Typography>

            {state.map((cards) => (
                <div>

                    <Card style={{ margin: "0 4vw 3vh 4vw", backgroundColor: "#40E0D0", color: "#FFFFF0" }} key={cards.id} variant="outlined">
                        <CardContent>
                            <Typography variant="h5" gutterBottom>
                                Total Limit : {cards.card_limit}
                            </Typography>
                            <div className="info_block">
                                <Typography variant="h4">ID: {cards.id}</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            ))}
        </>
    )
}
