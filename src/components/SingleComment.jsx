import { Component } from "react";
import { Badge, ListGroup } from "react-bootstrap";

class SingleComment extends Component {
    state = {};
    render() {
        return (
            <>
                <p>
                    Voto:{" "}
                    <Badge variant="warning">
                        {this.props.commentElement.rate}
                    </Badge>
                </p>
                <ListGroup.Item>
                    {this.props.commentElement.comment}
                </ListGroup.Item>
            </>
        );
    }
}

export default SingleComment;
