import PicLayer2 from '../../../assets/PicLayer2.jpg'
import './styles/Layer1.css'
const Layer1 = () => {
  return (
    <div className="Layer1">
      <div className="PicLayer2">
        <img src={PicLayer2} alt="" />
      </div>
      <div className="sideText">
        <h1 className='firstOne'>WE PROVIDE <span>HIGH</span></h1>
        <h1><span>QUALITY</span> SHOES</h1>
        <div className="paragraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
          <p> elit. Quam, aliquam ullam libero sequi deserunt sint ? </p>
          <p>Aspernatur ipsum dignissimos facilis libero sequi sint ?.</p>
          <p>Aspernatur sequi sint perspiciatism ipsum   libero</p>
          <p> elit. Quam, aliquam ullam libero aliquam ullam deserunt </p>
        </div>
      </div>
    </div>
  )
};

export default Layer1;  
