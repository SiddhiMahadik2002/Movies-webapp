// https://ott-details.p.rapidapi.com/advancedsearch
/*'X-RapidAPI-Key': '4461487b5emsh9ccbc9c32e91a0ep1a89f4jsnb17e07e0fb9a',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'*/
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4461487b5emsh9ccbc9c32e91a0ep1a89f4jsnb17e07e0fb9a',
        'X-RapidAPI-Host': 'ott-details.p.rapidapi.com'
    }
};

function getMovies() {
    fetch("https://ott-details.p.rapidapi.com/advancedsearch", options).then(response => response.json()).then(response => {
        let htmlstring=""
        response.results.map((item,index)=>{
        //     console.log(item.title)
        })
        // console.log(response)
    })

}
getMovies()
name1=""
name2="siddhi"
name3="jfkvn"
console.log(name1+name2+name3)
