import React, { useEffect } from 'react'
import { fetchSmurfs } from './actions/smurfActions'
import {connect} from 'react-redux'
import { useReducer } from 'react'
import  Reducer, {initialState} from '../reducer/Reducer'

const Smurfs = props => {

    const [state, dispatch] = useReducer(Reducer, initialState);

useEffect(() => {
    (props.fetchSmurfs())
}, [])

    return (
        <section>
<h1> Smurfs! </h1>
<div>
    {props.smurfs.map((item) => 
    <h2>New Smurf's name is {item.name}, it is {item.age} years old and is {item.height} meters Tall</h2>
    )}
    
    </div>
        </section>
    )
   
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
//     {
//         name: state.smurfs.name,
//         age: state.smurfs.age,
//         height: state.smurfs.height
//     }
// }
}

export default connect(mapStateToProps, { fetchSmurfs})(Smurfs)