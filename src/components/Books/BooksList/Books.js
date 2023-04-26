import React from 'react';
import ReactPaginate from 'react-paginate'
import {Link} from 'react-router-dom';
import BooksTerm from "../BooksTerm/BooksTerm";

class Books extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            page:0,
            size:5
        }
    }

    render() {
        let offset = this.state.size * this.state.page;
        let nextPageOffset = offset + this.state.size;
        let pageCount = Math.ceil(this.props.books.length / this.state.size);
        let books = this.getBooksPage(offset, nextPageOffset);
        //console.log(books, pageCount)

        return (

            <div className={"container mm-4 mt-5"}>
                <div className={"row"}>
                    <table className={"table table-stripped"}>
                        <thead>
                            <tr>
                                <th scope={"col"}>Name</th>
                                <th scope={"col"}>Category</th>
                                <th scope={"col"}>Author</th>
                                <th scope={"col"}>Available Copies</th>
                            </tr>
                        </thead>
                        <tbody>
                            {books}
                        </tbody>
                    </table>
                </div>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 text-right">
                            <Link className={"btn btn-block btn-success"} to={"/books/add"}>Add new book</Link>
                        </div>
                    </div>
                </div>
                <ReactPaginate previousLabel={"<"}
                               previousLinkClassName={"text-decoration-none text-reset"}
                               nextLabel={">"}
                               nextLinkClassName={"text-decoration-none text-reset"}
                               breakLabel={<a href="/#">...</a>}
                               breakClassName={"break-me"}
                               pageClassName={"ms-1 me-1"}
                               pageCount={pageCount}
                               marginPagesDisplayed={2}
                               pageRangeDisplayed={5}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination m-4 justify-content-center"}
                               activeClassName={"active text-decoration-underline"}/>
            </div>
        );
    }

    handlePageClick = (data) => {
        let selected = data.selected;
        //console.log(selected)
        this.setState({
            page: selected
        })
    }

    getBooksPage = (offset, nextPageOffset) => {
        //console.log(offset, nextPageOffset)
        return this.props.books.map((book, index) => {
            return (
                <BooksTerm book={book} onDelete={this.props.onDelete} onEdit={this.props.onEdit} onMark={this.props.onMark}/>
            );
        }).filter((book, index) => {
            return index >= offset && index < nextPageOffset;
        })
    }

}

export default Books;