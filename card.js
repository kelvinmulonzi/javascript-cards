let cities = [
  {
    title: "nairobi",
    description: "this is nairobi",
    country: "kenya",
    Image: "nairobi.jpg",
  },
  
    {
        title: "kampala",
        description: "this is kampala",
        country: "uganda",
        Image: "url"
        
  }
    ,
        {
            title: "kigali",
            description: "this is kigali",
            country: "rwanda",
            Image: "kigali.jpg"
            
    }
    ,
        {
            title: "dodoma",
            description: "this is dodoma",
            country: "tanzania",
            Image: "url"
            
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
        <p>${country}</p>  ;
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