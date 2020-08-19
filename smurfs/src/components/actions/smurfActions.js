import axios from "axios";
export const FETCH_SMURFS = "FETCH_SMURFS"
export const FETCH_SMURFS_SUCCESS = 'FETCH_SMURFS_SUCCESS'
export const CREATE_SMURF = 'CREATE_SMURF'

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios.get(`http://localhost:3333/smurfs`)
  .then((res) => {
    console.log('data', res.data);
    dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
  })
   .catch((err) => console.log(err))
};

export const createSmurf = (newSmurf) => dispatch => {
  dispatch({ type: CREATE_SMURF, payload: newSmurf})
}

const thunk = store => next => action => {
    if (typeof action === 'object') {
        next(action)
    } else if (typeof action === 'function') {
        action(store.dispatch)
    }
}