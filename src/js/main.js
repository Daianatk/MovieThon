// Aqui debe ir el manejo del Dom
/*const buttonWelcome=document.getElementById('button-welcome');
const pageWelcome=document.getElementById('page-welcome');
const home =document.getElementById('home');
const pageHome=document.getElementById('page-home');
const header=document.getElementById('logo-box');
const footer=document.getElementById('footer');*/

/*const pages = (pageToShow) => {
  [pageWelcome, pageHome].map(page => {
    page.classList.add('hide');
    page.classList.remove('show')
  })
  pageToShow.classList.add('show');
  pageToShow.classList.remove('hide')
}

buttonWelcome.addEventListener('click', () => {
  pages(pageHome);
  header.classList.add('show')
  header.classList.remove('hide')
  footer.classList.add('show')
  footer.classList.remove('hide')
});*/

// Probando Data desde OMDB.

const all = document.getElementById('all')

const dataMovie =['tt1457767','tt3065204','tt7069210','tt0217869', 'tt4972582', 'tt6823368','tt0195714', 'tt0309593', 'tt0414982', 'tt1144884', 'tt1622979', 'tt1179904', 'tt1536044', 'tt1778304', 'tt2109184','tt2473682', 'tt2473510', 'tt1728179', 'tt0295297', 'tt0304141', 'tt0330373', 'tt0373889', 'tt0417741', 'tt0926084',  'tt1201607', 'tt0120737', 'tt0167261',  'tt0167260','tt0121765', 'tt0121766', 'tt0120915', 'tt2488496', 'tt0086190', 'tt0080684', 'tt0076759', 'tt0088763', 'tt0096874', 'tt0099088', 'tt0848228', 'tt2395427', 'tt4154756','tt0325980','tt0383574','tt0449088','tt1298650','tt1790809','tt1099212', 'tt1259571', 'tt1325004', 'tt1324999', 'tt1673434', 'tt2322441', 'tt4465564', 'tt4477536', 'tt0126029', 'tt0298148', 'tt0413267', 'tt0892791','tt0114709', 'tt0120363', 'tt0435761']

const randomMovie = dataMovie.map((item) => {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=9549174c')
.then(res => res.json())
 .then(data => {
 document.getElementById('allMovies').innerHTML += cardCreate(data);

})

})

all.addEventListener('click', () => {
  dataMovie.map((item) => {
    fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=9549174c')
    .then(res => res.json())
     .then(data => {
     document.getElementById('allMovies').innerHTML += cardCreate(data);
    
    })
    
    })
}
)

cardCreate=(data)=>{
  return   `
        <div class="col-12 col-sm-6 col-md-3">
          <div class="card">
                  <img class="card-img-top" src="${data.Poster}" alt="Poster">
                  <div class="card-body">
                  <h5 class="card-title">${data.Title} (${data.Year}) </h5>
                  <strong><p> ${data.Runtime}</p></strong>
                  <p><strong>Country:</strong> ${data.Country}</p>
                  <p><strong>Plot:</strong> ${data.Plot}</p>
                  <p><strong>Director:</strong> ${data.Director}</p>
                  <p><strong>Casting:</strong> ${data.Actors}</p>
                  <p><strong>Rating:</strong> ${data.imdbRating}</p>
                  <p><a target="_blank" href="https://www.youtube.com/watch?v=wkph6JOqDfA">Trailer</a></p>
                  </div>
          </div>
    </div> `
}

//suspense Movies

const arraySuspenseMovies =['tt1457767','tt3065204','tt7069210','tt0217869', 'tt4972582', 'tt6823368']

const suspenseMovies = () =>{
  arraySuspenseMovies.map((item) => {
 fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
   .then(res => res.json())
    .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);

    })

 })
 }

document.getElementById("suspense").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = suspenseMovies();
})

///Horror Movies

const arrayHorrorMovies =['tt0195714','tt0309593', 'tt0414982', 'tt1144884', 'tt1622979', 'tt1179904', 'tt1536044', 'tt1778304', 'tt2109184', 'tt2473682', 'tt2473510', 'tt1728179']

const horrorMovies = () =>{
  arrayHorrorMovies.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);
    })
 })
 }
  document.getElementById("horror").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = horrorMovies();
})

//Fantasy Movies

const arrayFantasyMovies =['tt0241527', 'tt0295297', 'tt0304141', 'tt0330373', 'tt0373889', 'tt0417741', 'tt0926084', 'tt1201607','tt0120737','tt0167261','tt0167260']

const fantasyMovies = () =>{
  arrayFantasyMovies.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);
    })
 })
 }
  document.getElementById("fantasy").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = fantasyMovies();
})

//Scy-fi Movies

const arrayScyfiMovies =['tt0121765','tt0121766','tt0120915','tt2488496','tt0086190','tt0080684','tt0076759','tt0088763','tt0096874','tt0099088']

const scyfiMovies = () =>{
  arrayScyfiMovies.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);
    })
 })
 }
  document.getElementById("scyfi").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = scyfiMovies();
})

//Accion Movies

const arrayAccionMovies =['tt0848228','tt2395427','tt4154756','tt0325980','tt0383574','tt0449088','tt1298650','tt1790809']

const accionMovies = () =>{
  arrayAccionMovies.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);
    })
 })
 }
  document.getElementById("accion").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = accionMovies();
})

//Romance Movies

const arrayRomanceMovies =['tt1099212','tt1259571','tt1325004','tt1324999','tt1673434','tt2322441','tt4465564','tt4477536']

const romanceMovies = () =>{
  arrayRomanceMovies.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);
    })
 })
 }
  document.getElementById("romance").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = romanceMovies();
})

//Animes Movies

const arrayAnimesMovies =['tt0126029','tt0298148','tt0413267','tt0892791','tt0114709','tt0120363','tt0435761']

const animesMovies = () =>{
  arrayAnimesMovies.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=9549174c')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies').innerHTML += cardCreate(data);
    })
 })
 }
  document.getElementById("animes").addEventListener("click", () => {
  document.getElementById('allMovies').innerHTML  = '';
  document.getElementById('allMovies').innerHTML  = animesMovies();
})

