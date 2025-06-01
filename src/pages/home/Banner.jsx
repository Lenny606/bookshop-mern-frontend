import BannerItem from "../../components/BannerItem.jsx";
import {useState} from "react";
import {useFetchAllBooksQuery} from "../../redux/features/cart/booksApi.js";
import {data} from "autoprefixer";

const Banner = () => {

    const {data: books} = useFetchAllBooksQuery();
    console.log(data)
    const [bookOfADay, setBookOfADay] = useState({})


    return (
        <section id={'banner'} className={'flex flex-col md:flex-row-reverse justify-between items-center gap-10'}>

            {/*  right side */}
            <div className={'w-full md:w-1/2'}>
                <BannerItem alt={'homepage-banner'} src={"/banner_king_homepage.webp"}/>
            </div>

            {/*  left side*/}
            <div className={'w-full md:w-1/2'}>
                <h1 className={'text-2xl md:text-5xl font-medium mb-7'}>Our beloved master pieces</h1>
                <p className={'mb-10'}>Our currently featured horror masterpiece is so good, you'll forget to sleep — or
                    maybe you just won't *want* to close your eyes again. Caution: side effects may include goosebumps,
                    paranoia, and a sudden urge to avoid clowns, cornfields, and creepy hotels.</p>
                <button className={'bg-primary rounded-md px-5 py-2'}> Give Your Soul (or Just Click)</button>
            </div>

        </section>
    )
}
export default Banner;