fetch("https://api.covid19india.org/data.json"
)
.then(response => 
    response.json()
)
.then( (data)=>{
   getData = data.statewise[0];
   console.log(getData);
   var numbers = document.querySelectorAll('.numbers');
     numbers[0].innerHTML = getData.confirmed;
    numbers[1].innerHTML = getData.active;
    numbers[2].innerHTML = getData.deaths;
    numbers[3].innerHTML = getData.recovered;
})
.catch(err => {
	console.error(err);
});

fetch("https://covid-19-news.p.rapidapi.com/v1/covid?q=covid&lang=en&media=True", {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "2d2dea647fmsh577c57bb54abd69p13249djsn06827c6f1fe8",
        "x-rapidapi-host": "covid-19-news.p.rapidapi.com"

    }

})

.then(response => response.json())

.then(data => {
    console.log(data);
    var news = document.querySelector('.news');
    for (let i=0 ;i<20;i++) {
        var newsData = `
        <div class="card">
        <img src="${data.articles[i].media}" alt="news_image">
        <p class="headline">${data.articles[i].title}</p>
        <p class="topic">${data.articles[i].topic}</p>
        <p class="summary">${data.articles[i].summary.substring(0,500)}...</p>

        <a href="${data.articles[i].link}" class="read-more">
            <button>Read More</button>
        </a>
    </div>`;
    news.innerHTML += newsData;
    }

})

.catch(err => {

    console.error(err);

});