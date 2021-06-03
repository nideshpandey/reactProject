import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className='navbar' style={{
                    color: 'white',
                    backgroundColor: 'white',
                    borderRadius: '8px'
                }}>
                    <h1>The React App</h1>
                    <div className="links">
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                    </div>
                </nav>



            </div>
        )
    }
}

export default Navbar
