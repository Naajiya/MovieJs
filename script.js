const find = async () => {
    if (userInput.value != "") {
        try {

            const response = await fetch(`https://www.omdbapi.com/?t=${userInput.value}&apikey=d12ea6eb`)
            console.log(response);
            console.log('hi');

            resp = await response.json()
            console.log(resp);


            if (userInput.value == 404) {
                alert('not valid input')
            } else {
                tit=resp.Title
                Special.innerHTML=tit
                console.log(resp.Title);

                maincart.innerHTML = `
                <div class="card m-3" style="width: 52rem;height: 40rem;">
    <img src="${resp.Poster}" class="img-style card-img-top img-thumbnail" alt="...">
        <div class="text-center card-body">
            <h1 class="card-title">${resp.Title}</h1>
            <h3 class="card-text">Rating : ${resp.Ratings[0].Value}</h3>
            <h4 class="card-text">Director : ${resp.Director}</h4>
            <h4> Writer : ${resp.Writer}</h4>
            <p fw-bold> Actors : ${resp.Actors}</p>
        </div>
</div>`
                                                                                                                                        
            }


        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("Input cannot be empty!");
    }
}

