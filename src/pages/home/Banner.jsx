import BannerItem from "../../components/BannerItem.jsx";
import {useState} from "react";
import {useFetchAllBooksQuery} from "../../redux/features/cart/booksApi.js";
import {data} from "autoprefixer";

const Banner = () => {

    const {data: books} = useFetchAllBooksQuery();
    console.log(data , "data")
    // const [bookOfADay, setBookOfADay] = useState({})


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
                <button popovertarget="myPopover"
                        className={'bg-primary rounded-md px-5 py-2 text-white hover:bg-secondary transition-colors'}> Give
                    Your Soul (or Just Click)
                </button>
                <div id="myPopover" popover="auto"
                     className="p-4 rounded-lg shadow-lg bg-gradient-to-r from-gray-800/90 to-gray-900/90 text-white">
                    <h3 className="text-lg font-semibold mb-2">Welcome to Horror!</h3>
                    <p className="mb-3">Ready to experience spine-chilling tales that will keep you up at night?</p>
                    <button popovertarget="myPopover" popovertargetaction="hide"
                            className="text-sm text-gray-300 hover:text-white">Close
                    </button>
                </div>
            </div>

        </section>
    )
}
export default Banner;