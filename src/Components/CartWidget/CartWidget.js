import {BsCart3} from 'react-icons/bs';
import './CartWidget.css';


const CartWidget = () => {
  return (
    <div className="container">
        
        <button>
           <BsCart3 /> 
        </button>
    </div>
  );
}

export default CartWidget;