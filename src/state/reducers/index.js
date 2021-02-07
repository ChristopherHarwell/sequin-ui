// import { initialState } from "./initialState";

import {
  DELETE_CARD_START,
  DELETE_CARD_SUCCESS,
  DELETE_CARD_FAILURE,
  GET_CARD_START,
  GET_CARD_SUCCESS,
  GET_CARD_FAILURE,
  PUT_CARD_START,
  PUT_CARD_SUCCESS,
  PUT_CARD_FAILURE,
} from "../actions";

const initialState = {
    cards: [{
      id: '',
      balance: '',
      total_usage: '',
      card_limit: ''
    }],
    error: "",
    isFetching: false,
  };


export function cardsReducer(state = initialState, action) {
  switch (action.type) {
    case DELETE_CARD_START:
      return {
        ...state,
        isFetching: true,
      };
    case DELETE_CARD_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        cards: action.payload,
      };
    case DELETE_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    case GET_CARD_START:
      return {
        ...state,
        isFetching: true,
      };
    case GET_CARD_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        cards: action.payload,
      };
    case GET_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };

    case PUT_CARD_START:
      return {
        ...state,
        isFetching: true,
      };
    case PUT_CARD_SUCCESS:
      return {
        ...state,
        error: "",
        isFetching: false,
        cards: action.payload,
      };
    case PUT_CARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      };
      default:
        return state;
  }
}