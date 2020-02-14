import { createStore } from 'redux';

// Set Initial State

var initialState = {
    name: '',
    address: '',
    city: '',
    state: '',
    zipcode: null,
    imgURL: '',
    monthly_mortgage_rate: '',
    desired_rent: ''

}

// Export Action Types
export const STEP_ONE = 'change_step';
export const STEP_TWO = 'step_two';
export const STEP_THREE = 'step_three';
export const CANCEL_WIZARD = 'cancel_wizard';

// Set up Reducer

var reducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type){
        case STEP_ONE:
            let { name, address, city, zipcode } = payload;
            return{
                ...state,
                name,
                address,
                city,
                state: payload.state,
                zipcode
            }
        
        case STEP_TWO:
            let { imgURL } = payload;
            return{
                ...state,
                imgURL
            }
        case STEP_THREE:
            let { monthly_mortgage_rate, desired_rent } = payload;
            return{
                ...state,
                monthly_mortgage_rate,
                desired_rent
            }
        case CANCEL_WIZARD:
            return{
                name: '',
                address: '',
                city: '',
                state: '',
                zipcode: null,
                imgURL: '',
                monthly_mortgage_rate: '',
                desired_rent: ''
            }
        
        default: return state; 
    }
}

// Export Store

export default createStore(reducer);