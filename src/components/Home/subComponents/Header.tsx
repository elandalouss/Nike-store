import './Header.css'
import HeaderPic from '../../../assets/HeaderPic.png'
const Header = () => {
  return (
    <div className='Header-container'>
        <div className='Header'>
            <h1>YOUR FEET</h1>
            <h1>DESERVE</h1>
            <h1>THE <span className='best'>BEST</span></h1>
            <div className='paragraphs'>
                <p>Lorem ipsum dolor sit amet consectetur  elit. Sint necessitatibus vero </p>
                <p>commodi dicta illum, obcaecati numquam blanditiis omnis, quo ducimus amet pariatur error! Amet,</p>
            </div>
            <div className='Header_Button'>Shop Now</div>
        </div>
        <div className="sidePic">
            <img src={HeaderPic} alt="" />
        </div>
    </div>
  )
};

export default Header;
