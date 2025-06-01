import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {useFetchAllBooksQuery} from "../../redux/features/cart/booksApi.js";

const Product = ({product}) => {
    //getting product from API
    const {data:books} = useFetchAllBooksQuery();

    const dispatch = useDispatch()
    const handleCart = (product) => {
        dispatch(addToCart(product))
    }
    return (
        <div className={'text-2xl md:text-xl font-medium mb-7'}>

            PRODUCT NAME
            <div>
                <button

                    onClick={()=>handleCart(product)} className={'bg-primary rounded-md px-5 py-2'}>
                    ADD to Cart
                </button>
            </div>

        </div>

    )
}
export default Product;