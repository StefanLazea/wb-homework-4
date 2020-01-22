import React from 'react'
import RobotList from './RobotList'

class RobotForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            type: '',
            mass: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                    id="name" placeholder="nume"
                    onChange={e => this.handleChange(e)} />
                <input type="text" id="type" placeholder="type"
                    onChange={e => this.handleChange(e)} /> />
                <input type="text" id="mass" placeholder="mass"
                    onChange={e => this.handleChange(e)} /> />
                <button type="button" value="add"
                    onClick={() => {
                        this.props.onAdd(
                            {
                                name: this.state.name,
                                type: this.state.type,
                                mass: this.state.mass
                            }
                        )
                    }}></button>
            </div>
        )
    }
}

export default RobotForm;