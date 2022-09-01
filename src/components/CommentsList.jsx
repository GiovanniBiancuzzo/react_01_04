// CommentsList avrà all’interno una lista di commenti riguardo il libro selezionato, l’array di commenti verrà passato come prop dal componente CommentArea. Ogni commento sarà sempre un componente SingleComment.
import { Component } from "react";
import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";

class CommentsList extends Component {
    state = {
        comments: [],
    };

    fetchComments(asin) {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzEwYTZlN2VkZDY3ODAwMTUwN2Q3NDQiLCJpYXQiOjE2NjIwMzU2ODcsImV4cCI6MTY2MzI0NTI4N30.Jdt46faBQ3TI1LhM97_vn-rp35fLjIBwYaQ8QCw8-Zw",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    comments: data,
                });
            })
            .catch((error) => console.log("Qualcosa è andato storto", error));
    }

    componentDidMount() {
        this.fetchComments(this.props.commentsList);
    }

    render() {
        return (
            <ListGroup>
                {this.state.comments.map((comment) => {
                    return (
                        <SingleComment
                            key={comment.asin}
                            commentElement={comment}
                        />
                    );
                })}
            </ListGroup>
        );
    }
}

export default CommentsList;
