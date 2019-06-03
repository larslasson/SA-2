// API

const loadingDiv = document.getElementById('card_background');

const loading = document.createElement("p");
const loadingText = document.createTextNode("Fetching data..");
loading.appendChild(loadingText);
loadingDiv.appendChild(loading);
fetch('http://api.open-notify.org/astros.json')
  .then(function(response) {
    response.json().then(function(data) {
      loadingDiv.removeChild(loading);
      console.log(data);

      Object.values(data.people).forEach(person => {
        console.log(person);
        const parentElement = document.getElementById("cards");
        const cardColumn = document.createElement("div");
        const cardContainer = document.createElement("div");
        const cardTitle = document.createElement("h2");
        const cardCraft = document.createElement("h3");
        const cardImg = document.createElement("img")
        

       
        parentElement.appendChild(cardColumn);
        cardColumn.appendChild(cardContainer);
        cardContainer.appendChild(cardImg);
        cardContainer.appendChild(cardTitle);
        cardContainer.appendChild(cardCraft);
        

        cardImg.setAttribute("src", "images/card_img.jpg");
        cardTitle.innerHTML = person.name;
        cardCraft.innerHTML = "Craft: " + person.craft;

        
       
        cardColumn.setAttribute("class", "card-col");
        cardContainer.setAttribute("class", "card-container"); 

        
      });
      
      
    })
    //console.log(JSON.stringify(myJson));
  })
  .catch(function(err) {
    console.log("Fetch error: " + err);
  });

//getting the number of people in space



  fetch('http://api.open-notify.org/astros.json')
  .then((result) => result.json())
  .then((res) => {
      cardSpecific(res);
      

  })
      
    
   .catch(err => console.log(err))
    function cardSpecific(result){
        const amountPeople = document.getElementById("numberPeople");
        
        amountPeople.innerHTML += result.number +" ";
        
      
       }
       
 
/*const loading = document.createElement("p");
const loadingText = document.createTextNode("Fetching data..");
loading.appendChild(loadingText);
content.appendChild(loading);*/

/*fetch('http://api.open-notify.org/astros.json')
  .then(function(response) {
    response.json().then(function(data) {
      console.log(data);

      Object.values(data.people).forEach(person => {
        console.log(person);
        const detailsParent = document.getElementById("content");

        detailsParent.innerHTML +="<h2><b>Name: </b>" + person.name + "</h2>";
        detailsParent.innerHTML +="<h4><b>Craft: </b>" + person.craft + "</h4>";
        

        
      });
      
      
    })
    //console.log(JSON.stringify(myJson));
  })
  .catch(function(err) {
    console.log("Fetch error: " + err);
  });*/




  /*const content = document.getElementById("content");


const header = document.createElement("h1");
const headerText = document.createTextNode("These people are currently in space:");
header.appendChild(headerText);
header.style.marginBottom = "30px";
content.appendChild(header);

const loading = document.createElement("p");
const loadingText = document.createTextNode("Fetching data..");
loading.appendChild(loadingText);
content.appendChild(loading);

fetch('http://api.open-notify.org/astros.json')
  .then(function(response) {
    response.json().then(function(data) {
      content.removeChild(loading);
      console.log(data);

      Object.values(data.people).forEach(person => {
        console.log(person);
        const div = document.createElement("div");
        const h2 = document.createElement("h2");
        const p = document.createElement("p");
        const name = document.createTextNode(person.name);
        const craft = document.createTextNode(person.craft + ' Craft');
        

        p.appendChild(craft);
        h2.appendChild(name);
        div.appendChild(h2);
        div.append(craft);

        div.style.marginBottom = "30px";

        content.appendChild(div);
      });

      
    })
    //console.log(JSON.stringify(myJson));
  })
  .catch(function(err) {
    console.log("Fetch error: " + err);
  });*/