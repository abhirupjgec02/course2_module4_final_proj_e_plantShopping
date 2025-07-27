import React from 'react';
import { addItem } from "./CartSlice";
import { useDispatch } from "react-redux";

let ProductOps = ({ plantsArray, addedToCart, setAddedToCart }) => {
    const dispatch = useDispatch();
    const handleAddToCart = (plantItem) => {
        plantItem.quantity = 1;
        setAddedToCart((prevState) => ({
            ...prevState,
            [plantItem.name]: true,
        }));
        dispatch(addItem(plantItem));
    }

    return (
        <div className='prod_list'>
            {plantsArray.map((catItem, catIndex) => (
                <div className='product-grid' key={catIndex}>
                    <h2>{catItem.category}</h2>
                    <div className='product-list' style={{display: 'flex'}}>
                        {catItem.plants.map((plantItem, plantIndex) => (
                            <div className='product-card' key={plantIndex}>
                                <div className='image-area'>
                                    <img className='product-image' src={plantItem.image} alt={plantItem.description} />
                                </div>
                                <div className="text"><h4>{plantItem.name}</h4></div>
                                <div className=''><p style={{fontSize: '14px'}}>{plantItem.description}</p></div>
                                <br></br>
                                <div className='product-price'>{plantItem.cost}</div>
                                <h3>Added coefficient : {plantItem.added}</h3>
                                <button className='product-button-green' 
                                disabled = {addedToCart[plantItem.name]}
                                onClick={() => handleAddToCart(plantItem)}
                                style={{
                                    opacity: addedToCart[plantItem.name] ? 0.5 : 1
                                }}>
                                    {addedToCart[plantItem.name] ? 'Added to Cart' : 'Add to Cart'}
                                </button>
                            </div> 
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductOps;

