import { First } from "./styles/lower.styled"
import img1 from "./images/mob.jpg"
import img2 from "./images/top.jpg"
import img3 from "./images/mob1.jpg"
import img4 from "./images/all.jpg"



export default function lower() {
    return (
        <First>
            <div>
                <div className="slom">
                    <div className="cent">

                        <div className="lki">
                            <h1 className="dinn">More Than 50 awesome active projects</h1>
                            <p className="cvil">We specialize in creating visual identities for products and brands in your company.</p>
                        </div>



                        <div className="fle">
                            <div className="side">
                                <div className="im">
                                    <img className="fill" src={img1} alt="" />
                                </div>
                                <div className="im">
                                    <img className="fill" src={img2} alt="" />
                                </div>
                            </div>
                            <div className="side">
                                <div className="im">
                                    <img className="fill" src={img3} alt="" />
                                </div>
                                <div className="im">
                                    <img className="fill" src={img4} alt="" />
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </First>
    )
}
