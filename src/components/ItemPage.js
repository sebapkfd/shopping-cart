import React from 'react';
import {useParams} from 'react-router-dom';

const ItemPage = (props) => {
    const {items, onSelect} = props;
    const {id} = useParams();
    const selectedItem = items.filter(item => item.id === id)[0];
    
    const clickItem = (e) => {
        e.preventDefault();
        const pickedItem = {
            name: selectedItem.name,
            amount: parseInt(e.target.amount.value)
        }
        onSelect(pickedItem);
    }

    return (
        <div className='ItemPage'>
            <div className="ItemImgDiv">
                <img src={`${selectedItem.imgSrc}`} alt={`${selectedItem.name}`} />
            </div>
            <div className="IteminfoDiv">
                <h2>Name: {selectedItem.name}</h2>
                <h2>Price: ${selectedItem.price}</h2>
                <form onSubmit={clickItem}>
                    <input type="number" name="amount" defaultValue="1" min="1"></input>
                    <button type="submit">Add to Cart</button>
                </form>
            </div>
            
        </div>
    )
}

export default ItemPage;