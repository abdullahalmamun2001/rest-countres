const loadCountres=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data=>displayCountres(data))
}
const displayCountres=(countres)=>{
    const allCountresContainer=document.getElementById('all-countres-container');
    countres.forEach(country => {
        // console.log(country);  
        const createDiv=document.createElement('div'); 
        createDiv.classList.add('row')
        createDiv.classList.add('row-cols-1')
        createDiv.classList.add('row-cols-md-3')
        createDiv.classList.add('g-4')
        createDiv.innerHTML=`
                <div class="col">
                  <div class="card">
                   
                    <div class="card-body">
                      <h5 class="card-title">Name :${country.name.common}</h5>
                      <p class="card-text"></p>
                      <P> Capital :${country.capital ? country.capital :"No capital"}</p>
                      <button class="btn btn-primary" onclick="loadCountryCode('${country.cca2}')">Details</button>
                    </div>
                  </div>
                </div>
        `
        allCountresContainer.appendChild(createDiv);
        
        //console.log(country);
    });

}

const loadCountryCode=code=>{
    const url=`https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayCountycode(data[0]))
}
const displayCountycode=country=>{
    //console.log(country);
    const detailsSection=document.getElementById('details-country');
    detailsSection.innerHTML=`
    <h2> Name :${country.name.common}</h2>
    <h3>Capitl Town :${country.capital}</h3>
    <img src="${country.flags.png}" alt="">
    <P>Country code: ${country.cca2}</p>
    `
    console.log(country);
}

loadCountres();