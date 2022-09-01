// Aggiungi un componente CommentArea alla fine del tuo SingleBook. Quando l’untente cliccherà su un SingleBook, i commenti dovranno apparire (suggerimento: short-circuit operator!).

// CommentArea dovrà fare il fetch dei dati e salvare i commenti del libro selezionato. Conterrà inoltre due sotto-componenti: CommentsList and AddComment.

// CommentsList avrà all’interno una lista di commenti riguardo il libro selezionato, l’array di commenti verrà passato come prop dal componente CommentArea. Ogni commento sarà sempre un componente SingleComment.
import { Component } from "react";
import AddComment from "./AddComment";
import CommentsList from "./CommentsList";

class CommentArea extends Component {
    state = {
        comments: [],
    };

    render() {
        return (
            <>
                <AddComment addComment={this.props.asinComment} />
                <CommentsList commentsList={this.props.asinComment} />
            </>
        );
    }
}

export default CommentArea;
