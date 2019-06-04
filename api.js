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

      Object.values(data.people).forEach(person => {
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
       
 
