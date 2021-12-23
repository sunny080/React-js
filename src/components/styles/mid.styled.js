import styled from "styled-components";

export const Sami = styled.div`
margin-top:100px;





.fit{
    width:100%;
    display:flex;
    justify-content:center;
}
.fopl{
    width:80%;
    display:flex;
    justify-content:space-between;
}
.inn{
    width:50%;
}

.text{
    font-size:45px;
    color:#fff;
    width:485px;

}

.dol{
    color:#a3b1c0;
    font-size:19px;
    font-weight:500;
    width:80%;

}









.turn{
    width:50%;
    display:flex;
    flex-wrap:wrap;
    justify-content:center;

}
.but{
    width:80%;
    margin-left:10%;
    display:flex;
    align-items:center;
    justify-content:center;


}
.btn{
    border-radius:40px;
    border:none;
    margin:0 5px;
    font-size:17px;
    font-weight:500;
    height:50px;
    width:150px;
    cursor: pointer;
    background:#fff;

}
.btn1{
    border-radius:40px;
    border:none;
    margin:0 5px;
    font-size:17px;
    font-weight:500;
    height:50px;
    width:200px;
    cursor: pointer;
    background:#fff;

}
.btn2{
    border-radius:40px;
    border:none;
    margin:0 5px;
    font-size:17px;
    font-weight:500;
    height:50px;
    width:180px;
    cursor: pointer;
    background:#fff;

}
.btn3{
    background:#fff;
    border-radius:40px;
    border:none;
    margin:0 5px;
    font-size:17px;
    font-weight:500;
    height:50px;
    width:230px;
    cursor: pointer;

}
.btn1:hover{
    background:rgba(228, 228, 228, 0.998);
}
.btn2:hover{
    background:rgba(228, 228, 228, 0.998);
}.btn3:hover{
    background:rgba(228, 228, 228, 0.998);
}
.btn:hover{
    background:rgba(228, 228, 228, 0.998);
}




@media (max-width:1080px){
    .text{
        width:100%;
        font-size:40px
    }
    .dol{
        width:100%;
    }
}

@media (max-width:1080px){
   .fopl{
       flex-direction:column;
       justify-content:center;

   }
   .but{
        width:100%;
        margin-left:0;
    }  
   .inn{
       text-align:center;
       width:100%;
   }
   .turn{
       width:100%;
   }
   .but{
       flex-wrap:wrap;
   }
   .btn{
       margin:10px 5px;
   }
   .btn1{
    margin:10px 5px;

   }.btn2{
    margin:10px 5px;

   }.btn3{
    margin:10px 5px;

   }
}

@media (max-width:569px){
    .but{
        width:100%;
        margin-left:0;
    }   
    .btn{
       margin:10px 0px;
   }
   .btn1{
    margin:10px 0px;

   }.btn2{
    margin:10px 0px;

   }.btn3{
    margin:10px 0px;

   }
}














`

