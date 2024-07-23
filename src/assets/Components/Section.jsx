import './Section.css'

let Section = () =>{
    return(
        <div className='sectionContainer'>
            <div className='Left'>
            <h1 className='heading'>Freelance<br/>
                Designer Services
            </h1>
            <p>Remote / Full-time</p>
            </div>
            <div className='Right'>
            <div className="leftText">
            <h1>99</h1>
            <span className='dollar'>$</span>
            </div>
            
            <div className="text">
                <p>$99/yearly. The standard VAT rate may be charged, following the law of your country</p>
                <a href="#">Subscribe</a>
            </div>
            </div>
        </div>
    )
}
export default Section;