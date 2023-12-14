import React, {Component} from "react";

class LikeBox extends Component {
    render() {
        const {counter} = this.props;
        return (<>
            <div>{counter} likes</div>
            <button>Like it!</button>
        </>);
    }
}

export default LikeBox;