import { useEffect, useState } from 'react';
import './styles/BestSelled.css'
import ToBuyModul from './ToBuyModul';

// const ToBuyModul = ({ product }) => {
//     console.log(product);
//     return (
//         <div className='ToBuyModul'>

//         </div>
//     )
// }

const BestSelled = () => {
    const [products] = useState([{
        "id" : 1,
        "name" : "Nike",
        "description" : "this is a s    mall description to test",
        "img" : "/assets/1.png"
    },
    {
        "id" : 2,
        "name" : "Nike",
        "description" : "this is a small description to test",
        "img" : "/assets/2.png" 
    },
    {
        "id" : 3,
        "name" : "Nike",
        "description" : "this is a small description to test",
        "img" : "/assets/1.png" 
    },{
        "id" : 6,
        "name" : "Nike",
        "description" : "this is a small description to test",
        "img" : "/assets/2.png" 
    }
]);

    const [openModel, setOpenModul] = useState(false);
    const [selectedProduct, setSelectedProduce] = useState([])

    const productModul = (product) =>{
        setSelectedProduce(product)
        setOpenModul(true);
    }
    return (
    <div className='container_BestSelled'>
        <h2>Our Best Products</h2>
        <div className='BestSelled'>
            {products.map((product) => (
                <div className="product" key={product.id} onClick={() => {productModul(product)}}>
                    <img src={product.img} alt="" />
                    <p className='product-name'>{product.name}</p>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
        {openModel && <ToBuyModul product={selectedProduct} setClose={setOpenModul} />}
    </div>
  )
};

export default BestSelled;
