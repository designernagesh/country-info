let btnSearch = document.querySelector('#btnSearch');

btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    let infoBox = document.querySelector('.infoBox');
    infoBox.style.display = "block";
    let inputCountry = document.querySelector('.inputCountry').value;

    fetch(`https://restcountries.com/v3.1/name/${inputCountry}`)
    .then(response=> response.json())
    .then(data =>  {
        infoBox.innerHTML = `<img src=${data[0].flags.png} alt=${data[0].name.common + 'flag'} />
        <h3>${data[0].name.common}</h3>
        <h4>Capital: ${data[0].capital}</h4>

        <div class="row">
            <div class="col">
                <strong>${data[0].languages.eng}</strong>
                <span>Native Language</span>
            </div>
            <div class="col">
                <strong>${data[0].population}</strong>
                <span>Population</span>
            </div>
            <div class="col">
                <strong>${data[0].region}</strong>
                <span>Region</span>
            </div>
        </div>`
        })
    .catch( error => 'Could not fetch the data : ' + error);

    document.querySelector('.inputCountry').value = "";
})