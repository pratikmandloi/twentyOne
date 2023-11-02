var headers = new Headers();
headers.append("X-CSCAPI-KEY", "bklGOTZyZVFhQnRWV2ltRVhJY1RiRzJLSDRIb0ZCYWNDUm9LUlpUWA==");

var requestOptions = {
   method: 'GET',
   headers: headers,
   redirect: 'follow'
};

fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
.then(response => response.json())
.then(result => {
        const countries = document.getElementById('countries-dropdown');
        // const template = document.getElementById('template')
        countries.innerHTML = "";

    result.forEach((data) => {
        const option = document.createElement('option');
        option.value = `${data.iso2}`;
        option.innerHTML = `${data.name}`;
        option.id = `${data.id}`;
        countries.appendChild(option);
        console.log(option)
    });
    
}).catch(error => console.log('error', error));


fetch("https://api.countrystatecity.in/v1/countries/", requestOptions)
.then(response => response.json())
.then(result => {
        result.forEach((data) => {
            // const iso = data.iso2;
            // const name = data.name;
            // console.log(iso);
            // console.log(name);
        });
    }).catch(error => console.log('error', error));




