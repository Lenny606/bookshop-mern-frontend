import {Link, useParams} from "react-router-dom";
import banner from "../../../public/banner.webp"
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {useFetchAllBooksQuery, useFetchBookByIdQuery} from "../../redux/features/cart/booksApi.js";

const SingleBook = () => {
    //getting book from API
    const {id} = useParams()

    const {data: book, isLoading, isError} = useFetchBookByIdQuery(id)

    if (isLoading) {
        return <>Loading </>
    }
    if (isError) {
        return <>Error </>
    }
    return (
        <div className={'text-2xl md:text-xl font-medium mb-7'}>

            {book.title}
            <div>
                {/*<button*/}

                {/*    onClick={() => handleCart(book)} className={'bg-primary rounded-md px-5 py-2'}>*/}
                {/*    ADD to Cart*/}
                {/*</button>*/}
            </div>

        </div>

    )
}
export default SingleBook;