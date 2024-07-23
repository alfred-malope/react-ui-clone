import './Article.css'
import { FaArrowDownLong } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";

let Article = () =>{
    return(
        <div className='Article'>
            <div className='Text'><h1>Featured Artist</h1></div>
            <div className='icon'>
                <FaArrowDownLong className='downArrow' />
            </div>
            <div className='blocks'>
                <div className='block one'><span>uiux</span></div>
                <div className='block two'><span>illusta</span></div>
                <div className='block three'><span>motion</span></div>
                <div className='block icon four'><span>< IoIosArrowDropright className='rightArrow' /></span></div>
            </div>
        </div>
    )
}

export default Article;