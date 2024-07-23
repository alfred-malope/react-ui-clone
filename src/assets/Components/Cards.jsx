import './Cards.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { TiSocialLinkedin } from "react-icons/ti";
import { RiBasketballLine } from "react-icons/ri";
import { TbPointFilled } from "react-icons/tb";

const Cards = () => {
  return (
    <div className='wrapperCards'>
      <div className='Card'>
        <div className='shape shape1'></div>
        <div className='innerCard'>
          <div className="innerContent">
            <img className='customImg' src="https://www.audibel.com/wp-content/uploads/2022/11/iic_slider.png" alt="" />
            <div className="name">
              <h4>Zain Sajid</h4>
              <TbPointFilled className='onlineIcon'/>
            </div>
            <h5>Remote</h5>
            <button className='followBtn'>Follow +</button>
          </div>
        </div>
      </div>
      <div className='Card'>
        <div className='shape shape2'></div>
        <div className='innerCard'>
          <div className="innerContent">
            <img className='standAloneImg' src="https://as1.ftcdn.net/v2/jpg/06/28/74/24/1000_F_628742415_Hl4tKfz8ZkqRoqpmX7vnoaH2UaiAXf3u.webp" alt="" />
            <div className="name">
              <h4>Moty Weiss</h4>
              <TbPointFilled className='onlineIcon'/>
            </div>
            <h5>Narowal</h5>
            <button className='followBtn'>Follow +</button>
          </div>
        </div>
      </div>
      <div className='Card'>
        <div className='shape shape3'></div>
        <div className='innerCard'>
          <div className="innerContent">
            <img className='customImg' src="https://www.audibel.com/wp-content/uploads/2022/11/CIC-10_FL21_OE003702_Brown_Clear_Utica_Claire_Lrg_03.png" alt="" />
            <div className="name">
              <h4>Alena Aulova</h4>
              <TbPointFilled className='onlineIcon'/>
            </div>
            <h5>Ukraine</h5>
            <button className='followBtn'>Follow +</button>
          </div>
        </div>
      </div>
      <div className='outcast'>
          <div className="socialIcons">
            <FaFacebookF/>
            <FaInstagram />
            <FiTwitter />
            <TiSocialLinkedin />
          </div>
          <div className="anotherContainer">
            <RiBasketballLine className='basketball'/>
            <h5>Follow us</h5>
          </div>
          <button className='arrowBtn'><FaArrowRightLong /></button>
      </div>
    </div>
  )
}

export default Cards;
