import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { STEP_ONE } from '../../redux/store';

class StepOne extends Component{
    constructor(){
        super();
        var reduxState = store.getState();
        let { name, address, city, state, zipcode } = reduxState;
        this.state = {
            name,
            address,
            city,
            state,
            zipcode
        }
    }
    componentDidMount(){
        console.log(this.props.match.params);
        store.subscribe( () => {
            this.setState({
                name: store.getState().name,
                address: store.getState().address,
                city: store.getState().city,
                state: store.getState().state,
                zipcode: store.getState().zipcode
            })
        } )
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeStep = () => {
        let { name, address, city, state, zipcode } = this.state;
        let stepOneAction = {
            type: STEP_ONE,
            payload: {
                name,
                address,
                city,
                state,
                zipcode
            }
        }
        store.dispatch(stepOneAction);
        
        this.setState({
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null,
        });
    }
    render(){
        return(
            <section className='flex direction-column align-center'>
                <input 
                    onChange={ e => this.handleChange(e) } 
                    placeholder='Name of Property' 
                    type='text' 
                    name='name' 
                />
                <input
                    onChange={ e => this.handleChange(e) } 
                    placeholder='Address' 
                    type='text' 
                    name='address' 
                />
                <input
                    onChange={ e => this.handleChange(e) } 
                    placeholder='City' 
                    type='text' 
                    name='city' 
                />
                <input
                    onChange={ e => this.handleChange(e) } 
                    placeholder='State' 
                    type='text' 
                    name='state' 
                />
                <input 
                    onChange={ e => this.handleChange(e) } 
                    placeholder='Zipcode' 
                    type='number' 
                    name='zipcode' 
                />
                <div className='align-self-bottom'>
                    <Link 
                        to='/wizard/step2' 
                        onClick={this.handleChangeStep}
                    >
                        <button className='bg-dark next'>Next Step</button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default StepOne;