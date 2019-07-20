import axios from "axios";
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
// FOR FETCHING THE DATA
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START"
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS"
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE"
// FOR ADDING TO THE DATA
export const ADD_SMURF_START = "ADD_SMURF_START"
export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS"
export const ADD_SMURF_FAILURE = "ADD_SMURF_FAILURE"

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
//action creator 1
export const getSmurfs = smurf => dispatch => {
  dispatch({ type: FETCHING_SMURFS_START })
  axios
  .get("http://localhost:3333/smurfs")
  .then(res => {
    dispatch({
      type: FETCHING_SMURFS_SUCCESS,
      payload: res.data
    })
  })
  .catch(err => {
    dispatch({
      type: FETCHING_SMURFS_FAILURE,
      payload: err.data
    })
  })
}

//action creator 2
export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF_START })
  axios
  .post("http://localhost:3333/smurfs", smurf)
  .then(res => {
    dispatch(
      getSmurfs()
    )
  })
  .catch(err => {
    dispatch({ type: ADD_SMURF_FAILURE, payload: err.data })
  })
}