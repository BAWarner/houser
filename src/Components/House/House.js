import React, {Component} from 'react';
import axios from 'axios';
class House extends Component{
    constructor(){
        super();
        this.state = {
            id: null,
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: null,
            img_url: '', 
            monthly_mortgage: null, 
            desired_monthly_rent: null
        }
    }
    componentDidMount(){
        let { house_id, name, address, zipcode, city, state, 
            img_url, monthly_mortgage, desired_monthly_rent 
        } = this.props.info;
        this.setState({
            id: house_id,
            name,
            address,
            city,
            state,
            zipcode,
            img_url,
            monthly_mortgage,
            desired_monthly_rent
        });
    }
    handleDelete(id){
        axios
        .delete(`/api/houses/${id}`)
        .then( res => this.props.updateHouses() )
        .catch( err => console.log(err) );
    }
    render(){
        let { name, address, city, zipcode, state, 
            img_url, monthly_mortgage: mortgage, desired_monthly_rent: rent
        } = this.state;
        return(
            <div className='house bg-gray flex justify-between mrg-20 pad-15'>
                <div className='image-wrap column width-50'>
                    <img
                        src={ img_url ? img_url : 'https://exitrealtyallcity.com/assets/properties/no-image.png' }
                        alt='House'
                    />
                </div>
                <div className='span-wrap column width-50'>
                    <span className='block'>Property Name: { name }</span>
                    <span className='block'>Address: { address }</span>
                    <span className='block'>City: { city }</span>
                    <span className='block'>State: { state }</span>
                    <span className='block'>Zipcode: { zipcode }</span>
                    <span className='block'>Monthly Mortgage: {mortgage ? mortgage : 'N/A'}</span>
                    <span className='block'>Desired Monthly Rent: {rent ? rent : 'N/A'}</span>
                </div>
                <button className='min-button align-self-last height-fit-content' onClick={ id => this.handleDelete(this.state.id) }>&times;</button>
            </div>
        )
    }
}


export default House;