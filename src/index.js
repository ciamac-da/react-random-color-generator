import React, {Component} from 'react';
import {render} from 'react-dom';

const randomColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
}

class Card extends Component {
    render() {
        const style = {
            padding: 20,
            textAlign: 'center',
            color: 'white',
            backgroundColor: this.props.color
        }

        return (
            <div style={style}>
                {this.props.children}
            </div>
        )
    }
}

class App extends Component {

    constructor(props){
        super(props);
        this.state = {color: 'skyblue'};

        this.randomizeColor = this.randomizeColor.bind(this);
    }

    randomizeColor() {
        this.setState({color: randomColor()});
    }
    // randomizeColor = () => this.setState({color: randomColor()})

    render() {
        const {color} = this.state; //const color = this.state.color

        const style = {
            padding: 20
        }

        return (
            <div style={style}>
                <Card color={color}>
                    <input
                        type={'button'}
                        value={'Random Color'}
                        onClick={this.randomizeColor}
                    />
                </Card>
            </div>
        )
    }

}

render(
    <App/>,
    document.getElementById('root')
)