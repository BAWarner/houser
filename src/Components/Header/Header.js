import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <header className='bg-primary'>
                <div className='container flex align-center'>
                    <img className='logo' src='https://i.ya-webdesign.com/images/home-transparent-white-3.png' alt='logo'/>
                    <span className='inline-block logo-text'>Houser</span>
                </div>
            </header>
        )
    }
}

export default Header;