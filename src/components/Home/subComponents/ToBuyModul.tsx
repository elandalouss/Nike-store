import { useEffect } from 'react';
import './styles/ToBuyModul.css'

const ToBuyModul = ({product, setClose}) => {
    
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.key === 'Escape') {
            setClose(false);
          }
        };
        window.addEventListener('keydown', handleEsc);
    
      }, []);

  return (
    <div className="ToBuyModul">
        <div className="close" onClick={()=>{setClose(false)}}>X</div>
        <h3>{product.name}</h3>
        <p>200$</p>
        <img src={product.img} alt="" />
        <p>{product.description}</p>
        <div className="buttons">
            <div className="learn_more">learn more</div>
            <div className="add_To_pannel">add to pannel</div>
        </div>
    </div>
  )
};

export default ToBuyModul;
