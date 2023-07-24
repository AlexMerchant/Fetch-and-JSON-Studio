
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data);

            // Bonus Mission #1 - sort astronauts in descending order by hoursInSpace
            data.sort((a, b) => b.hoursInSpace-a.hoursInSpace);

            const container = document.getElementById("container");
            const astronautHeading = document.querySelector("h1");

            // Bonus Mission #3 - add count of astronauts to page
            astronautHeading.innerText += ` (${data.length})`

            for (let i = 0; i < data.length; i++) {
                container.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${data[i].firstName} ${data[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${data[i].hoursInSpace}</li>
                                    <li>Active: ${
                                        // Bonus Mission #2 - change text color depending on if active status true or false
                                        data[i].active === true ? '<span style="color: green;">' + data[i].active + '</span>' : '<span style="color: red;">' + data[i].active + '</span>'}
                                    </li>
                                    <li>Skills: ${data[i].skills.join(", ")}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${data[i].picture}">
                        </div>
                    `
            }
        });
    });
});