import {Link, useParams} from "react-router-dom";
import banner from "../../../public/banner.webp"
import {useDispatch} from "react-redux";
import {addToCart} from "../../redux/features/cart/cartSlice.js";
import {useGetOrdersByEmailQuery} from "../../redux/features/cart/ordersApi.js";
import {useAuth} from "../../context/auth/AuthContext.jsx";

const OrdersPage = () => {
    //getting book from API
    const {id} = useParams()
    const {currentUser} = useAuth()

    const {data, isLoading, isError} = useGetOrdersByEmailQuery(currentUser.email)

    if (isLoading) {
        return <>Loading... </>
    }
    if (isError) {
        return <>Error.. </>
    }
    return (
        <div className={'container mx-auto p-6'}>
            <h2 className={'text-2xl font-semibold mb-4'}>Orders List</h2>
            {
                data?.data.length < 1 ? (
                        <div className={'text-2xl font-semibold mb-4'}>No Orders found</div>
                    ) :
                    (
                        <div>
                            {
                                // TODO complete order inforamtions
                                data?.data.map((order, index) => {
                                   return <div>
                                        <h3>Order {order?._id}</h3>
                                    </div>
                                })
                            }
                        </div>
                    )
            }


        </div>

    )
}
export default OrdersPage;