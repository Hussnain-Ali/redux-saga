import {useSelector} from 'react-redux';
const Header = () => {
    const result = useSelector((state) => state.cartData)
    return (
        <div className="header">
            <div className="cart-div">
                <span>{result.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="carticon"/>
            </div>

        </div>
    )
}

export default Header;
