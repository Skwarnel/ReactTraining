import React, {Component} from 'react';

class Exercise1 extends Component {
    state = {
        inputName: "Pleaseee, type here whatever you want to...",
        amount: 567,
        totalCost: 735,
        evaluation: "Good..."
    }

    changeHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Msg: ${this.state.inputName}`);
        console.log(`Msg: ${this.state.amount}`);
        console.log(`Msg: ${this.state.totalCost}`);
        console.log(`Msg: ${this.state.evaluation}`);
    };

    render() {
        // const {inputName, amount, totalCost, evaluation} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Your input...
                        <div>
                            <input type="text" name="inputName" value={this.state.inputName} onChange={this.changeHandler}
                                   style={{width: '500px'}}/>
                        </div>
                        <div>
                            <input type="text" name="amount" value={this.state.amount} onChange={this.changeHandler}
                                   style={{width: '500px'}}/>
                        </div>
                        <div>
                            <input type="text" name="totalCost" value={this.state.totalCost} onChange={this.changeHandler}
                                   style={{width: '500px'}}/>
                        </div>
                        <div>
                            <input type="text" name="evaluation" value={this.state.evaluation} onChange={this.changeHandler}
                                   style={{width: '500px'}}/>
                        </div>
                    </label>
                    <div>
                        <input type="submit" value="Send it to me..."/>
                    </div>
                </form>
            </div>
        );
    }
}

export default Exercise1;