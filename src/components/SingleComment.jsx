import { Component } from "react";
import { Badge, ListGroup } from "react-bootstrap";

class SingleComment extends Component {
    state = {};
    render() {
        return (
            <ListGroup.Item>
                Voto:{" "}
                <Badge variant="warning">
                    {this.props.commentElement.rate}
                </Badge>
                <br></br>
                {this.props.commentElement.comment}
            </ListGroup.Item>
        );
    }
}

export default SingleComment;
