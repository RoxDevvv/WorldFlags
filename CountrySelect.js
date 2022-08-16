async function GetCountry() {
    const response = await fetch("Countries.json");
    const Countries = await response.json();
    const selectElement = document.getElementById('countries');
    Countries.forEach(country => {
        console.log(country.name + " flag: " + country.alpha2);
    });
    
}
GetCountry();