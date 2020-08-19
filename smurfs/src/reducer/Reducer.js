import { CREATE_SMURF, FETCH_SMURFS, FETCH_SMURFS_SUCCESS } from "../components/actions/smurfActions";

export const initialState = {
    smurfs: []
}
// [
//     {
//         name: "Brainey",
//         age: 200,
//         height: "5cm",
//         id: 0
//       }
// ]

const Reducer = ( state = initialState, action) => {
    switch(action.type){
        case CREATE_SMURF:
            return {
                ...state, smurfs: [...state.smurfs, 
                    {
                        name: action.payload.name,
                        age: action.payload.age,
                        height: action.payload.height,
                        id: Date.now()
                    }
                ]                  
            }
            case FETCH_SMURFS_SUCCESS: 
        return {
            ...state, smurfs: [...state.smurfs, ...action.payload]
        }
        default:
            return state
    }
}

export default Reducer; 