// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const promise = fetch(DOG_URL);
// const doggos = document.querySelector(".doggos");

// function addDoggo(){
//     // show loading spinner
//     const promise = fetch(DOG_URL);
//     promise
//       .then(function(response) {
//           const processingPromise = response.json();
//         return processingPromise;
//       })
//       .then(function(processedResponse) {
//           const img = document.createElement('img');
//           img.src = processedResponse.message;
//           img.alt = "Cute doggo"
//           doggos.appendChild(img);
        
//           // stop showing loading spinner
//       });
    
//     console.log("this will log first");
// }

// document.querySelector('.add-doggo').addEventListener("click", addDoggo);

const BREEDS_URL = `https://dog.ceo/api/breeds/list/all`;

fetch(BREEDS_URL)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
        // console.log(data);
        const breedsObject = data.message;
        const breedsArray = Object.keys(data.message);

        

        for (let i = 0; i < breedsArray.length; i++) {
            const option = document.createElement('option');
            option.value = breedsArray[i];
            option.innerText = breedsArray[i];
            select.appendChild(option);
        }
    })

    const select = document.querySelector('.breeds');

    select.addEventListener("change", function(event) {
        // console.log(event.target.value);
        let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`;

        getDoggo(url)
       
    });

    const img = document.querySelector('.dog-img');
    const spinner = document.querySelector('.spinner');

    function getDoggo(url) {
        spinner.classList.add("show");
        img.classList.remove("show")
        fetch(url)
          .then(function(response) {
              return response.json();
          })
          .then(function(data) {
              img.src = data.message;
            //   spinner.classList.remove("show");
            //   img.classList.add("show");
          })
    }

    img.addEventListener("load", function() {
        spinner.classList.remove("show");
        img.classList.add("show");
    })
    