import React, {useState, useEffect} from "react";

const BookInfo = ({isbn}) => {
    const [book, setBook] = useState(false);

    const fetchBook = async () => {
        try {
            const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`
            );
            const parsedResponse = await response.json();
            console.log(parsedResponse);
            setBook(parsedResponse);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchBook();
    }, []);

    return (
        <div>
            <h1>
                {
                    book ? book.items[0].volumeInfo.title : "The book is fetching "
                }
            </h1>

        </div>
    );
}

export default BookInfo;