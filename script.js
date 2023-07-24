
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);

            // Bonus Mission #1 - sort astronauts in descending order by hoursInSpace
            json.sort((a, b) => b.hoursInSpace-a.hoursInSpace);

            const container = document.getElementById("container");
            const astronautHeading = document.querySelector("h1");

            // Bonus Mission #3 - add count of astronauts to page
            astronautHeading.innerText += ` (${json.length})`

            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li>Active: ${
                                        // Bonus Mission #2 - change text color depending on if active status true or false
                                        json[i].active === true ? '<span style="color: green;">' + json[i].active + '</span>' : '<span style="color: red;">' + json[i].active + '</span>'}
                                    </li>
                                    <li>Skills: ${json[i].skills.join(", ")}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    `
            }

            console.log(json);
        });
    });
});