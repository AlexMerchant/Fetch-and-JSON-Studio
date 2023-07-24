
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            console.log(json);

            const container = document.getElementById("container");

            for (let i = 0; i < json.length; i++) {
                container.innerHTML += `
                        <div class="astronaut">
                            <div class="bio">
                                <h3>${json[i].firstName} ${json[i].lastName}</h3>
                                <ul>
                                    <li>Hours in space: ${json[i].hoursInSpace}</li>
                                    <li>Active: ${json[i].active === true ? '<span style="color: green;">' + json[i].active + '</span>' : '<span style="color: red;">' + json[i].active + '</span>'}</li>
                                    <li>Skills: ${json[i].skills.join(", ")}</li>
                                </ul>
                            </div>
                            <img class="avatar" src="${json[i].picture}">
                        </div>
                    `
            }
        });
    });
});