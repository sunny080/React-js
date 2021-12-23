import { Legends } from "./styles/contentstyled"
import img1 from "./images/pen.png"
import img2 from "./images/cloud.png"



export default function content() {
    return (
        <Legends>
            <div>
                <div className="floop">
                    <div className="felow">
                        <div className="kilow">
                            <h1 className="dip">We bring Everything that's required to build apps</h1>
                            <p className="req">We specialize in creating visual identities for products and brands in your company.</p>
                        </div>



                        <div className="slop">
                            <div className="slwp">
                                <div className="mill">
                                    <div className="fill">
                                        <div className="smile">
                                            <img className="lopi" src={img1} />
                                        </div>
                                    </div>
                                    <h1 className="hide">Brand Identity</h1>
                                    <p className="loop">Get your blood tests delivered at home collect a sample from the your blood tests.</p>
                                </div>



                                <div className="mill">
                                    <div className="fill">
                                        <div className="sim">
                                            <img className="lopi" src={img2} />
                                        </div>
                                    </div>
                                    <h1 className="hide">Website Design</h1>
                                    <p className="loop">Get your blood test delivered at home collect a sample from the your blood tests.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Legends>
    )
}
