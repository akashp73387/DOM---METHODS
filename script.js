//-----------------------------------------  DOM TREE CREATING METHOD -----------------------------

 // create div tag using dom div ,->p->i, h1 :

 const division = document.createElement("div");
 division.innerHTML="<p><i>i was created a div tag in dom </i></p><h1>look console  for results </h1>"
 document.body.append(division);  
 
 
 //---------------------------------------------------------------------------------------------


// create tags using dom header->nav->ul->li->h1  :

const heading = document.createElement("header");
const navigation = document.createElement("nav");
const unorder = document.createElement("ul");
const listitems = document.createElement("li");
const head = document.createElement("h1");
head.innerHTML="<b>append child in parent </b>";
heading.appendChild(navigation);
navigation.appendChild(unorder);
unorder.appendChild(listitems);
listitems.appendChild(head);
document.body.append(heading);  

//-----------------------------------------------------------------------------------

// create a tag using dom  header -> nav-> ul , main -> section :

const heading1 = document.createElement("header");
const navigation1 = document.createElement("nav");
const unorder1 = document.createElement("ul");
const main = document.createElement("main");
const section = document.createElement("section");
unorder1.innerHTML = "<li>list 1</li><li>list 2</li><li>list 3</li><li>list 4</li><li>list 5</li><li>list 6 </li>";
section.innerHTML="<p>please look console for final result </p>";
heading1.appendChild(navigation1);
navigation1.appendChild(unorder1);
main.appendChild(section);
document.body.append(heading1,main);  


//-------------------------------------- getElementsBy Id,ClassName,TagName--------------------


const id1= document.getElementById("id1");
console.log(id1);

const id2= document.getElementById("id2");
console.log(id2);

const id3 = document.getElementById("id3");
console.log(id3);

const id4 = document.getElementById("id4");
console.log(id4);


const cls = document.getElementsByClassName("cls");  
console.log(cls);                                                     

 //return type of class selector:  "html collection array" 

const tagname= document.getElementsByTagName("div");
console.log(tagname); 

// return type of tagname selector: "html collection array 


//-----------------------------querySelector : id tagname ; queryselectorAll :classname ------------------------------------------

const query= document.querySelectorAll(".cls");   
// class .  id #  
query.innerHTML="HI HELLO!"                                                         
console.log(query);   


//-----------------------------------set attribute classname id name style -----------------------


//*attributes part
heading.setAttribute("class","heading")
heading.classList.add("head","heading1")
heading.classList.remove("head","heading1")
heading.setAttribute("id","container")
heading.setAttribute("style", "background-color:black;color:aqua")




// using function creating the dom tags 

function element (tagname,content,attrname,attrvalue){
    const ele=document.createElement(tagname);
    ele.innerHTML=content;
    ele.setAttribute(attrname,attrvalue);
    return ele;
}
const h1= element("h1","hi hello!","class","cls1");
const header = element("header", "", "class", "cls1");
const nav = element("nav", "", "class", "cls2");
const ul = element("ul", "", "class", "cls3");
const li = element("li", "", "class", "cls4");

h1.appendChild(header);
header.appendChild(nav);
nav.appendChild(ul);
ul.appendChild(li);

document.body.append(h1);
