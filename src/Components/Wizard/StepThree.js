import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import store, { STEP_THREE } from '../../redux/store';
import axios from 'axios';

class StepThree extends Component{
    constructor(){
        super();
        var reduxState = store.getState();
        let { monthly_mortgage_rate, desired_rent } = reduxState;
        this.state = {
            monthly_mortgage_rate,
            desired_rent,
            shouldRedirect: false
        }
    }
    componentDidMount(){
        store.subscribe( () => {
            this.setState(
                { 
                    monthly_mortgage_rate: store.getState().monthly_mortgage_rate, 
                    desired_rent: store.getState().desired_rent
                }
            ) 
        });
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeStep = () => {
        let { monthly_mortgage_rate, desired_rent } = this.state;
        let stepThreeAction = {
            type: STEP_THREE,
            payload: {
                monthly_mortgage_rate,
                desired_rent
            }
        }
        store.dispatch(stepThreeAction);
        this.setState({monthly_mortgage_rate: '', desired_rent: ''});
    }
    handleSubmit = () => {
        let { name, address, city, state, zipcode, imgURL } = store.getState();
        let { monthly_mortgage_rate, desired_rent } = this.state;
        let body = {
            name,
            address,
            city,
            state,
            zipcode,
            imgURL,
            monthly_mortgage_rate,
            desired_rent
        }
        axios
        .post('/api/houses', body)
        .then( res => {
            console.log(res.data);
            this.setState({shouldRedirect: true})
        } )
        .catch( err => console.log(err) );
    }
    render(){
        return(
            <section className='flex direction-column align-center'>
                { this.state.shouldRedirect ? <Redirect to='/'/> : null }
                <input 
                    onChange={ e => this.handleChange(e) }
                    placeholder='Monthly Mortgage Rate'
                    type='text'
                    name='monthly_mortgage_rate'
                />
                <input
                    onChange={ e => this.handleChange(e) }
                    placeholder='Desired Monthly Rent'
                    type='text' 
                    name='desired_rent' 
                />
                <div className='flex align-center justify-between'>
                    <Link 
                        to='/wizard/step2'
                        onClick={this.handleChangeStep}
                    >
                        <button className='bg-dark prev'>Previous Step</button>
                    </Link>
                    <input 
                        type='submit' 
                        value='Complete'
                        className='bg-success button'
                        onClick={this.handleSubmit}
                    />
                </div>
            </section>
        )
    }
}

export default StepThree;