import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';
import store, { CANCEL_WIZARD } from '../../redux/store';

class Wizard extends Component{
    handleCancel = () => {
        store.dispatch({type: CANCEL_WIZARD})
    }
    render(){
        let { step } = this.props.match.params;
        return(
            <div className='bg-lighter container pad-35'>
                <div className='flex align-center justify-between pad-10'>
                    <h1>Add New Listing</h1>
                    <Link 
                        to='/' 
                        onClick={this.handleCancel}
                    >
                        <button className='bg-error btn-small'>Cancel</button>
                    </Link>
                </div>
                <form>
                    <h1>Step {step.substring(4)}</h1>
                    <Route path={`/wizard/step1`} component={ StepOne } />
                    <Route path={`/wizard/step2`} component={ StepTwo } />
                    <Route path={`/wizard/step3`} component={ StepThree } />
                </form>
            </div>
        )
    }
}


export default Wizard;