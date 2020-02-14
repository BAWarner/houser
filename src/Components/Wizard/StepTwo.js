import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import store, { STEP_TWO } from '../../redux/store';

class StepTwo extends Component{
    constructor(){
        super();
        var reduxState = store.getState();
        let { imgURL } = reduxState;
        this.state = {
            imgURL
        }
    }
    componentDidMount(){
        store.subscribe( () => this.setState({ imgURL: store.getState().imgURL }) );
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleChangeStep = () => {
        let stepTwoAction = {
            type: STEP_TWO,
            payload: {
                imgURL: this.state.imgURL
            }
        }
        store.dispatch(stepTwoAction);
        this.setState({imgURL: ''});
    }
    render(){
        return(
            <section className='flex direction-column align-center'>
                <input
                    onChange={ e => this.handleChange(e) } 
                    placeholder='House Image URL' 
                    type='text' 
                    name='imgURL' 
                />
                <div className='flex justify-between align-center'>
                    <Link
                        to='/wizard/step1'
                        onClick={this.handleChangeStep}
                    >
                        <button className='bg-dark prev'>Previous Step</button>
                    </Link>
                    <Link 
                        to='/wizard/step3'
                        onClick={this.handleChangeStep}
                    >
                        <button className='bg-dark next'>Next Step</button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default StepTwo;