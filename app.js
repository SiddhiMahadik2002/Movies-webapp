// https://ott-details.p.rapidapi.com/advancedsearch
/*'X-RapidAPI-Key': '4461487b5emsh9ccbc9c32e91a0ep1a89f4jsnb17e07e0fb9a',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'*/
        let moviesSec=document.querySelector(".moviessec")
        let searchBox=document.querySelector(".input")
        let button=document.querySelector(".btn")
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4461487b5emsh9ccbc9c32e91a0ep1a89f4jsnb17e07e0fb9a',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
};


function getMovies() {
    fetch("https://ott-details.p.rapidapi.com/advancedsearch", options).then(res => res.json()).then(data => {
        let htmlstring=""
        console.log(data)
        data.results.map((item,index)=>{
            htmlstring+=`<div class="card">
            <img src="${item.imageurl[0]}"
                alt="">
            <h3 class="movietitle">${item.title}</h3>
            <p>${item.released + " - "+item.type}</p>
            <p>${item.synopsis}</p>
        </div>
        `
        })
        console.log(data)
        moviesSec.innerHTML=htmlstring
    })

}

getMovies()
function searchMovies(movie){
    console.log(movie)
fetch(`https://ott-details.p.rapidapi.com/search?title=${movie}&page=1`,options).then(response=>response.json()).then(data=>{
    let htmlstring=""
    console.log(data)
    data.results.map((item,index)=>{
        htmlstring+=`<div class="card">
        <img src="${item.imageurl[0]}"
            alt="">
        <h3 class="movietitle">${item.title}</h3>
        <p>${item.released + " - "+item.type}</p>
        <p>${item.synopsis}</p>
    </div>
    `
    })
    console.log(data)
    moviesSec.innerHTML=htmlstring
    })
}
button.addEventListener("click",()=>{
    if(searchBox.value.length==0){
        getMovies()
    }
    else{
        
        searchMovies(searchBox.value)
    }
})

