let flats =
JSON.parse(
localStorage.getItem("flats")
) || [];

function displayMaintenance(){

    let container =
    document.getElementById(
    "maintenanceContainer"
    );

    container.innerHTML = "";

    for(let flat of flats){

        if(!flat.maintenance){

            flat.maintenance =
            "Pending";
        }

        container.innerHTML += `

        <div class="card">

            <h2>
            Flat ${flat.number}
            </h2>

            <p>
            Owner:
            ${flat.owner}
            </p>

            <p>

            Maintenance:

            <span class="${
                flat.maintenance === "Paid"
                ? "unlocked"
                : "locked"
            }">

            ${flat.maintenance}

            </span>

            </p>

            <button
            onclick="toggleMaintenance(${flat.number})">

            Mark Paid / Pending

            </button>

        </div>

        `;
    }
}
function toggleMaintenance(number){

    for(let flat of flats){

        if(flat.number === number){

            if(
            flat.maintenance ===
            "Paid"
            ){

                flat.maintenance =
                "Pending";
            }

            else{

                flat.maintenance =
                "Paid";
            }
        }
    }

    localStorage.setItem(
    "flats",
    JSON.stringify(flats)
    );

    displayMaintenance();
}

displayMaintenance();