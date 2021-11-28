import Header from './Header.js';
import { useHistory } from 'react-router-dom';
import React, { useState,useEffect } from 'react';

const AddProduct = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const history = useHistory();
        const addProduct = async () => {
            console.log(name,file,price,description);
        // debugger;
        let item = {name,file,price,description }
        
        const formData = new FormData();
        formData.append("file", file)
        formData.append("name", name)
        formData.append("price", price)
        formData.append("description", description)
        console.log(formData);

        let result = await fetch('http://127.0.0.1:8000/api/addproduct', {
            method: 'POST',
            body:formData,
        });
        alert('data added');
    }
    return (
        <>
        <Header />  
            <div className="col-sm-6 offset-sm-3">
                <h1>Add Product</h1>
                <input type="text" placeholder="name"  onChange={(e) => setName(e.target.value)} className="form-control" />
                <br />
                <input type="text" placeholder="price"  onChange={(e) => setPrice(e.target.value)} className="form-control" />
                <br />
                <input type="text" placeholder="description"  onChange={(e) => setDescription(e.target.value)} className="form-control" />
                <br />
                <input type="file" placeholder="file" onChange={(e) => setFile(e.target.files[0])} className="form-control" />
                <br />
                <input type="button"  onClick={addProduct} className="btn btn-primary" value="Add product"/>
            </div>
        </>
    );
}
export default AddProduct;