import styled from "styled-components";

export const First = styled.div`
margin-top:100px;




.slom{
    width:100%;
    display:flex;
    justify-content:center;
  

}
.cent{
    width:80%;
}
.lki{
    width:100%;
    text-align:left;

}
.dinn{
    font-size:45px;
    width:700px;
    color:#fff;

}
.cvil{
    color:#a1abba;
    font-size:19px;

    width:540px;
}
.fle{
    display:flex;
    flex-direction:column;
    margin-top:100px;
    justify-content:center;
    
}
.side{
    display:flex;
}
.fill{

    border-radius:20px;
}
.im{
    margin:10px 10px;
    width:50%;
}
@media (max-width:780px){
    .dinn{
        width:100%;
        font-size:35px;
    }
    .cvil{
        width:100%;
    }
    .side{
        flex-wrap:wrap;
        justify-content:center;
    }
    .im{
        width:100%;
        margin:10px 0;
    }
}
`
