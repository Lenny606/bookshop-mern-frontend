import {Link} from "react-router-dom";
// import banner from "../../../public/banner.webp"

const Banner = () => {
    return (
        <section id={'banner'} className={'flex flex-col md:flex-row-reverse justify-between items-center gap-10'}>

            {/*  right side */}
            <div className={'w-full md:w-1/2'}>
                <img src={""} alt={'homepage-banner'}/>
            </div>


            {/*  left side*/}
            <div className={'w-full md:w-1/2'}>
                <h1 className={'text-2xl md:text-5xl font-medium mb-7'}>New releases</h1>
                <p className={'mb-10'}> Lorem ipsum </p>
                <button className={'bg-primary rounded-md px-5 py-2'}>Subscribe</button>
            </div>

        </section>
    )
}
export default Banner;