document.querySelector("button").addEventListener("click",result);

async function result(){
    try {
        var test = document.getElementById("text").value;
        var data = await fetch(`https://api.tvmaze.com/search/shows?q=${test}`);
        var res = await data.json();
        console.log(res);

        
           // Clear any existing cards
        var cardContainer = document.getElementById("card-container");
        cardContainer.innerHTML = "";

        // Iterate over the fetched data and create cards
        // for (var i = 0; i < res.length; i++) {
            
            var show = res[0].show;
            var col = document.createElement("div");
            col.className = "col-lg-4 col-sm-6 mb-3";
            col.innerHTML = `
                <div class="card" style="width: 18rem;">
                    <img src="${show.image ? show.image.medium : 'https://via.placeholder.com/150'}" class="card-img-top" alt="${show.name}">
                    <div class="card-body">
                        <h5 class="card-title">${show.name}</h5>
                          <p class="card-text"><b>Genre:</b> ${show.genres}</p>
                          <p class="card-text"><b>Premiered:</b> ${show.premiered}</p>
                            <p class="card-text"><b>Rating:</b> ${show.rating.average}</p>
                              <p class="card-text"><b>Runtime:</b> ${show.runtime}</p>
                        <p class="card-text"><b>Schedule:</b> ${show.schedule.time} on ${show.schedule.days.join(", ")}</p>
                        <p class="card-text"><b>Official site:</b> ${show.officialSite}</p>
                        <p class="card-text"><b>Network:</b> ${show.network.name}</p>
                        <p class="card-text">${show.summary ? show.summary.replace(/<[^>]+>/g, '') : "No summary available."}</p>
                      
                    </div>
                </div>`;
            cardContainer.appendChild(col);
        // }


    } catch (error) {
        console.log(error);
    }
}