import './styles/Footer.css'
import linkdin from '/icons/linkedin.svg'
import x from '/icons/x-twitter.svg'
import stackOverFlow from '/icons/stack-overflow.svg'
import instagram from '/icons/instagram.svg'

const Footer = () => {
  return (
    <div className="Footer">
        <div className="footerUp">
            <div className="input">
                <input type="text" placeholder='Enter email address'/>
            </div>
            <div className="subscribe">Subscribe</div>
        </div>
        <div className="fotterDown">
            <div className="leftFooter">
                <h3>remx</h3>
                <p>Co-Create. Mint. Collect.</p>
            </div>
            <div className="rightFooter">
                <div className="Company">
                    <label>Company</label>
                    <ul className='footerStaff'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Vision</li>
                        <li>Genesis</li>
                    </ul>
                </div>
                <div className="MarketPlace">
                    <label>MarketPlace</label>
                    <ul className='footerStaff'>
                        <li>Collections</li>
                        <li>Create</li>
                        <li>Apply</li>
                    </ul>
                    </div>
                <div className="Support">
                    <label>Support</label>
                    <ul className='footerStaff'>
                        <li>Contact</li>
                        <li>FAQ</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="underNavBar">
            <p>Powerded by Ayoub El Andaloussi</p>
            <div className="social_">
                <img src={linkdin} alt="" />
                <img src={stackOverFlow} alt="" />
                <img src={x} alt="" />
                <img src={instagram} alt="" />
            </div>
        </div>
    </div>
  )
};

export default Footer;
