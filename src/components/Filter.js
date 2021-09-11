import { useState } from "react";
import { useDispatch } from "react-redux";
import { setValues } from "../redux/filterSlice";
import { initialState } from "../redux/filterSlice";
import { itemsBrands, itemsStorage, itemsRam } from "../assets/itemsList";

const Filter  = () => {
    const [values, setNewValues] = useState(initialState);
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setValues({values}))
    }

    return (
        <form className={'filter'} onSubmit={e => handleSubmit(e)}>
            <input
                type='number'    
                name='minPrice'
                defaultValue={values.minPrice}
                min='0'
                onChange={e => setNewValues({...values, minPrice: parseInt(e.target.value)})}
            />
            <input
                type='number'    
                name='maxPrice'
                defaultValue={values.maxPrice}
                max='99999'
                onChange={e => setNewValues({...values, maxPrice: parseInt(e.target.value)})}
            />
            <select onChange={e => setNewValues({...values, brands: [e.target.value]})}>
                {itemsBrands.map(brand => {
                    return <option value={`${brand}`} key={`${brand}Option`}>{brand}</option>
                })}
            </select>
            <select onChange={e => setNewValues({...values, minStorage: parseInt(e.target.value)})}>
                {itemsStorage.map(item => {
                    return <option value={`${item}`} key={`${item}Option`}>{item}GB</option>
                })}
            </select>
            <select onChange={e => setNewValues({...values, minRam: parseInt(e.target.value)})}>
                {itemsRam.map(ram => {
                    return <option value={`${ram}`} key={`${ram}Option`}>{ram}GB</option>
                })}
            </select>
            <button type='submit'>Ok</button>
        </form>
    )
}

export default Filter;