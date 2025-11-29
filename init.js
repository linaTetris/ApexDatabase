var coll_all;
var apex_coll;

var coll_indicator;

function toggleCollapsible(event) {
    var element = event.currentTarget;
    element.classList.toggle("collapsible-active");
    var content = element.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    } 
    reloadApexCollapsibleHeights();
}

function toggleApexCollapsible(event) {
    var element = event.currentTarget;
    element.classList.toggle("collapsible-active");
    var content = element.nextElementSibling;
    if (content.style.maxHeight){
    content.style.maxHeight = null;
    } else {
    content.style.maxHeight = content.scrollHeight + "px";
    }
    reloadApexCollapsibleHeights();
}

function toggleCollapsibleIndicator(event) {
    var element = event.currentTarget;
    var indicator = element.querySelector('.collapsible-indicator-arrow');
    if (element.classList.contains("collapsible-active")) {
        indicator.innerHTML = "&#x25BC";
    }
    else {
        indicator.innerHTML = "&#x25B6";
    }
}

function reloadCollapsibles() {
    coll_all = Array.from(document.getElementsByClassName("collapsible"));

    var coll = coll_all;
    // var coll = coll_all.filter(function(element) {return !element.classList.contains('has-click-event');});

    for (let i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", toggleCollapsible);
        // coll[i].classList.add('has-click-event');
    }

    coll_indicator = document.getElementsByClassName("collapsible-indicator");

    for (let i = 0; i < coll_indicator.length; i++) {
        coll_indicator[i].addEventListener("click", toggleCollapsibleIndicator);
    }
}


function reloadApexCollapsibles() {
    apex_coll = document.getElementsByClassName("collapsible apex-upgrade");

    for (let i = 0; i < apex_coll.length; i++) {
        apex_coll[i].addEventListener("click", toggleApexCollapsible);
    }
}

function reloadApexCollapsibleHeights() {
    var apex_coll_active = document.getElementsByClassName("collapsible apex-cl collapsible-active");

    for (let i = 0; i < apex_coll_active.length; i++) {
        apex_coll_active[i].nextElementSibling.style.maxHeight = (apex_coll_active[i].nextElementSibling.scrollHeight * 2) + "px";
        // setTimeout(function () {apex_coll_active[i].nextElementSibling.style.maxHeight = apex_coll_active[i].nextElementSibling.scrollHeight + "px";}, 2)
    }
}

function collapseAllApexCollapsible() {
    while (document.getElementsByClassName("collapsible apex-cl collapsible-active").length > 0) {
        var apex_coll_active2 = document.getElementsByClassName("collapsible apex-cl collapsible-active");

        for (let i = 0; i < apex_coll_active2.length; i++) {
            apex_coll_active2[i].click();
        }
    }
}


function init() {
    // document.getElementById("defaultTab").click();

    // prep contribution form
    document.getElementById("contribution-form-wrapper").addEventListener('click', function(event) {
        if (event.target === document.getElementById("contribution-form-outside-click")) {
            hideContributionForm();
        }
    });

    // load all the ships

    for (let i in ships) {
        document.getElementById(ships[i].type).innerHTML += `
        <div id="${ships[i].id}" class="ship" onclick="showApexInfo('${ships[i].id}'); collapseAllApexCollapsible();">${ships[i].displayName}</div>
        `;

        document.getElementById("ship-search-list").innerHTML += `<p class="ship-search-item" onclick="pickShipForm(${i})" value="${ships[i].id}">${ships[i].displayName}</p>`
    }

    for (let i=1; i<21; i++) {
        document.getElementById("apex-content").innerHTML += `
        <div id="apex-${i}" class="apex-level-container">
            <div class="apex-unknown tooltip-wrapper" id="apex-${i}-unknown" style="display:none">
                <img height="40" src="assets/warning.svg">
                <div class="tooltip-content">
                    Info for this Apex level is not known yet.
                </div>
            </div>
            <div class="apex-maybe tooltip-wrapper" id="apex-${i}-maybe" style="display:none">
                <img height="40" src="assets/info.svg">
                <div class="tooltip-content">
                    Bonus HP for this Apex level may not be exact.
                </div>
            </div>
            <button class="collapsible apex-cl">Apex ${i}</button>
            <div class="collapsible-content apex-cl" id="apex-${i}-content">
                
            </div>
        </div>
        `;
    }


    reloadCollapsibles();

    // prep for initial open
    document.getElementsByClassName("collapsible shiptab")[2].click();
    document.getElementById("fg300").click();
}

function showApexInfo(id) {
    var shiptabs = document.getElementsByClassName("ship");
    for (let i = 0; i < shiptabs.length; i++) {
        shiptabs[i].classList.remove("ship-active");
    }

    document.getElementById(id).classList.add("ship-active");

    var ship = getShipById(id);

    var gain;

    var apex_text;

    var upgrade_text;

    document.getElementById("ship_display_name").innerHTML = ship.displayName;
    document.getElementById("ship_pfp").src = `assets/ships/${id.replace(/-/g, '_')}_a.png`;

    for (let i=1; i<21; i++) {
        if (ship.apex[i].known) {
            if (i == 1) {gain = "";}
            else if (ship.apex[i-1].known) {gain = ` <span style="color:#ffa020">(+${ship.apex[i].hp - ship.apex[i-1].hp})</span>`;}
            else {gain = "";}

            apex_text = `
                <p class="apex-general-desc"><strong>HP: </strong> +${ship.apex[i].hp}${gain}
            `;

            if (i == 1) {gain = "";}
            else if (ship.apex[i-1].known && ship.apex[i].cruise - ship.apex[i-1].cruise > 0) {gain = ` <span style="color:#ffa020">(+${ship.apex[i].cruise - ship.apex[i-1].cruise})</span>`;}
            else {gain = "";}
            if (ship.apex[i].cruise > 0) {
                apex_text += `
                    <br><strong>Cruise Speed: </strong> +${ship.apex[i].cruise}${gain}
                `;
            }

            if (i == 1) {gain = "";}
            else if (ship.apex[i-1].known && ship.apex[i].warp - ship.apex[i-1].warp > 0) {gain = ` <span style="color:#ffa020">(+${ship.apex[i].warp - ship.apex[i-1].warp})</span>`;}
            else {gain = "";}
            if (ship.apex[i].warp > 0) {
                apex_text += `
                    <br><strong>Warp Speed: </strong> +${ship.apex[i].warp}${gain}
                `;
            }

            apex_text += "</p>";

            document.getElementById(`apex-${i}-content`).innerHTML = apex_text;

            if (ship.apex[i].variantProperties.length > 0) {
                upgrade_text = `<table class="apex-upgrades" style="border-spacing:0;"><thead><tr>`;

                if (ship instanceof SuperCap) {
                    // add the list of modules
                    for (let j=0; j<ship.apex[i].variantProperties.length; j++) {
                        upgrade_text += `<th class="apex-table-row header" style="width: ${100/ship.apex[i].variantProperties.length}%">${(j == 0) ? "M" : String.fromCharCode(64 + j)} Modules</th>`;
                    }

                    upgrade_text += "</tr></thead><tbody>";

                    // list the upgrades for each module

                    // iterate through modules: going across M,A,B,C...    

                    var max_slot_number=0; // maximum mods in one slot: ie CV3K is 4 because there are 4 B mods.
                    for (let j=0; j<ship.apex[i].variantProperties.length; j++) {
                        if (max_slot_number < ship.apex[i].variantProperties[j].length) {max_slot_number = ship.apex[i].variantProperties[j].length;}
                    }

                    for (let k=0; k<max_slot_number; k++) {
                        upgrade_text += "<tr>";
                            for (let j=0; j<ship.apex[i].variantProperties.length; j++) {
                            upgrade_text += `<td class="apex-table-row" id="${ship.id}-${i}-${j}-${k}"></td>`; // apex, mod#, slot#
                        }
                        upgrade_text += "</tr>";
                    }

                    upgrade_text += "</tr></tbody></table>";
                    document.getElementById(`apex-${i}-content`).innerHTML += upgrade_text;

                    // iterate through each module. the first instance where an upgrade is found will go into the 0th slot.
                    for (let j=0; j<ship.apex[i].variantProperties.length; j++) { // iterating through modules
                        var foundupgrade = 0;
                        for (let k=0; k<ship.apex[i].variantProperties[j].length; k++) { 
                            if (ship.apex[i].variantProperties[j][k].length > 0) {
                                document.getElementById(`${ship.id}-${i}-${j}-${foundupgrade}`).innerHTML = `<p style="margin: 0; padding: 10px 0px; text-align:center; font-weight: 700;">${(j == 0) ? "M" : String.fromCharCode(64 + j)}${k+1} - ${ship.modules[j][k].name}</p>`;

                                // add the upgrade
                                upgrade_text = "";
                                for (u in ship.apex[i].variantProperties[j][k]) { // for upgrade in ship.apex... -> u = ApexUpgrade
                                    upgrade_text += `<div class="apex-upgrade-wrapper"><button class="collapsible apex-upgrade">${ship.apex[i].variantProperties[j][k][u].name} +${ship.apex[i].variantProperties[j][k][u].levels}</button>
                                    <div class="collapsible-content apex-upgrade"><table style="padding:5px;width:100%"><thead><tr><th style="text-align: left;">Effect</th><th style="width: 40px; text-align:right">TP</th></tr></thead><tbody>`;
                                    for (d in ship.apex[i].variantProperties[j][k][u].description) {
                                        upgrade_text += `<tr><td>${ship.apex[i].variantProperties[j][k][u].description[d].effect}</td><td style="width: 40px; text-align:right">${ship.apex[i].variantProperties[j][k][u].description[d].tp} TP</td></tr>`;
                                    }
                                    upgrade_text += `</tbody></table></div></div>`;
                                }
                                document.getElementById(`${ship.id}-${i}-${j}-${foundupgrade}`).innerHTML += upgrade_text;
                                
                                foundupgrade++;
                            }
                        }
                    }
                }
                else {
                    for (let j=0; j<ship.apex[i].variantProperties.length; j++) {
                        upgrade_text += `<th class="apex-table-row header" style="width: ${100/ship.apex[i].variantProperties.length}%">${String.fromCharCode(65 + j)} - ${ship.variants[j].variant}</th>`;
                    }

                    upgrade_text += "</tr></thead><tbody><tr>";

                    for (let j=0; j<ship.apex[i].variantProperties.length; j++) {
                        upgrade_text += `<td class="apex-table-row">`;
                        for (u in ship.apex[i].variantProperties[j]) { // for upgrade in ship.apex... -> u = ApexUpgrade
                            upgrade_text += `<div class="apex-upgrade-wrapper"><button class="collapsible apex-upgrade">${ship.apex[i].variantProperties[j][u].name} +${ship.apex[i].variantProperties[j][u].levels}</button>
                            <div class="collapsible-content apex-upgrade"><table style="padding:5px;width:100%"><thead><tr><th style="text-align: left;">Effect</th><th style="width: 40px; text-align:right">TP</th></tr></thead><tbody>`;
                            for (k in ship.apex[i].variantProperties[j][u].description) {
                                upgrade_text += `<tr><td>${ship.apex[i].variantProperties[j][u].description[k].effect}</td><td style="width: 40px; text-align:right">${ship.apex[i].variantProperties[j][u].description[k].tp} TP</td></tr>`;
                            }
                            upgrade_text += `</tbody></table></div></div>`;
                        }
                        upgrade_text += "</td>"
                    }
                    
                    upgrade_text += "</tr></tbody></table>";
                    document.getElementById(`apex-${i}-content`).innerHTML += upgrade_text;
                }
            }

            if (ship.apex[i].maybe) {
                document.getElementById(`apex-${i}-maybe`).style.display = "block";
            }
            else {
                document.getElementById(`apex-${i}-maybe`).style.display = "none";
            }
            document.getElementById(`apex-${i}-unknown`).style.display = "none";

            // document.getElementById(`apex-${i}-content`).innerHTML += `<div class="contributor">Data for this Apex level was provided by <strong>${ship.apex[i].contributor}</strong>!<br>Want to contribute? Contact <strong>linaTetris</strong> in-game or on Discord!</div>`
            document.getElementById(`apex-${i}-content`).innerHTML += `<div class="contributor"><span style="font-size:20px;">Data for this Apex level was provided by <strong>${ship.apex[i].contributor.name}</strong>!</span><br>Want to contribute? <span class="showApexForm" onclick="showContributionForm()">Click here to learn more!</span></div>`
        }
        else { // apex not known yet
            // document.getElementById(`apex-${i}-content`).innerHTML = "<p style='font-size:24px; text-align:center';>No information available!<br>Have data for this Apex level? Contact <strong>linaTetris</strong> in-game or on Discord!</p>";
            document.getElementById(`apex-${i}-content`).innerHTML = `<p style='font-size:24px; text-align:center';>No information available!<br>Have data for this Apex level? <span class="showApexForm" onclick="showContributionForm(); autofillShipInfo(${getIndexOfShip(id)},${i})">Fill out this form to contribute!</span></p>`;

            document.getElementById(`apex-${i}-unknown`).style.display = "block";
            document.getElementById(`apex-${i}-maybe`).style.display = "none";
        }
    }
    reloadApexCollapsibles();
    
}


function secsToTime(secs) {
    return `${String(Math.floor(secs/3600)).padStart(2,'0')}:${String(Math.floor(secs/60 % 60)).padStart(2,'0')}:${(secs%60).toFixed().padStart(2,'0')}`
}

function openTab(event, tab) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tab).style.display = "block";
    event.currentTarget.className += " active";

    document.getElementsByClassName("active")[0].nextElementSibling.style.display = 'none';
}


function toggleSidebar() {
    if (document.getElementById("sidebar").classList.contains("sidebar-hidden")) {
        document.getElementById("sidebar").classList.remove("sidebar-hidden");
            
        document.getElementById("sidebar").style.transform = "";

        document.getElementById("apex-content-wrapper").style.width = "calc(100% - 300px)";
        document.getElementById("apex-content-wrapper").style.left = "300px";
    }
    else {
        document.getElementById("sidebar").classList.add("sidebar-hidden");

        document.getElementById("sidebar").style.transform = "translateX(-300px)";

        document.getElementById("apex-content-wrapper").style.width = "100%";
        document.getElementById("apex-content-wrapper").style.left = "0px";

    }
}