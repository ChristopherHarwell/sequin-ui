import Axios from "axios";
import { useParams } from "react-router";

export const GET_CARD_START = "FETCH_START";
export const GET_CARD_SUCCESS = "FETCH_SUCCESS";
export const GET_CARD_FAILURE = "FETCH_FAILURE";

export const POST_USER_START = "POST_START";
export const POST_USER_SUCCESS = "POST_SUCCESS";
export const POST_USER_FAILURE = "POST_FAILURE";

export const POST_CHARGE_START = "POST_START";
export const POST_CHARGE_SUCCESS = "POST_SUCCESS";
export const POST_CHARGE_FAILURE = "POST_FAILURE";

export const POST_CARD_START = "POST_START";
export const POST_CARD_SUCCESS = "POST_SUCCESS";
export const POST_CARD_FAILURE = "POST_FAILURE";

export const PUT_CARD_START = "PUT_START";
export const PUT_CARD_SUCCESS = "PUT_SUCCESS";
export const PUT_CARD_FAILURE = "PUT_FAILURE";

export const DELETE_CARD_START = "DELETE_START";
export const DELETE_CARD_SUCCESS = "DELETE_SUCCESS";
export const DELETE_CARD_FAILURE = "DELETE_FAILURE";

export const getCardBalance = (id) => (dispatch) => {

    const { id } = useParams();

    dispatch({ type: GET_CARD_START });
    Axios
        .get(`http://localhost:8000/cards/available_balance/${id}`)
        .then((res) => {
            console.log("Res.data: ", res.data);
            dispatch({ type: GET_CARD_SUCCESS, payload: res.data });
        })
        .catch((err) => {
            dispatch({ type: GET_CARD_FAILURE, payload: err.response });
        });
};

export const postCharge = (newData) => (dispatch) => {

    const { id } = useParams();

    dispatch({ type: POST_CHARGE_START });
    Axios
        .post(`http://localhost:8000/cards/charge/create/${id}`, newData)
        .then((res) => {
            dispatch({ type: POST_CHARGE_SUCCESS, payload: res.data });
        })
        .catch((error) => {
            dispatch({ type: POST_CHARGE_FAILURE, payload: error.response });
        });
};


export const postCardLimit = (newData) => (dispatch) => {

    const { id } = useParams();

    dispatch({ type: POST_CARD_START });
    Axios
        .post(`http://localhost:8000/cards/create/${id}`, newData)
        .then((res) => {
            dispatch({ type: POST_CARD_SUCCESS, payload: res.data });
        })
        .catch((error) => {
            dispatch({ type: POST_CARD_FAILURE, payload: error.response });
        });
};

export const putCard = (id, newData) => (dispatch) => {
    dispatch({ type: PUT_CARD_START });
    Axios
        .put(`http://localhost:8000/cards/cards/${id}`, newData)
        .then((res) => {
            Axios
                .get("/cards")
                .then((res) =>
                    dispatch({
                        type: PUT_CARD_SUCCESS,
                        payload: res.data,
                    })
                );
        })
        .catch((error) => {
            dispatch({ type: PUT_CARD_FAILURE, payload: error.response });
        });
};

export const deleteCard = (id) => (dispatch) => {
    dispatch({ type: DELETE_CARD_START });
    Axios
        .delete(`http://localhost:8000/cards/cards/${id}`)
        .then((res) => {
            dispatch({ type: DELETE_CARD_SUCCESS, payload: res.data });
        })
        .catch((error) => {
            dispatch({ type: DELETE_CARD_FAILURE, payload: error.response });
        });
};