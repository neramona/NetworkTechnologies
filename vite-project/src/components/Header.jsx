import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Header extends PureComponent {
    constructor(props) {
        super(props)
        
        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Главная</Link></li>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default Header