import styled from "styled-components";

export const Second = styled.div`
margin-top:70px;

.slot{
    display:flex;

    justify-content:center;
    width:100%;
}
.slom{
    width:80%;
    display:flex;
    justify-content:space-between;


}
.jim{

    height:110px;
    margin-top:40px;
    width:300px;
    color:#fff;
}
.roi{
    margin-top:0;
    font-size:19px;
    color:#fff;
    font-weight:500;
}
.apl{
    color:#9aa7b6;

    font-size:15px;
    font-weight:500;
}
.num{
    color:#9aa7b6;
   font-size:14px;
   font-weight:500;

}


.copy{
    width:80%;
    margin-left:10%;
    text-align:center;
    display:flex;
    justify-content:space-between;
    margin-top:30px;
}
.trt{
    color:#fff;
    font-weight:500;
    font-size:19px;
}
.fir{
    font-size:19px;
    font-weight:500;
    color:#fff
}









@media (max-width:850px){
    .slom{
        
        flex-wrap:wrap;
        
    }
}
@media (max-width:750px){
    .slom{
        
        
        flex-wrap:wrap;
        
    }
    .jim{
        width:100%;
        text-align:center;
    }
  
}
@media (max-width:500px){
    .trt{
        font-size:16px;
    }
    .fir{
        font-size:16px;
    }

}
`
