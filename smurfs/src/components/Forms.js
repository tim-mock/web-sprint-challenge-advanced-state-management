import  Reducer, {initialState} from '../reducer/Reducer'
import React, { useReducer } from 'react'
import { CREATE_SMURF, createSmurf } from './actions/smurfActions'
import { connect } from 'react-redux'

class SmurfForm extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            age: '' ,
            height: ''
        }
    }

    

handleNameChange = e => {
    this.setState({
        name: e.target.value
        
    })
}
handleAgeChange = e => {
        this.setState({
            age: e.target.value
            
        })
    }
handleHeightChange = e => {
            this.setState({
                height: e.target.value
                
            })
}

handleSubmit = e => {
    e.preventDefault() 
    this.props.createSmurf(this.state)
    console.log('form Boi', this.state)
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                placeholder='name'
                type='text'
                name='name'
                value={this.state.name}
                onChange={this.handleNameChange}
                
/>
<input
                placeholder='age'
                type='text'
                name='newSmurfInput'
                value={this.state.newSmurfInput}
                onChange={this.handleAgeChange}
                
/>
<input
                placeholder='height'
                type='text'
                name='newSmurfInput'
                value={this.state.height}
                onChange={this.handleHeightChange}
                
/>

<button>ADD Smurf </button>
            </form>
        )
    }
    
}



export default connect(null, {createSmurf})(SmurfForm); 