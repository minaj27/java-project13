const mainDiv = document.getElementById("main");

const h3 = document.createElement("h3");
h3.innerText = "SignUp Form";
mainDiv.appendChild(h3);

function generateElement(placeholder,inputType,btnId,btnText,txtId){
const d1 = document.createElement("div");
const t1 = document.createElement("input");
const b1 = document.createElement("button");

d1.setAttribute("class","input-group mb-3");

t1.setAttribute("type",inputType);
t1.setAttribute("class","form-control");
t1.setAttribute("placeholder",placeholder);
t1.setAttribute("aria-describedby",btnId)
t1.setAttribute("id",txtId)

b1.setAttribute("class","btn btn-outline-secondary");
b1.setAttribute("type","button");
b1.setAttribute("id",btnId);
b1.innerText=btnText ;

d1.appendChild(b1);
d1.appendChild(t1);

mainDiv.appendChild(d1);
}
generateElement("User Name","text","btn","ok","user");
generateElement("password","password","btn2","Enter","pass");
generateElement("Retype password","password","btn3","verify","veri");
generateElement("Email Id","email","btn4","@","email");
generateElement("Mobile No","number","btn5","Number","mob");
generateElement("city","text","btn6","check","cit");
generateElement("Color","color","btn7","Enter color","bgclr")

function handleSubmit(){
    const objBG = document.getElementById("bgclr");
    const bgDiv = document.getElementsByClassName("clrdiv")[0];
    bgDiv.style.backgroundColor=objBG.value;
}

const btn1 = document.createElement("button");
btn1.setAttribute("class","btn btn-warning");
btn1.setAttribute("onclick","handleSubmit()");
btn1.innerText= "Submit"

const btn2 = document.createElement("button")
btn2.setAttribute("class","btn btn-danger")
btn2.innerText="Cancel"

mainDiv.appendChild(btn1);
mainDiv.appendChild(btn2);

const d2 =document.createElement("div")
d2.setAttribute("class","clrdiv");
d2.style.backgroundColor="pink"
d2.innerText = "Life is full of colors"

mainDiv.appendChild(d2);

mainDiv.parentElement.appendChild(d2);