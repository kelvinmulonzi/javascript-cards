let cities = [
  {
    title: "nairobi",
    description: "this is nairobi",
    country: "kenya",
    Image: "kampala.png",
  },
  
    {
        title: "kampala",
        description: "this is kampala",
        country: "uganda",
        Image: "kampala.png"
        
  }
    ,
        {
            title: "kigali",
            description: "this is kigali",
            country: "rwanda",
            Image: "kampala.png"
            
    }
    ,
        {
            title: "dodoma",
            description: "this is dodoma",
            country: "tanzania",
            Image: "kampala.png"
            
    }

];
function displayCities({title, description, country, Image}) {
    return `
    <div class="card1">
      <img src="${Image}" alt="">
      <div class="card-title">
        <h3>${title}</h3>
        <div class="card-body">
        <p>${description}</p>  
        <p>${country}</p>  
        
        </div>
        </div>

    </div>
`;
}
let cardholder = document.getElementById ("card");
let citynames = cities.map((mycity)=>{
    return displayCities(mycity);       
});
cardholder.innerHTML = citynames;
document.addEventListener("DOMContentLoaded", () => {
  cities.forEach((city, index) => {
    const likeButton = document.createElement("button");
    likeButton.innerText = "Like";
    likeButton.classList.add("like-button");
    
    const likes = localStorage.getItem(`likes-${index}`) || 0;
    const likesDisplay = document.createElement("span");
    likesDisplay.innerText = `Likes: ${likes}`;
    likesDisplay.classList.add("likes-display");

    likeButton.addEventListener("click", () => {
      let currentLikes = parseInt(localStorage.getItem(`likes-${index}`) || 0);
      currentLikes++;
      localStorage.setItem(`likes-${index}`, currentLikes);
      likesDisplay.innerText = `Likes: ${currentLikes}`;
    });

    const card = document.querySelectorAll(".card1")[index];
    card.appendChild(likeButton);
    card.appendChild(likesDisplay);
  });
});