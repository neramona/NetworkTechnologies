import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class Footer extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <>
                <footer>
                    <p>© 2025 Yak</p>
                </footer>
            </>
        )
    }
}

export default Footer