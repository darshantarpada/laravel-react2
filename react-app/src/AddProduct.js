import Header from './Header.js';
import { useHistory } from 'react-router-dom';
const AddProduct = () =>{
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState('');
    const history = useHistory();
    return (
        <>
        <Header />  
        <div className="col-sm-6 offset-sm-3">
            <h1>Add Product</h1>
            <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" />
            <br />
            <input type="email" placeholder="price" nvalue={price} onChange={(e) => setPrice(e.target.value)} className="form-control" />
            <br />
            <input type="password" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} className="form-control" />
            <br />
            <input type="file" value={file} onChange={(e) => setFile(e.target.value)} className="form-control" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Add Product</button>
        </div>
        </>
    );
}
export default AddProduct;