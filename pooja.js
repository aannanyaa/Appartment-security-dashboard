function generateSchedule(){

    let flats =
    JSON.parse(
    localStorage.getItem("flats")
    ) || [];

    let container =
    document.getElementById(
    "scheduleContainer"
    );

    container.innerHTML = "";

    if(flats.length < 2){

        container.innerHTML =
        "<p>At least 2 flats are required.</p>";

        return;
    }

    let today = new Date();

    for(let i = 0; i < flats.length; i++){

        let flat1 =
        flats[i].number;

        let flat2 =
        flats[
        (i + 1) % flats.length
        ].number;

        let startDate =
        new Date(today);

        startDate.setDate(
        today.getDate() + (i * 7)
        );

        let endDate =
        new Date(startDate);

        endDate.setDate(
        startDate.getDate() + 6
        );

        container.innerHTML += `

        <div class="card">

            <h2>
            Week ${i + 1}
            </h2>

            <p>
            ${startDate.toDateString()}
            </p>

            <p>
            ${endDate.toDateString()}
            </p>

            <h3>
            Flat ${flat1}
            &
            Flat ${flat2}
            </h3>

        </div>

        `;
    }
}
generateSchedule();