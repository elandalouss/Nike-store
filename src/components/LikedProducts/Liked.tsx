import { useState } from "react";
import zoomIn from '/icons/zoomIn.svg'
import "./Liked.css"
import ZoomToSee from "./subComponents/ZoomToSee";

const Liked = () => {
  const [products] = useState([{
    "id" : 1,
    "name" : "Nike",
    "description" : "this is a s    mall description to test",
    "img" : "/assets/1.png",
    "price" : "299.99$"
},
{
    "id" : 2,
    "name" : "Nike",
    "description" : "this is a small description to test",
    "img" : "/assets/3.png",
    "price" : "199.99$" 
},
{
    "id" : 3,
    "name" : "Nike",
    "description" : "this is a small description to test",
    "img" : "/assets/1.png",
    "price" : "499.99$" 
},{
    "id" : 6,
    "name" : "Nike",
    "description" : "this is a small description to test",
    "img" : "/assets/2.png",
    "price" : "399.99$" 
},{
  "id" : 12,
  "name" : "Nike",
  "description" : "this is a small description to test",
  "img" : "/assets/3.png",
  "price" : "199.99$" 
},
{
  "id" : 23,
  "name" : "Nike",
  "description" : "this is a small description to test",
  "img" : "/assets/1.png",
  "price" : "499.99$" 
},{
  "id" : 36,
  "name" : "Nike",
  "description" : "this is a small description to test",
  "img" : "/assets/2.png",
  "price" : "399.99$" 
}
]);

const [zoom, setZoom] = useState(false);
const [product, setProduct] = useState([]);

const zoomIt = (product) => {
  setZoom(true);
  setProduct(product);

}

  return (
    <div className="Liked">
      <div className="Liked_contant">
        {products.map((product) => (
          <div className="solo_Product">
            <img className="search_Icon" onClick={() => {zoomIt(product)}} src={zoomIn} alt="" />
            <img className="productImage" src={product.img} alt="" />
            <p className="productName">{product.name}</p>
            <p>{product.price}</p>
            <button>Pack</button>
          </div>
        ))}
      </div>
      {zoom && <ZoomToSee product={product} setZoom={setZoom} />}
    </div>
  )
};

export default Liked;
