// const for dom card-container
const cardContainerEl = document.getElementById('card-container');

// const for api
const booleanEndPoint = "https://lanciweb.github.io/demo/api/pictures/";

// call api
fetch(booleanEndPoint)
  .then(response => response.json())
  .then(data => { displayCards(data); })
  .catch(err => console.error(err));


// create card markup
function markup(url, date, place) {
  return `
    <div class="col-12 col-md-6 col-lg-4 d-flex justify-content-center">
      <div class="card">
        <div class="up-card">
          <img class="pin" src="./assets/img/pin.svg" alt>
          <div class="img">
            <img class="image" src="${url}" alt>
          </div>
        </div>
        <div class="down-card">
          <p class="date text-muted">${date}</p>
          <p class="place"><strong>${place}</strong></p>
        </div>
      </div>
    </div>
  `;
}


// add card to html
function displayCards(data) {
  data.forEach(item => {
    const url = item.url;
    const date = item.date;
    const place = item.title;
    cardContainerEl.innerHTML += markup(url, date, place);
  });
}

// get correct image and show overlay
cardContainerEl.addEventListener('click', function (e) {
  if (e.target.classList.contains('image')) {
    const clickedImg = e.target.src;
    const overlayImg = document.querySelector('#overlay img');
    overlayImg.src = clickedImg;
    document.getElementById('overlay').style.display = 'flex';
  }
});


// close button
document.getElementById('btn-close').addEventListener('click', function () {
  document.getElementById('overlay').style.display = 'none';
});