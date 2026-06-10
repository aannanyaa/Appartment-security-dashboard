let flats =
JSON.parse(localStorage.getItem("flats")) || [

{
number: 101,
owner: "Ananya Mishra",
status: "Locked"
},

{
number: 102,
owner: "Preeti Senapati",
status: "Unlocked"
},

{
number: 103,
owner: "Pranjal Bahuguna",
status: "Locked"
}


];
function saveData(){

    localStorage.setItem(
        "flats",
        JSON.stringify(flats)
    );

}

function displayFlats() {

    let container =
        document.getElementById("flatContainer");

    container.innerHTML = "";

    let locked = 0;
    let unlocked = 0;

    for(let flat of flats){

        if(flat.status === "Locked"){
            locked++;
        }
        else{
            unlocked++;
        }

        container.innerHTML += `

        <div class="card">

            <h2>Flat ${flat.number}</h2>
            <p>Owner: ${flat.owner}</p>

            <p>
            Status:
            <span class="${
            flat.status === "Locked"
            ? "locked"
            : "unlocked"
            }">
            ${flat.status}
            </span>
            </p>
            
            <button
            onclick="toggleStatus(${flat.number})">

            Change Status

            </button>

            <button
            onclick="deleteFlat(${flat.number})">

            Delete

            </button>

        </div>

        `;
    }

    document.getElementById("totalFlats")
        .innerText = flats.length;

    document.getElementById("lockedCount")
        .innerText = locked;

    document.getElementById("unlockedCount")
        .innerText = unlocked;
}

function toggleStatus(number){

    for(let flat of flats){

        if(flat.number === number){

            if(flat.status === "Locked"){
                flat.status = "Unlocked";
            }
            else{
                flat.status = "Locked";
            }
            addLog(
            `Flat ${flat.number} changed to ${flat.status}`
           );

        }

    }

    saveData();
    displayFlats();
}

function searchFlat(){

    let searchValue =
        document.getElementById("searchInput").value;

    let container =
        document.getElementById("flatContainer");

    container.innerHTML = "";

    for(let flat of flats){

        if(flat.number ==
            searchValue){

            container.innerHTML += `

            <div class="card">

                <h2>Flat ${flat.number}</h2>

                <p>Status: ${flat.status}</p>

            </div>

            `;
        }

    }

}

displayFlats();
function addFlat(){

    let flatNumber =
    document.getElementById(
    "newFlatNumber").value;

    if(flatNumber === ""){
        alert("Enter Flat Number");
        return;
    }

    flats.push({
        number:Number(flatNumber),
        owner: document.getElementById("ownerName").value || "Unknown",
        status:"Locked"
     });
     addLog(
     `Flat ${flatNumber} added`
     );

    
    saveData();
    displayFlats();

    document.getElementById(
    "newFlatNumber").value="";
    document.getElementById("ownerName").value="";
}
function deleteFlat(number){
    addLog(
    `Flat ${number} deleted`
    );

    flats = flats.filter(
        flat => flat.number !== number
    );
    saveData();
    displayFlats();
}
function addLog(message){

    let log =
    document.getElementById("activityLog");

    let item =
    document.createElement("li");

    item.innerText =
    new Date().toLocaleTimeString()
    + " - " + message;

    log.prepend(item);
}
function triggerAlert(type){

    let alertsContainer =
    document.getElementById("activeAlerts");

    let alertId = Date.now();

    let message = "";

    if(type === "Fire Alarm"){
        message = "Emergency response initiated";
    }
    else if(type === "Suspicious Activity"){
        message = "Security team notified";
    }
    else{
        message = "Maintenance team alerted";
    }

    alertsContainer.innerHTML += `
    
    <div class="alert-card" id="alert-${alertId}">
        <h3>${type}</h3>
        <p><strong>Time:</strong>
        ${new Date().toLocaleTimeString()}</p>
        <p>${message}</p>
        <button class="clear-btn"
        onclick="clearAlert(${alertId}, '${type}')">
            Clear Alert
        </button>
    </div>
    `;

    addLog(`${type} triggered`);
}

function clearAlert(id, type){

    let alertElement =
    document.getElementById(`alert-${id}`);

    if(alertElement){
        alertElement.remove();
    }

    addLog(`${type} cleared`);
}
function openSidebar(){

    document.getElementById(
    "sidebar"
    ).style.width = "250px";
}

function closeSidebar(){

    document.getElementById(
    "sidebar"
    ).style.width = "0";
}
function updateClock(){

    document.getElementById(
    "clock"
    ).innerText =
    new Date().toLocaleString();
}

setInterval(updateClock,1000);

updateClock();