import { useEffect } from 'react';
import './styles/ZoomToSee.css'

const ZoomToSee = ({product, setZoom}) => {
    useEffect(() => {
        const handleEsc = (event) => {
           if (event.key === 'Escape') {
            setZoom(false);
          }
        };
        window.addEventListener('keydown', handleEsc);
    
      }, []);
  return (
    <div className="ZoomToSee">
        <div className="ZoomToSeeContainer">
            <div className="close" onClick={()=> {setZoom(false)}}>X</div>
            <img src={product.img} alt="" />
        </div>
    </div>
  )
}

export default ZoomToSee;
