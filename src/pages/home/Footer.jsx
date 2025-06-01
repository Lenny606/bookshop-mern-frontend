import {useLocation} from 'react-router-dom';

const Footer = () => {
    const location = useLocation();

    return (
        <div className={'max-w-screen-2xl px-4 py-6 mx-auto font-primary'}>
            <ul className="flex flex-col gap-4">
            {
                    location.pathname !== '/' && <a href={"/"}>
                        <li>Home</li>
                    </a>
                }
                <a href={"/about"}>
                    <li>About this web</li>
                </a>
            </ul>
        </div>
    )
}
export default Footer;