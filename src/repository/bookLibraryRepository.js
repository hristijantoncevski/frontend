import axios from "../custom-axios/axios";

const bookLibraryRepository = {
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchBooks: () => {
        return axios.get("/books")
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name,category,author,availableCopies) => {
        return axios.post("/books/add",{
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    },
    editBook: (id,name,category,author,availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "author": author,
            "availableCopies": availableCopies
        });
    },
    takeBook: (id) => {
        return axios.put(`/books/take/${id}`);
    }
}

export default bookLibraryRepository;