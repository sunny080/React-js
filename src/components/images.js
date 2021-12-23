import { DomEx } from "./styles/Images.styled"
import img1 from './images/see.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jpg'

export default function Images() {
    return (
        <DomEx>
            <div className="bol">
                <div className="felow">
                    <div className="inerr">
                        <img className="lop" src={img1} />
                    </div>
                    <div className="janu">
                        <img className="hro" src={img2} />
                    </div>
                    <div className="iner">

                        <img className="horp" src={img3} />
                    </div>
                    <div className="janu">
                        <img className="hoprp" src={img4} />
                    </div>
                </div>
            </div>

        </DomEx>
    )
}
