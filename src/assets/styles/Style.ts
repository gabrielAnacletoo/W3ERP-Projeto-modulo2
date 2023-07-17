import styled from "styled-components";

export const ErrorDiv = styled.div`
text-align:center;
.page_404{ padding:40px 0; background:#fff;
}

.page_404  img{ width:100%;}

.four_zero_four_bg{
 
 background-image: url('https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif');
    height: 400px;
    background-position: center;
 }
 
 
 .four_zero_four_bg h1{
 font-size:80px;
 }
 
  .four_zero_four_bg h3{
       font-size:80px;
       }
       
       .link_404{      
    text-decoration:none;
    color: #fff!important;
    padding: 10px 20px;
    background: #39ac31;
    margin: 20px 0;
    display: inline-block;}
  .contant_box_404{ margin-top:-50px;}
`;

//Start from login Screen
export const LoginForm = styled.div`
   display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  height: 100vh;
  width: 100%;

  h2 {
    font-family: 'Sora', sans-serif;
    font-size:25px;
    color:#212121;
}
p {
    font-family: 'Sora', sans-serif;
    font-size:13px;
    color:#424242;
}
a {
    text-decoration:none;
    color: #616161;
}
.Form {
    margin-left:25%;
}
.buttonsForm {
display:flex;
align-items:center;
justify-content:space-between;
font-size:13px;
}   
.input-field {
  margin-top:10px;
  position: relative;
  width: 300px;
  height: 44px;
  line-height: 44px;
}
label {
  position: absolute;
  top: 0;
  left: 5px;
  width: 100%;
  color: #d3d3d3;
  transition: 0.3s all;
  cursor: text;
}
.inputData {
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0.5rem 0 0.5rem 10px;
  border-radius:10px;
  border: 2px solid #d3d3d3;
  box-shadow: none;
  color: #111;
}
.password-toggle{
    background-color: transparent;
    cursor: pointer;
    border:none;
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
}
input:invalid {
  outline: 0;
}
input:focus,
input:valid {
  border-color: #00dd22;
}
input:focus~label,
input:valid~label {
  font-size: 14px;
  top: -27px;
  color: #00dd22;
}
@media screen and (max-width: 768px) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  height: 100vh;
  width: 100%;
  .Form {
    margin-left:1%;
}
}
`
export const ImageLogin = styled.div`
width:23%;
> img {
    max-width: 520px;
    max-height: 100%;
    object-fit: contain;
}
@media screen and (max-width: 768px) { 
>img {
  width:0px;
}
}
`


export const BtnLogin = styled.button`
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
    cursor: pointer;
    width:300px;
    height:40px;
    margin-top:10px;
    background-color: #001C98;
    color:#fFF;
    border:none;
    border-radius:10px;
`

//Start navside
export const ContainerHome = styled.div`
display:flex;
flex-direction:row;
justify-content: space-between;
height:100vh;
@media screen and (max-width: 768px) { 
  display:flex;
flex-direction:column;
justify-content: space-between;
height:100vh;
}
`

//Nav side
export const NavSideBar = styled.div`
display:flex;
flex-direction:column;
background-color: #001C98;
color: #fff;
width:15%;
height:90vh;
align-items:center;
nav {
    margin-top:40px;
}
ul {
    list-style:none;
}
ul > li {
    margin-top: 36px;
    display: flex;
    align-items: center; 
  }
 .DashImg {
    margin-right:10px;
    width:20px;
}
.Logo {
    width:150px;
}
ul > li a{
color:#fff;
text-decoration:none;
}
@media screen and (max-width: 768px) {
  display: flex;
flex-direction: row;
background-color: #001C98;
color: #fff;
justify-content: center;
align-items: center;
width: 100%;
height: 35px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  ul {
    list-style: none;
    text-align: center;
    margin-top:0;
  }
  
  ul > li {
    display: inline-block;
    margin:0 10px 43px 0;
    align-items: center;
    font-size:10px;
  }
  
  .DashImg {
    margin-right: 10px;
    width: 10px;
  }
  
  .Logo {
    display: none;
  }
  
  ul > li a {
    color: #fff;
    text-decoration: none;
  }
}


`
//Contact
export const Contact = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  width:90%;
  height:150px;
  margin:100px 0 0 0;
  background-color:#796CE0;
  border-radius:20px;
 p {
  margin-top:40px;
  text-align:center;
  font-size:13px;
 }
.Hands {
  position:absolute;
  top:295px;
  width: 9.5%;
}
@media screen and (max-width: 768px) { 
  display: none;
}
`
//Button Contact 
export const BtnContact = styled.button`
border-radius:18px;
background-color: #001C98;
color:#fff;
border:none;
font-weight:800;
padding:10px 35px;
margin:5% 0 0 0;
cursor: pointer;
@media screen and (max-width: 768px) { 
  display: none;

}
`

export const ContentGroup = styled.div`
display:flex;
flex-direction:column;
width:84%;
`
//profile components
export const ProfileStyle = styled.div`
display:flex;
align-items:center;
margin:8px 20px;
justify-content:end;
.Profileimage {
    width:45px;
}
.downArrow {
    cursor:pointer;
    width:18px;
}
@media screen and (max-width: 768px) { 
position:absolute;
right:0;
top:4px;
align-items:center;
justify-content:end;
font-size:14px;
.Profileimage {
    display:none
}
.downArrow {
    cursor:pointer;
    width:14px;
}
}

`
export const UserContent = styled.div`
    margin-right:10px;
    display:flex;
    flex-direction:column;
`
export const Menu =styled.div`
display:flex;
flex-direction:column;
`

export const CardLogOut  = styled.div` 
  cursor: pointer;
  position:absolute;
  top:50px;
  right:25px;
  padding:10px 0 2px 0;
  border-radius:14px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  display:flex;
  flex-direction:column;
  transition:1s ease ;
  .sair {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
    div {
      margin:0 10px;
    }
    img {
      width:20px;
    }
  }
button {
      cursor: pointer;
      background: transparent;
      border:none;
      font-size:15px;
      height:40px;
  }
  hr {
    width:185px;
  }
  @media screen and (max-width: 768px) { 
  position:absolute;
  top:15px;
  z-index:1;
  right:-3px;
  padding:5px 0 2px 0;
  border-radius:11px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  display:flex;
  flex-direction:column;
  transition:1s ease ;
  .sair {
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
    
    div {
      margin:0 6px;
    }
    img {
      width:14px;
    }
  }
button {
      background: transparent;
      border:none;
      font-size:11px;
      height:15px;
  }
  hr {
    width:100%;
  }
}
`


export const Backmodal = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px); 
  
  @media screen and (max-width: 768px) { 
  position:fixed;
  left:0;
  width: 360px;
  height: 100vh;
  }
`;




export const ModalConfirm = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 5;
  display: flex;
  justify-content: center;
  flex-direction:column;
  align-items: center;
  transform: translate(-50%, -50%);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  width: 20%;
  height: 30%;
  background-color: #fff;
  border-radius:7px;
  .DivButtons {
    display:flex;
    flex-direction:row;
      align-items:center;
    > .Yes , .No {
      margin-top:30px;
      border:none;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
      border-radius:5px;
    }
    > .Yes {
      border:none;
      width:70px;
      height:40px;
      background-color:#001C98;
      color:#fff;
    }
    > .Yes:hover {
      background-color:#0f2689;
    }
    > .No {
      border:0.1em solid dimgray;
      width:70px;
      height:40px;
      margin-right: 40px;
     }
     > .No:hover {
      background-color:#e2e2e2;
     }
  }
  @media screen and (max-width: 768px) { 
  width: 70%;
  height: 30%;
  }
`;



//Dashboard
export const ContainerDashBoard = styled.div`
border-radius:20px;
background-color:#001C98;
margin-right:1%;
height:36%;
@media screen and (max-width: 768px) { 
border-radius:0;
width:100vw;
background-color:#001C98;
height:25%;
}
`
export const Filter = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width:97%;
margin:3% 0 0 15px;
h2 {
    color: #fff;
}
`
export const FilterMonth = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
background-color:#fff;
align-items:center;
font-size:15px;
padding:3px 7px;
width:auto;
border-radius:5px;
font-weight:200;
>div {
  display:flex;
  align-items:center;
}
span{
  margin-right:8px;
}
img { 
  cursor: pointer;
  width:20px;
  height:23px;
  margin-right:8px;
}
.SelectMonth{
  font-weight:500;
  color:#001C98;
  cursor: pointer;
  > img {
    width:17px;
    height:16px;
    padding:0;
    margin:0;
  }
}
@media screen and (max-width: 768px) { 
  display: none;
}
`
export const MonthModal = styled.div`
  position: absolute;
  align-items: center;
  top: 130px;
  right: 30px;
  width: 120px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  overflow:hidden;
  height:0;
  border-radius:6px;
  transition: height 1s ease;
 &.active {
  height:90px;
 }
`;



export const DivCards = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:45px 0 0 0;
@media screen and (max-width: 768px) { 
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    align-items:center;
    margin:0 0 0 0;
    height:150px;
    text-align:center;
}
`
//Info cards Recharts
export const DivInfo = styled.div`
  display:flex;
  justify-content:start;
  align-items:center;
  height:50%;
  border-radius:10px;
  color:#fff;
  width:23%;
  background-color: #02156A;
  div > {
    display:flex;
    flex-direction:column;
    align-items:center; 
}
 p {
    font-size:13px;
 }
  .NumTotal{
    font-weight:600;
    color: #fff;
    font-size:30px;
    margin: 0 10% 0 0;
  }
  .PercentPositive {
    position:relative;
    top:-3px;
    font-size:15px;
    border-radius:20px;
    padding:0 10%;
    background-color:#00C247;
    color: #fff;
  }
  .PercentNegative { 
    background-color: #FF3333;
    position:relative;
    top:-3px;
    font-size:15px;
    border-radius:20px;
    padding:0 10%;
    color: #fff;
  }
@media screen and (max-width: 768px) { 
  display:flex;
  align-items:center;
  height:70%;
  border-radius:10px;
  color:#fff;
  width:23%;
  background-color: #02156A;
  > ChartComponent1 {
    display: none; 
  }
  div > {
    display:flex;
    flex-direction:column;
    align-items:center; 
}
 p {
    font-size:11px;
 }
  .NumTotal{
    font-weight:500;
    color: #fff;
    font-size:15px;
    margin: 0 1% 0 0;
  }
  .PercentPositive {
    position:relative;
    top:0;
    font-size:11px;
    border-radius:20px;
    padding:0 4%;
    background-color:#00C247;
    color: #fff;
  }
  .PercentNegative { 
    background-color: #FF3333;
    position:relative;
    top:0;
    font-size:11px;
    border-radius:20px;
    padding:0 4%;
    color: #fff;
  }
}
`


//tables 
export const ContainerTables = styled.div`
margin: 2% 0 0 0;
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
width: 98%;
max-height:45%;
background-color:#fff;
@media screen and (max-width: 768px) { 
margin:5% 0 0 10%;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
width: 100%;
max-height:45%;
background-color:#fff;
}
`
//card
export const CardTables = styled.div`
box-shadow: 0 2px 4px rgba(0,0,0,0.5);
background-color:#fff;
width:49%;
border-radius:10px;
height:auto;
align-items:center;
@media screen and (max-width: 768px) { 
position:absolute;
flex-direction:column;
top:43%;
width:340px;
margin-bottom:20px;
}
`

export const CardTableBelow = styled.div`
box-shadow: 0 2px 4px rgba(0,0,0,0.5);
background-color:#fff;
width:49%;
border-radius:10px;
height:auto;
align-items:center;
@media screen and (max-width: 768px) { 
position:absolute;
flex-direction:column;
top:68%;
width:340px;
margin-bottom:20px;
}
`


//Buttons table
  export const MenuTables = styled.div`
  margin: 1% 0 0 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  padding:2% 4%;
  justify-content:space-between;
  span {
    font-size:15px;
  }
  .BtnToggle {
    width:170px;
    align-items:center;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border-radius:5px;
    padding: 0.5% 0.5%;
    background-color:#F5F5F5;
    border:1px solid #E0E0E0;
  }
  .BtnGreen {
  cursor:pointer;
  border:none;
  border-radius:5px;
  padding: 2% 8%;
  background-color:#00C247;
  color: #fff;
  }
  .BtnRed {
  border:none;
  cursor:pointer;
  border-radius:5px;
  padding: 2% 8%;
  background-color:#FF3333;
  color: #fff;
  }
  .BtnGray {
    border:none;
    cursor: pointer;
    color:#9E9E9E;
  }
  .BtnGreen, .BtnRed {
  transition: background-color 0.9s ease;
}
  .ContainerProducts{
    display:flex;
    align-items:center;
  }
  .Products {
    padding:7px;
    border-radius:8px;
    background-color:#C5CFFF;
    margin-right:8%;
  }
  .Clients {
    padding:7px;
    border-radius:8px;
    background-color:#001C98;
    margin-right:8%;
  }
  @media screen and (max-width: 768px) { 
  margin: 1% 0 0 0;
  display:flex;
  flex-direction:row;
  align-items:center;
  padding:2% 4%;
  justify-content:space-between;
  span {
    font-size:13px;
  }
  .BtnToggle {
    width:140px;
    align-items:center;
    display:flex;
    flex-direction:row;
    justify-content:space-around;
    border-radius:5px;
    padding: 0.5% 0.5%;
    background-color:#F5F5F5;
    border:1px solid #E0E0E0;
  }
  .BtnGreen {
  cursor:pointer;
  border:none;
  border-radius:5px;
  padding: 1% 5%;
  background-color:#00C247;
  color: #fff;
  }
  .BtnRed {
  border:none;
  cursor:pointer;
  border-radius:5px;
  padding: 1% 5%;
  background-color:#FF3333;
  color: #fff;
  }
  .BtnGray {
    border:none;
    cursor: pointer;
    color:#9E9E9E;
  }
  .BtnGreen, .BtnRed {
  transition: background-color 0.9s ease;
}

  }
`
//table
export const Table = styled.div`
display:flex;
justify-content:center;
padding:0 0 2% 0; 
overflow: auto;
height:250px;
table {
  align-items:center;
  width:95%;
  border-collapse: collapse;

}
.RadiusLeft {
  border-top-left-radius:10px;
}
.RadiusRight {
  border-top-right-radius:10px;
}
  th {
  font-size:14px;
  padding:1% 0;
  font-weight: normal;
  background-color:#001C98;
  color: #fff;
  border-collapse: collapse;
}
tr:nth-child(even) {
    background-color: #F5F5F5; /* Cor para as linhas pares */
  }

  tr:nth-child(odd) {
    background-color: #C0C0C0	; /* Cor para as linhas ímpares */
  }
td {
  line-height:35px;
  font-size:13px;
  color:#212121;
  text-align:center;
  img {
    margin-top:15px;
    width:20px;
  }
}
tr:hover {
  transform: scale(1.02);
  transition: transform 0.2s ease-in-out;
}
.IconDelete {
  cursor:pointer;
}
@media screen and (max-width: 768px) { 
display:flex;
justify-content:center;
padding:0 0 2% 0; 
overflow: auto;
height:250px;
table {
  align-items:center;
  width:99%;
  border-collapse: collapse;

}
}
`
export const TableChildren = styled.div`
display:flex;
justify-content:center;
padding:0 0 2% 0; 
overflow: auto;
table {
  align-items:center;
  width:95%;
  border-collapse: collapse;

}
.RadiusLeft {
  border-top-left-radius:10px;
}
.RadiusRight {
  border-top-right-radius:10px;
}
  th {
  font-size:14px;
  padding:1% 0;
  font-weight: normal;
  background-color:#001C98;
  color: #fff;
  border-collapse: collapse;
}
tr:nth-child(even) {
    background-color: #F5F5F5; /* Cor para as linhas pares */
  }

  tr:nth-child(odd) {
    background-color: #C0C0C0	; /* Cor para as linhas ímpares */
  }
td {
  line-height:38px;
  font-size:13px;
  color:#212121;
  text-align:center;
  img {
    margin-top:15px;
    width:20px;
  }
}

`


//Predictions 
export const CardSearch = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px 0 0 0;
  width: 98%;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding:3% 0;

  img {
  width:22px;
  } 

  input {
    margin: 0 0 0 15px;
    padding: 11px 0 11px 10px;
    width: 280px;
    border-radius: 8px;
    border: 1px solid #E0E0E0;
  }
  
  .BtnSearch {
    background-color:transparent;
    position:relative;
    left:-42px;
    top:2px;
    padding: 8px;
    border:none;
    cursor: pointer;
  }
  .Filter {
    border-radius:6px;
    position:relative;
    left:-25px;
    top:1px;
    padding: 9px;
    border:none;
    cursor: pointer;
  }
  @media screen and (max-width: 768px) { 
    position:absolute;
    top:5%;
    width: 350px;
    margin:15px 0 0 5px;
  }
`;

export const GridCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  width: 98%;
  overflow:auto;
  height:85%;
  @media screen and (max-width: 768px) { 
    position:absolute;
    top:22%;
    width: 350px;
    margin:15px 0 0 15px;

  }
`;


export const CardClient = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  flex-basis: calc(25% - 10px);
  height: 200px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0 10px 20px 0;
  @media screen and (max-width: 768px) {
    flex-basis: calc(50% - 10px);
  }
`;

export const Cardheader = styled.div`
display:flex;
flex-direction:row;
justify-content:space-around;
margin:15px 0;
align-items:center;
button {
  border:none;
  background-color:transparent;
}
span {
  background-color:#C5CFFF;
  padding:10px 12px 7px 12px;
  border-radius:50%;
}
img {
  width:20px;
}
@media screen and (max-width: 768px) {
display:flex;
flex-direction:row;
justify-content:space-around;
margin:5px 0;
  img {
  width:15px;
}
span {
  background-color:#C5CFFF;
  padding:8px 11px 5px 11px;
  border-radius:50%;
}
}
`

export const ProductInfo = styled.table`
background-color: #EEEEEE;
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto;
height:50%;
width:75%;
border-radius:12px;
overflow:auto;

th {
  width:120px !important;
  padding:0;
  margin:0;
  font-size:13px;
  font-weight:normal;
  color:#796CE0;
}
td {
  padding: 2.5px 0 0 0;
  font-size:15px;
}
@media screen and (max-width: 768px) {
background-color: #EEEEEE;
display:flex;
flex-direction:column;
align-items:center;
margin:0 auto;
height:50%;
width:100%;
border-radius:12px;
overflow:auto;
}
th {
  width:6em;
  padding:0;
  margin:0;
  font-size:10px;
  font-weight:normal;
  color:#796CE0;
}
td {
  padding: 1.5px 0 0 0;
  font-size:10px;
}
`

import Bg from '@/assets/images/fundoPrediction.png'

export const HeaderPrediction = styled.div`
  display:flex;
  border-radius: 10px;
  background-image: url(${Bg});
  background-color: #001C98;
  margin-top: 25px;
  width: 100%;
  height: 125px;
 
  img {
    width: 100%;
    height: 100%;
    filter: brightness(0.9) saturate(1) opacity(0.9);
  }
  span {
    color:#fff;
  }
  h2 {
    margin:20px 0 0 20px;
    color: #fff !important;
  }

  .IconInfo {
    width: 20px;
    height:20px;
  }
`;
export const Info = styled.div`
  position: absolute;
  top: 27%;
  left: 16%;
  text-align: center;
  font-size: 14px;

  > div {
    position:relative;
    display: inline;
    align-items: center;
    color: #fff;
    top:40px;
    margin:15px 15px 0 25px;
  }

  img {
    margin-right: 5px;
    width: 16px;
    vertical-align: middle;
  }
`;




//Products
export const ContainerProducts = styled.div`
display: flex;
justify-content:start;
align-items:center;
margin: 2% 0 0 0;
height:auto;
.RadiusLeft {
  border-top-left-radius:10px;
}
.RadiusRight {
  border-top-right-radius:10px;
}
table {
  border-collapse: collapse;
  width:98%;
  text-align:center;
  font-size:13px;
  
}
th {
  font-size:1rem;
  padding:1% 0;
  font-weight: normal;
  background-color:#001C98;
  color: #fff;
}
tr:nth-child(even) {
    background-color: #F5F5F5; /* Cor para as linhas pares */
  }

  tr:nth-child(odd) {
    background-color: #FAFAFA; /* Cor para as linhas ímpares */
  }

.RedResult {
  background-color: #FFE1E1;
  padding:2% 3%;
  border-radius:7px;
  color:#FF3333;
}
.GreenResult {
  padding:2% 3%;
  border-radius:7px;
  background-color:#D9FEE6;
    color: #00C247;
}
tr {
align-items:center;
height:50px;
}
.ColumProduct {
  width:35%;
}
td {
  cursor: pointer;
}
tr:hover {
    transform: scale(1.01); /* Aplica o zoom */
    transition: transform 0.2s ease-in-out; /* Adiciona uma transição suave */
  }
  @media screen and (max-width: 768px) {
position:absolute;
width:100%;
top:22%;
  table {
  width:98%;
  text-align:center;
  font-size:10px;
  margin-left:1%;
  }
}
`
export const BtnPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 1% 2%;
  @media screen and (max-width: 768px) {
position:absolute;
top:18%;
right:0;
  }

  button {
    background-color: transparent;
    border: none;
    margin: 0 5px;
    padding: 2px 8px;
    cursor: pointer;
    color: #9e9e9e;
    transition: transform 0.2s; 
  }

  .SelectedPage {
    border-radius: 4px;
    background-color: #001c98;
    color: #fff;
    font-weight: 600;
  }

  button:hover {
    color: #696969;
    transform: scale(1.05); 
  }
`;


//product description 
export const ContainerDetails = styled.div`
border-radius:20px;
background-color:transparent;
margin-right:1%;
width:98%;
height:36%;
h2 {
  color:#001C98;
}
@media screen and (max-width: 768px) {
margin-right:1%;
width:100%;
height:29%;
h2 {
  color:#001C98;
}
}
`

export const CardDetails = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-evenly;
    height:50%;
    align-items:center;
    margin:10px 0 0 0;
    @media screen and (max-width: 768px) {
      position:absolute;
      top:20%;
      height:18%;
      justify-content:space-around;
    }
  
`

export const DivDetails = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  align-items:center;
  border-radius:10px;
  width:19%;
  height:80%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
 
  > div {
    width:100%;
    margin: 7% 0 0 30%;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
}

 p {
    font-size:13px;
 }

  .NumTotal{
    font-weight:600;
    color: #001C98;
    font-size:30px;
    margin: 0 10% 0 0;
  }
  .PercentPositive {
    position:relative;
    top:-3px;
    font-size:15px;
    border-radius:20px;
    padding:0 7%;
    background-color:#00C247;
    color: #fff;
  }
  .PercentNegative { 
    background-color: #FF3333;
    position:relative;
    top:-3px;
    font-size:15px;
    border-radius:20px;
    padding:0 10%;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    width:100%;
    flex-basis: calc(25% - 10px);
    width:70%;
    height:90%;
    word-break: keep-all;
  }
  p {
    font-size:12px;
 }
`


export const Div120 = styled.div`
  display:flex;
  justify-content:space-between;
  flex-direction:column;
  align-items:center;
  border-radius:10px;
  width:19%;
  height:80%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.5);
  background-color: #001C98;
  > div {
    width:100%;
    margin: 7% 0 0 30%;
    flex-direction:column;
    flex-wrap:wrap;
    align-items:center;
}

 p {
  color:#fff;
    font-size:13px;
 } 
  .NumTotal{
    font-weight:600;
    color: #fff;
    font-size:30px;
    margin: 0 10% 0 0;
  }
  .PercentPositive {
    position:relative;
    top:-3px;
    font-size:15px;
    border-radius:20px;
    padding:0 10%;
    background-color:#00C247;
    color: #fff;
  }
  .PercentNegative { 
    background-color: #FF3333;
    position:relative;
    top:-3px;
    font-size:15px;
    border-radius:20px;
    padding:0 10%;
    color: #fff;
  }
  @media screen and (max-width: 768px) {
    width:100%;
    flex-basis: calc(25% - 10px);
    width:70%;
    height:90%;
    word-break: keep-all;
  }
  p {
    font-size:12px;
 }
`

export const TopDetails = styled.div`
display:flex;
flex-direction:column;
margin-left:1%;
> div {
  display:flex;
  align-items:center;
  flex-direction:row;
  margin:20px 0 0 0;
}
.BtnBack{
  text-align:center;
  background-color:#EEEEEE;
  border-radius:50%;
  padding:5px 8px 1px 8px;
  margin-right:20px;
  cursor:pointer;
}
@media screen and (max-width: 768px) {
position:absolute;
top:4%;
}

`
export const MenuDetails = styled.div`
display:flex;
flex-direction:row;
margin:25px 0 10px 10px;
align-items:center;

  .Down { 
    padding:8px 9px 5px 9px;
    background-color:#FF3333;
    border-radius:5px;
    margin-right:20px;
  }
  .UP { 
    padding:8px 9px 5px 9px;
    background-color:#00C247;
    border-radius:5px;
    margin-right:20px;
  }
  .Clock {
    padding:8px 9px 5px 9px;
    background-color:#EEEEEE;
    border-radius:5px;
    margin-right:20px;
  }
  .Exhausting {
    padding:8px 9px 5px 9px;
    background-color:#FFE1E1;
    border-radius:5px;
    margin-right:20px;
  }
  .EXfont {
    color:#FF3333;
  }

`
export const HeaderDetails = styled.div`
  display:flex;
  align-items:center;
  margin-bottom:3%;
`

//modal filter
export const CardModal = styled.div`
  position:absolute;
  width: 300px;
  height: 195px;
  left:528px;
  top:155px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  z-index:2;
  .title {
    font-weight:bold;
  }
  > span {
    font-size:15px;
    margin: 45px 0 0 15px;
  }
  @media screen and (max-width: 768px) {
  width: 300px;
  z-index:3;
  height: 195px;
  left:0;
  top:80px;
  }
`;

export const BtnAplly = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    button {
    background-color:#001C98;
    color:#fff;
    border:none;
    height:35px;
    font-size:1.1em;
    border-radius:5px;
    width:97%;
    cursor:pointer;
    }
`
export const InfoFilter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size:14px;
  
  .textAlign {
    text-align:end;
    margin-right:10px;
  }
  >div {
    margin:2% 0;
    width:300px;
  }
  > div > input {
    margin-right:2%;
    width:12%;
  }
`;


//responsive
