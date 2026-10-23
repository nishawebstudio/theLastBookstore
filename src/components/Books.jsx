import books from '../data/books.js';
import BookCard from '../cards/BookCard.jsx';
export default function Books(){
    return(
        <section id="books">
            <div className="container">
                <div className="books-content">
                    <h2>Books in the shelf.</h2>
                    <div className="books-genre-list">
                        {
                            books.map(book => <BookCard {...book} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}