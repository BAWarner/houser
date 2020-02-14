import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this);
        this.updateHouses = this.updateHouses.bind(this);
    }
    componentDidMount(){
        this.getAllHouses();
    }
    getAllHouses(){
        axios
        .get('/api/houses')
        .then( houses => this.setState({houses: houses.data}) )
        .catch( err => console.log('err', err) )

    }
    updateHouses( ){
        this.getAllHouses()
    }
    render(){
        let { houses } = this.state;
        let mappedHouses = houses.map( (house, i) => {
            return(
                <House 
                    key={i} 
                    info={house}
                    updateHouses={this.updateHouses}
                />
            )
        } );
        return(
            <div className='bg-lighter container pad-35'>
                <div className='flex align-center justify-between pad-10'>
                    <h1>Dashboard</h1>
                    <Link to='/wizard/step1'>
                        <button className='btn-large bg-success'>Add New Property</button>
                    </Link>
                </div>
                {
                    mappedHouses
                        ?
                            <div className='pad-5-15 border-top'>
                                <h3>Home Listings</h3>
                                {mappedHouses.reverse()}
                            </div>
                        : null
                }
            </div>
            
        )
    }
}


export default Dashboard;