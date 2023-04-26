import React from "react";
import {Link} from "react-router-dom";

const booksTerm = (props) => {
    return(
        <tr key={props.book.id}>
            <td>{props.book.name}</td>
            <td>{props.book.category}</td>
            <td>{props.book.author.name}</td>
            <td>{props.book.availableCopies}</td>
            <td key={props.book.id} className={"text-right"}>
                <button title={"Delete"} className={"btn btn-danger"} onClick={() => props.onDelete(props.book.id)}>Delete</button>
                <Link className={"btn btn-info ms-1 me-1"} onClick={() => props.onEdit(props.book.id)} to={`/books/edit/${props.book.id}`}>Edit</Link>
                <button title={"Mark as Taken"} className={"btn btn-secondary"} onClick={() => props.onMark(props.book.id)}>Mark as Taken</button>
            </td>
        </tr>
    );
}

export default booksTerm;