import styled  from "styled-components";



export const StyledHeader = styled.header`

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  margin-top:-21px;
  margin-top:200px;
  color:#fff;
  width:100%;
  text-align:center;
  display:flex;
  justify-content:center;
 

.janu{
  width:80%;
}
  .floop{
    display:flex;
    width:100%;
    flex-direction:column;
    text-align:center;
    justify-content:center;
  }
  .gop{
    font-family:'Poppins', sans-serif;

      width:70%;
      margin-left:15%;
      font-size:46px;
      line-height:70px;
      font-weight:500;

  }
.npia{
    color:#fff;
    width:40%;
    font-size:19px;
    color:#a8b6c6;
    margin-left:30%;
}
.cent{
  margin-top:50px;
}
.cvot{
  color:#fff;
  width:150px;
  height:50px;
  font-size:19px;
  font-weight:500;
  border:none;
  border-radius:14px;
  margin:0 10px;
  background-color: rgba(73, 73, 73, 0.521);
  cursor: pointer;


}
.cvot:hover{
  transition:.2s;

  background-color: rgba(73, 73, 73, 0.921);

}
.cont{
  width:150px;
  height:50px;
  color:#fff;
  color:black;
  font-size:19px;
  font-weight:500;
  border:none;
  border-radius:14px;
  margin:0 10px;
  cursor: pointer;

}
.cont:hover{
  transition:.2s;
  background-color: rgba(255, 255, 255, 0.8);


}




@media (max-width:940px) {
  .gop{
    font-size:36px;
    width:100%;
    margin-left:0;

  }   
  .npia{
      width:100%;
      margin-left:0;
  }
  .cont{
    margin:0 5px;
  }
  .cvot{
    margin:0 5px;
  }
}
@media (max-width:460px){
  .gop{
    font-size:30px;
    line-height:41px;
  }
  .cont{
    width:120px;
    
  }
  .cvot{
    width:120px;
  }

} 
`