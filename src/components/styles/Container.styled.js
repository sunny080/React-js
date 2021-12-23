import styled  from "styled-components";
 

export const Container = styled.div`
  width:100%;
  height:80px;
  color:#fff;
  font-family:sans-serif;
  display:flex;
  justify-content: space-between;
  align-items:center;


ul{
  list-style:none;
  display:flex;
  text-align:center;
  margin-right:70px;
}

.dog{
  margin:0 20px;
  font-size:17px;
  font-weight:500;
  cursor: pointer;

}
.dog:hover{
  color:rgba(255, 255, 255, 0.7);
}

.head{
  color:white;
  font-weight:500;
  margin-left:20px;
  cursor: pointer;
  
}
.head:hover{
  color:rgba(255, 255, 255, 0.7);

}

.talk{
  
  margin-right:20px;
  width:130px;
  height:40px;
  background:transparent;
  color:#fff;
  font-size:16px;
  border:2px solid rgba(255, 255, 255, 0.521);
  border-radius:15px;
  font-weight:500;
  cursor: pointer;

}
.talk:hover{
  color:rgba(255, 255, 255, 0.521);

}






@media (max-width:940px) {
  .dog{
    font-size:15px;
    margin:0 10px;
  } 
  .head{
    font-size:24px;
  }  
  .foop{
    display:none;
  }
}






@media (max-width:520px){
.dog{
  font-size:14px;
  

}
.head{
  font-size:21px;
}
ul{
  margin-right:10px;
  
}
}


`