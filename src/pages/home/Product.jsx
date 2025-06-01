import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {useFetchAllBooksQuery} from "../../redux/features/cart/booksApi.js";

const Product = ({product}) => {
    //getting product from API
    // const {data:books} = useFetchAllBooksQuery();

    const speak = () => {
        const ut = new SpeechSynthesisUtterance();
        ut.text = "Welcome... to the darkness. Not everyone makes it back.";
        ut.pitch = 0.6; // Lower pitch for a mysterious tone
        ut.rate = 0.8;  // Slightly slower speaking rate
        ut.volume = 1;  // Max volume
        // const voices = window.speechSynthesis.getVoices();
        // const deepVoice = voices.find(v => v.name.includes("Google UK English Male"));
        // if (deepVoice) {
        //     ut.voice = deepVoice;
        // }
        window.speechSynthesis.speak(ut);
    }

    // const dispatch = useDispatch()
    const handleCart = (product) => {
        // dispatch(addToCart(product))
        speak()
        console.log('sfv')
    }
    return (
        <div className={'text-2xl md:text-xl font-medium mb-7'}>

            {/*MISERY NAME*/}
            <div>
                <button

                    onClick={()=>handleCart(product)} className={'bg-primary rounded-md px-5 py-2'}>
                    Welcome... to the darkness
                </button>
            </div>

        </div>

    )
}
export default Product;