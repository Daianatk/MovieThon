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

//const all = document.getElementById('all')

const dataMovie =['tt1457767','tt3065204','tt7069210','tt0217869', 'tt4972582', 'tt6823368','tt0195714', 'tt0309593', 'tt0414982', 'tt1144884', 'tt1622979', 'tt1179904', 'tt1536044', 'tt1778304', 'tt2109184','tt2473682', 'tt2473510', 'tt1728179', 'tt0295297', 'tt0304141', 'tt0330373', 'tt0373889', 'tt0417741', 'tt0926084',  'tt1201607', 'tt0120737', 'tt0167261',  'tt0167260','tt0121765', 'tt0121766', 'tt0120915', 'tt2488496', 'tt0086190', 'tt0080684', 'tt0076759', 'tt0088763', 'tt0096874', 'tt0099088', 'tt0848228', 'tt2395427', 'tt4154756','tt0325980','tt0383574','tt0449088','tt1298650','tt1790809','tt1099212', 'tt1259571', 'tt1325004', 'tt1324999', 'tt1673434', 'tt2322441', 'tt4465564', 'tt4477536', 'tt0126029', 'tt0298148', 'tt0413267', 'tt0892791','tt0114709', 'tt0120363', 'tt0435761']

const randomMovie = dataMovie.map((item) => {
fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=b9ccb762')
.then(res => res.json())
 .then(data => {
 document.getElementById('allMovies').innerHTML += cardCreate(data);
})

})

/*all.addEventListener('click', () => {
  dataMovie.map((item) => {
    fetch('https://www.omdbapi.com/?i='+ item  + '&apikey=b9ccb762')
    .then(res => res.json())
     .then(data => {
     //document.getElementById('allMovies').innerHTML += cardCreate(data);
     console.log(data);
    })
    
    })
}
)*/

const cardCreate=(data)=>{
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
 fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
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

//Cards

const cardCreate1=(data)=>{
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

//Cards 1

const arrayCards1 =['tt0088763','tt0096874','tt0099088']

const cards1Movies = () =>{
  arrayCards1.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards1").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards1Movies();
  document.addEventListener("click").show(page-cards);
})

//Cards 2

const arrayCards2 =['tt2322441','tt4465564','tt4477536']

const cards2Movies = () =>{
  arrayCards2.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards2").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards2Movies();
})

//Cards 3

const arrayCards3 =['tt0217869','tt4972582','tt6823368']

const cards3Movies = () =>{
  arrayCards3.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards3").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards3Movies();
})

//Cards 4

const arrayCards4 =['tt0848228','tt2395427','tt4154756']

const cards4Movies = () =>{
  arrayCards4.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards4").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards4Movies();
})

//Cards 5

const arrayCards5 =['tt0195714','tt0309593','tt0414982','tt1144884','tt1622979']

const cards5Movies = () =>{
  arrayCards5.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards5").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards5Movies();
})

//Cards 6

const arrayCards6 =['tt0241527','tt0295297','tt0304141','tt0330373','tt0373889','tt0417741','tt0926084','tt1201607']

const cards6Movies = () =>{
  arrayCards6.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards6").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards6Movies();
})

//Cards 7

const arrayCards7 =['tt1179904','tt1536044','tt1778304','tt2109184','tt2473682','tt2473510','tt1728179']

const cards7Movies = () =>{
  arrayCards7.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards7").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards7Movies();
})

//Cards 8

const arrayCards8 =['tt0325980','tt0383574','tt0449088','tt1298650','tt1790809']

const cards8Movies = () =>{
  arrayCards8.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards8").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards8Movies();
})

//Cards 9

const arrayCards9 =['tt0120737','tt0167261','tt0167260']

const cards9Movies = () =>{
  arrayCards9.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards9").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards9Movies();
})

//Cards 10

const arrayCards10 =['tt0126029','tt0298148','tt0413267','tt0892791']

const cards10Movies = () =>{
  arrayCards10.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards10").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards10Movies();
})

//Cards 11

const arrayCards11 =['tt0121765','tt0121766','tt0120915','tt2488496','tt0086190','tt0080684','tt0076759']

const cards11Movies = () =>{
  arrayCards11.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards11").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards11Movies();
})

//Cards 12

const arrayCards12 =['tt0114709','tt0120363','tt0435761']

const cards12Movies = () =>{
  arrayCards12.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards12").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards12Movies();
})

//Cards 13

const arrayCards13 =['tt1099212','tt1259571','tt1325004','tt1324999','tt1673434']

const cards13Movies = () =>{
  arrayCards13.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards13").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards13Movies();
})

//Cards 14

const arrayCards14 =['tt1457767','tt3065204','tt7069210']

const cards14Movies = () =>{
  arrayCards14.map((item) => {
  fetch('https://www.omdbapi.com/?i='+ item +'&apikey=b9ccb762')
  .then(res => res.json())
  .then(data => {
  document.getElementById('allMovies1').innerHTML += cardCreate1(data);
    })
 })
 }
  document.getElementById("cards14").addEventListener("click", () => {
  document.getElementById('allMovies1').innerHTML  = '';
  document.getElementById('allMovies1').innerHTML  = cards14Movies();
})