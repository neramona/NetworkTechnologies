import React, { PureComponent, ReactNode } from 'react'
import { Button } from '../components/Button'

interface Props {}
interface State {}

class Home extends PureComponent<Props, State> {
    constructor(props: Props) {
        super(props)

        this.state = {
            
        }
    }

    render(): ReactNode {
        return (
            <div>
                <div>HOME</div>
                <Button color="secondary" size="large" title="OK"/>
            </div>
        )
    }
}

export default Home
