
// Creating the Input Search text-Box and giving it a class-name and placeholder.Then appending the element to the body.

const search = document.createElement("input");
search.setAttribute("class","search-content");
search.setAttribute("placeholder","Search by names")
document.body.append(search);

// Creating a function to print only the particular details from the API such as name,type etc...
// creating a div element and giving the innerhtml for all details as needed.
// The important part here is appending it to the another div class named as holder-content,the holder-content is appended to the body  

function breweriesAPI({name,brewery_type,street,city,state,country,website,phone}){
    console.log(name);
const breweries = document.createElement("div");
breweries.setAttribute("class","breweries-list");
breweries.innerHTML = `<div class="container">
<h2 class="breweries-name">Breweries name :${name}</h2>
<h2 class="breweries-type">Type of Breweries:${brewery_type}</h2>
<p class="address">Address: ${street} ${city} ${state}  ${country}</p>
<a href="For Details:${website}"></a>
<p class="phone">Contact Us:${phone}</p>
</div>`;
holder.append(breweries);
}

// The holder content is appended to the body bcoz,it helps in clearing the whole innerhtml part to create the forth coming API data. 
const holder = document.createElement("div");
holder.setAttribute("class","holder-content");

document.body.append(holder);


// The function breweriesList is created to fetch API data using await.
// The function loaddata provides the data fetched from API as per the requirement(i.e:Loaddata(breweries) takes parameter to give the whole API data,
// whereas in the Loaddata(newBreweries) takes parameter to check the eventlistener and return only the data that matches only the items given in the search)
let breweriesObj;
async function breweriesList(){
    try{
 const data = await fetch("https://api.openbrewerydb.org/breweries");
  breweriesObj = await data.json(); 
  loaddata(breweriesObj) 
    }
    catch(err){
        console.log("Sorry there is an error in Fetching the API ");
    }
}

//Here Loaddata clears the holder's innerhtml to avoid overwriting the already placed API data.It clears the already present data.

function loaddata(breweriesObj){
    holder.innerHTML="";
    console.log("cleared data");
breweriesObj.forEach((user) => breweriesAPI(user));
}
// Adding eventlistener to the search element for searching the name of the breweries as per the input data given.It compares with the content variable to check the NAME data from the API 
search.addEventListener("keyup",(e) =>{
    const content = e.target.value.toLowerCase();
    const newBreweries = breweriesObj.filter((brews) => brews.name.toLowerCase().includes(content))
    loaddata(newBreweries);
     })
// Calling the function to display the API data using await/async function.
breweriesList();



    






