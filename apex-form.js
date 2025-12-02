function showContributionForm() {
    document.getElementById("contribution-form-wrapper").style.display = "block";
    document.getElementById("contribution-form-wrapper").classList.add("open");
}

function autofillShipInfo(id, level) {
    pickShipForm(id);
    document.getElementById("apex-level-selector").value = level;
}

function hideContributionForm() {
    document.getElementById("contribution-form-wrapper").style.display = "none";
    document.getElementById("contribution-form-wrapper").classList.remove("open");
}

function filterShips() {
    showShipList();

    const input = document.getElementById("ship-dropdown");

    const filter = input.value.toUpperCase();
    const div = document.getElementById("ship-search-list");
    const a = div.getElementsByTagName("p");
    for (let i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function showShipList() {
    document.getElementById("ship-search-list").style.display = "block";

    document.getElementById("ship-dropdown").style.borderBottomLeftRadius = "0px";
    document.getElementById("ship-dropdown").style.borderBottomRightRadius = "0px";
}

var selectedShipIdx;

function pickShipForm(idx) { // user has selected a ship
    selectedShipIdx = idx;

    document.getElementById("ship-dropdown").value = ships[idx].displayName;

    document.getElementById("ship-search-list").style.display = "none";

    document.getElementById("ship-dropdown").style.borderBottomLeftRadius = "";
    document.getElementById("ship-dropdown").style.borderBottomRightRadius = "";

    
    ship = ships[idx]

    // add the table for ship variants
    var upgrade_text = "";

    if (ship instanceof SuperCap) { // this should be changed to make tables for each module slot.
        for (let i=0; i<ship.moduleCount; i++) {
            upgrade_text += `<table id="apex-upgrade-table-input-${i}" class="apex-upgrades" style="width:100%; border-spacing:0;"><thead><tr>`;
            for (let j=0; j<ship.slotCount[i]; j++) {
                upgrade_text += `<th class="apex-table-row header" style="width: ${100/ship.slotCount[i]}%">${(i == 0) ? "M" : String.fromCharCode(64 + i)}${j+1} - ${ship.modules[i][j].name}</th>`;
            }
            upgrade_text += `</tr></thead><tbody id='form-upgrade-list-${i}'><tr>`;

            for (let j=0; j<ship.slotCount[i]; j++) {
                upgrade_text += `<td class="apex-table-row occupied" id="${i}-${j}-0"><button class="add-upgrade" onclick="formAddUpgrade(${idx}, ${j}, 0, ${i})"><span style="font-size:44px; line-height: 20px; vertical-align: -7px;">+</span>Click to add upgrade</button></td>`;
            }

            // upgrade_text += `</tr></thead><tbody id='form-upgrade-list-${i}'><tr>`;

            upgrade_text += "</tr></tbody></table>";
        }
        // upgrade_text = `<table id="apex-upgrade-table-input" class="apex-upgrades" style="width:100%; border-spacing:0;"><thead><tr>`;
        // for (let i=0; i<ship.moduleCount; i++) {
        //     upgrade_text += `<th class="apex-table-row header" style="width: ${100/ship.moduleCount}%">${(i == 0) ? "M" : String.fromCharCode(64 + i)} Modules</th>`;
        // }
        // upgrade_text += "</tr></thead><tbody id='form-upgrade-list'><tr>";

        // for (let i=0; i<ship.moduleCount; i++) {
        //     upgrade_text += `<td class="apex-table-row occupied" id="${i}-0"><button class="add-upgrade" onclick="formAddUpgrade(${idx}, ${i}, 0)"><span style="font-size:44px; line-height: 20px; vertical-align: -7px;">+</span>Click to add upgrade</button></td>`;
        // }

        // upgrade_text += "</tr></thead><tbody id='form-upgrade-list'><tr>";

        // upgrade_text += "</tr></tbody></table>";
    }
    else {
        upgrade_text = `<table id="apex-upgrade-table-input-0" class="apex-upgrades" style="width:100%; border-spacing:0;"><thead><tr>`;

        for (let i=0; i<ship.variantCount; i++) {
            upgrade_text += `<th class="apex-table-row header" style="width: ${100/ship.variantCount}%">${String.fromCharCode(65 + i)} - ${ship.variants[i].variant}</th>`;
        }
        upgrade_text += "</tr></thead><tbody id='form-upgrade-list-0'><tr>";

        for (let i=0; i<ship.variantCount; i++) {
            upgrade_text += `<td class="apex-table-row occupied" id="0-${i}-0"><button class="add-upgrade" onclick="formAddUpgrade(${idx}, ${i}, 0, '0')"><span style="font-size:44px; line-height: 20px; vertical-align: -7px;">+</span>Click to add upgrade</button></td>`;
        }

        upgrade_text += "</tr></tbody></table>";
    }

    document.getElementById("contribution-form-variant-list").innerHTML = upgrade_text;
}

function formAddUpgrade(shipID, col, row, table="") {
    var addedtext;
    var ship = ships[shipID];

    var tableID = (!!table || table == 0) ? table + "-" : "";

    preserveInputValues(`apex-upgrade-table-input-${table}`)

    if (!!document.getElementById(`${tableID}${col}-${row+1}`)) { // if the row below exists
        document.getElementById(`${tableID}${col}-${row}`).innerHTML = `<div class="apex-upgrade-wrapper"><button class="collapsible apex-upgrade"></button></div>`; 

        // add input for apex data

        document.getElementById(`${tableID}${col}-${row+1}`).innerHTML = `<button class="add-upgrade" onclick="formAddUpgrade(${shipID}, ${col}, ${row+1}, ${table})"><span style="font-size:48px; line-height: 24px; vertical-align: -6px;">+</span>Click to add upgrade</button>`;
        document.getElementById(`${tableID}${col}-${row+1}`).classList.add("occupied");
    }
    else { // if the row below does NOT exist

        // add new row for next set of upgrades
        addedtext = "<tr>";
        var variantOrModCount = (ship instanceof SuperCap) ? ship.slotCount[table] : ship.variantCount;
        for (let i=0; i<variantOrModCount; i++) {
            if (i == col) {
                addedtext += `<td class="apex-table-row occupied" id="${tableID}${i}-${row+1}"><button class="add-upgrade" onclick="formAddUpgrade(${shipID},${i}, ${row+1}, ${table})"><span style="font-size:48px; line-height: 24px; vertical-align: -6px;">+</span>Click to add upgrade</button></td>`;
            }
            else {
                addedtext += `<td class="apex-table-row" id="${tableID}${i}-${row+1}"></td>`;
            }
        }
        addedtext += "</tr>";
        document.getElementById(`form-upgrade-list-${table}`).innerHTML += addedtext;
    }


    // add apex content 

    document.getElementById(`${tableID}${col}-${row}`).innerHTML = `
        <div class="apex-upgrade-wrapper removable">
            <p class="apex-upgrade-remove" onclick="formRemoveUpgrade(${shipID}, ${col}, ${row}, ${table})">x</p>
            <button class="click-me-temp collapsible collapsible-indicator apex-upgrade">
                <span class="collapsible-indicator-arrow">&#x25B6</span>&nbsp;&nbsp;<input placeholder="Upgrade Name" class="apex-input" id="apex-input-${tableID}${col}-${row}" onclick="stop_ImmediatePropagation(event)" onkeydown="stopAccidentalClick(event); if (event.keyCode === 32) {const s = this.selectionStart; this.value = this.value.slice(0, s) + ' ' + this.value.slice(this.selectionEnd); this.selectionStart = this.selectionEnd = s + 1;}">
            </button>
            <div class="collapsible-content apex-upgrade" style="display:block" ><table style="padding:5px;width:100%"><thead><tr><th style="text-align: left;">Effect</th><th style="width: 50px; text-align:left">TP</th><th style="width: 25px"></th></tr></thead><tbody>
            <tr>
                <td><input placeholder="Upgrade Description (i.e. +1% HP, +2 DPH on [weapon system])" class="apex-description"></td>
                <td><input type="number" value="1" step="1" class="apex-description-tp"> TP</td>
                <td style="width: 25px"><p class="apex-upgrade-remove2" onclick="subupgradeListRemove(this)">x</p></td>
            </tr>
            <tr>
                <td><button class="apex-upgrade-add" onclick="subupgradeListAdd(this)"><span>+</span> Click to add upgrade</button></td>
                <td></td>
                <td></td>
            </tr>
            </tbody></table></div>
        </div>
    `;
    document.getElementById(`${tableID}${col}-${row}`).classList.add("occupied2");

    // expand the collapsible, can't avoid using setTimeout!
    setTimeout(function () {document.getElementsByClassName("click-me-temp")[0].click(); document.getElementsByClassName("click-me-temp")[0].classList.remove("click-me-temp");}, 0);

    reloadCollapsibles();
}

function subupgradeListRemove(element) {
    element.parentElement.parentElement.remove();
}

function subupgradeListAdd(element) {
    let button = element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.querySelector("button");
    let tbody = element.parentElement.parentElement.parentElement;
    let parentTable = element.parentElement.parentElement.parentElement.parentElement;

    element.parentElement.parentElement.remove()

    preserveInputValues(parentTable);

    tbody.innerHTML += `
        <tr>
        <td><input placeholder="Upgrade Description (i.e. +1% HP, +2 DPH on [weapon system])" class="apex-description"></td>
        <td><input type="number" value="1" step="1" class="apex-description-tp"> TP</td>
        <td style="width: 25px"><p class="apex-upgrade-remove2" onclick="subupgradeListRemove(this)">x</p></td>
        </tr>
        <tr>
            <td><button class="apex-upgrade-add" onclick="subupgradeListAdd(this)"><span>+</span> Click to add upgrade</button></td>
            <td></td>
            <td></td>
        </tr>
    `;

    setTimeout(function () {
        reloadCollapsibles();
        button.click(); 
        button.click();
    }, 0);
}

function formRemoveUpgrade(shipID, col, row, table="") {
    var ship = ships[shipID];

    var tableID = (!!table || table == 0) ? table + "-" : "";

    // if (!!document.getElementById(`${tableID}${col}-${row+1}`)) { // if the thing being deleted is in the middle of the stack
        
    // find the add upgrade button
    var r = 0;
    var alone = true;
    while (!!document.getElementById(`${tableID}${col}-${r}`)) {
        if (!!document.getElementById(`${tableID}${col}-${r}`).querySelector("button")) {
            r++;
        }
        else {break;}
    }

    document.getElementById(`${tableID}${col}-${r-1}`).querySelector("button").setAttribute("onclick", `formAddUpgrade(${shipID}, ${col}, ${r-2}, ${table})`);

    let rtimeout = r;
    setTimeout(function () {
        // shift everything up
        shiftColumnUp(shipID, col, row+1, table);
        document.getElementById(`${tableID}${col}-${rtimeout-1}`).classList.remove("occupied");

        // clear empty rows at bottom
        var r2 = 0;
        while (!!document.getElementById(`${tableID}${col}-${r2}`)) {
            r2++;
        }
        var empty = true;
        var variantOrModCount = (ships[shipID] instanceof SuperCap) ? ship.slotCount[table] : ship.variantCount;
        for (let i=0; i<variantOrModCount; i++) {
            if (document.getElementById(`${tableID}${i}-${r2-1}`).classList.contains("occupied")) {
                empty = false;
            }
        }
        if (empty) {
            document.getElementById(`${tableID}${col}-${r2-1}`).parentElement.remove();
        }
    }, 0);
    // }
}


function clampApexInput(repeat=true) {
    if (Number(document.getElementById("apex-level-selector").value) > 20) {
        document.getElementById("apex-level-selector").value = 20;
    }
    else if (Number(document.getElementById("apex-level-selector").value) < 0) {
        document.getElementById("apex-level-selector").value = 0;
    }

    if (repeat) {
        setTimeout(clampApexInput(false), 0);
    }
}

function clampBasicStatInput(event, element, repeat=true) {
    if (!!event) {blockNonNumericKeys(event);}

    if (Number(element.value) < 0) {
        element.value = 0;
    }
    else if (Number(element.value) > 2147483647) {
        element.value = 2147483647;
    }
    else if (Number(element.value) - Math.floor(Number(element.value)) > 0) {
        element.value = Math.floor(Number(element.value));
    }

    if (repeat) {
        setTimeout(clampBasicStatInput(null, element, false), 0);
    }
}

function blockNonNumericKeys(e) {
    if (["LCtrl","Backspace","Delete","Tab","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.key)) return;
    if (e.key >= "0" && e.key <= "9") return;
    if (e.ctrlKey) return;
    if (e.key === "-" && e.target.selectionStart === 0 && !e.target.value.includes("-")) return;
    e.preventDefault();
}

function stop_ImmediatePropagation(event) {
    event.stopImmediatePropagation();
}

function stopAccidentalClick(event) {
    if (event.keyCode === 32) {
        // event.stopImmediatePropagation();
        event.preventDefault();
    }
}

function shiftColumnUp(shipID, col, startRow, tableID) {
    const table = document.getElementById(`apex-upgrade-table-input-${tableID}`);
    const rows = table.rows;

    if (rows.length === 0) {
        return; // no rows to shift
    }
    // Shift content up for all subsequent rows
    for (let i = startRow; i < rows.length - 1; i++) {
        // copy over input values
        var inputs = rows[i + 1].cells[col].querySelectorAll("input");
        var values = [];
        for (let j=0; j<inputs.length; j++) {values.push(inputs[j].value);}

        rows[i].cells[col].innerHTML = rows[i + 1].cells[col].innerHTML;

        inputs = rows[i].cells[col].querySelectorAll("input");
        for (let j=0; j<inputs.length; j++) {inputs[j].value = values[j];}

        // rebind the X button
        if (!!rows[i].cells[col].querySelector(".apex-upgrade-remove")) {
            rows[i].cells[col].querySelector(".apex-upgrade-remove").setAttribute("onclick", `formRemoveUpgrade(${shipID}, ${col}, ${i-1}, ${tableID})`);
        }
        if (!!rows[i].cells[col].querySelector(".add-upgrade")) {
            rows[i].cells[col].classList.remove("occupied2")
        }
    }

    // Clear the content of the last cell in the column, or assign a default value
    rows[rows.length - 1].cells[col].innerHTML = ''; // Or a default value like '&nbsp;'
}

function preserveInputValues(tableID) {
    const table = (typeof tableID === "string") ? document.getElementById(tableID) : tableID;
    const rows = table.rows;

    if (rows.length === 0) {return;} // no rows

    const cols = rows[0].cells.length;

    // store values
    let savedValues = [];

    for (let i = 0; i < rows.length; i++) {
        savedValues[i] = [];
        for (let col = 0; col < cols; col++) {
            let inputs = rows[i].cells[col].querySelectorAll("input");
            savedValues[i][col] = [];
            for (let j=0; j<inputs.length; j++) {savedValues[i][col].push(inputs[j].value);}
        }
    }

    let table2 = table;
    let cols2 = cols;
    
    // restore values
    setTimeout(function () {
        const newRows = table2.rows;

        for (let i = 0; i < newRows.length; i++) {
            for (let col = 0; col < cols2; col++) {
                let inputs = newRows[i].cells[col].querySelectorAll("input");
                let oldVals = savedValues[i]?.[col];
                if (!oldVals) continue;

                for (let j = 0; j < inputs.length; j++) {
                    if (!!oldVals[j]) {
                        inputs[j].value = oldVals[j];
                    }
                }
            }
        }
    }, 0);
}

function generateApexCode() {
    var ship = ships[selectedShipIdx];
    
    var code = (ship instanceof SuperCap) ? "new ApexSuperCap(" : "new ApexGeneral(";

    clampApexInput(false);

    var apex_level = Number(document.getElementById("apex-level-selector").value);

    // basic stats
    code += document.getElementById("apex-level-selector").value + ", ";
    code += document.getElementById("hp-bonus-input").value + ", ";
    code += document.getElementById("cruise-bonus-input").value + ", ";
    code += document.getElementById("warp-bonus-input").value + ", ";

    // contributor
    code += "new Contributor("

    if (!!document.getElementById("name-input").value) {code += "\"" + document.getElementById("name-input").value + "\"";}
    else {alert("Please provide your username."); return;} 

    if (!!document.getElementById("discord-input").value) {code += ", \"" + document.getElementById("discord-input").value + "\"";}
    if (!!document.getElementById("player-id-input").value) {code += ", " + document.getElementById("player-id-input").value;}

    code += ")"

    // apex data

    if (ship instanceof SuperCap) {
        var allSlots = [];

        for (let mod=0; mod<ship.moduleCount; mod++) {allSlots.push("");}


        for (let mod=0; mod<ship.moduleCount; mod++) {
            var table = document.getElementById(`form-upgrade-list-${mod}`);
            if (!table) {alert("You haven't selected a ship!"); return;}
            var rows = table.rows;

            var variantUpgrades = [];
            for (let i=0; i<ship.slotCount[mod]; i++) {variantUpgrades.push("[");}

            for (let i = 0; i < rows.length; i++) {
                for (let col = 0; col < ship.slotCount[mod]; col++) {
                    if (rows[i].cells[col].classList.contains("occupied2")) { // there is an upgrade in this cell
                        variantUpgrades[col] += "new ApexUpgrade(";

                        variantUpgrades[col] += `"${rows[i].cells[col].querySelector("input").value}", `;

                        // get the upgrade table
                        var table2 = rows[i].cells[col].querySelector("table");
                        var rows2 = table2.rows;

                        // iterate through each individual upgrade level
                        var desc = "";
                        var tp = "";
                        for (let k = 1; k < rows2.length - 1; k++) {
                            desc += `"${rows2[k].cells[0].querySelector("input").value}"` + ((k == rows2.length - 2) ? "" : ",");
                            tp += `${rows2[k].cells[1].querySelector("input").value}` + ((k == rows2.length - 2) ? "" : ",");
                        }
                        variantUpgrades[col] += `[${desc}], [${tp}]), `;
                    }
                }
            }

            for (let i=0; i<ship.slotCount[mod]; i++) {variantUpgrades[i] += "]";}

            allSlots[mod] += "[";

            for (let i=0; i<ship.slotCount[mod]; i++) {
                allSlots[mod] += variantUpgrades[i] + ((i == ship.slotCount[mod] - 1) ? "" : ",");
            }
            allSlots[mod] += "]";
        }
        
        allEmpty = true;
        for (let i=0; i<ship.moduleCount; i++) {
            if (/[^\[\],]/.test(allSlots[i])) {allEmpty = false};
        }

        if (!allEmpty) {
            code += ", [";

            for (let i=0; i<ship.moduleCount; i++) {
                code += allSlots[i] + ((i == ship.moduleCount - 1) ? "" : ",");
            }
            code += "]";
        }
    }
    else {
        var table = document.getElementById("form-upgrade-list-0");
        if (!table) {alert("You haven't selected a ship!"); return;}
        var rows = table.rows;

        var variantUpgrades = [];
        for (let i=0; i<ship.variantCount; i++) {variantUpgrades.push("[");}

        for (let i = 0; i < rows.length; i++) {
            for (let col = 0; col < ship.variantCount; col++) {
                if (rows[i].cells[col].classList.contains("occupied2")) { // there is an upgrade in this cell
                    variantUpgrades[col] += "new ApexUpgrade(";

                    variantUpgrades[col] += `"${rows[i].cells[col].querySelector("input").value}", `;

                    // get the upgrade table
                    var table2 = rows[i].cells[col].querySelector("table");
                    var rows2 = table2.rows;

                    // iterate through each individual upgrade level
                    var desc = "";
                    var tp = "";
                    for (let k = 1; k < rows2.length - 1; k++) {
                        desc += `"${rows2[k].cells[0].querySelector("input").value}"` + ((k == rows2.length - 2) ? "" : ",");
                        tp += `${rows2[k].cells[1].querySelector("input").value}` + ((k == rows2.length - 2) ? "" : ",");
                    }
                    variantUpgrades[col] += `[${desc}], [${tp}]), `;
                }
            }
        }

        for (let i=0; i<ship.variantCount; i++) {variantUpgrades[i] += "]";}

        allEmpty = true;
        for (let i=0; i<ship.variantCount; i++) {
            if (variantUpgrades[i] != "[]") {allEmpty = false};
        }

        if (!allEmpty) {
            code += ", [";

            for (let i=0; i<ship.variantCount; i++) {
                code += variantUpgrades[i] + ((i == ship.variantCount - 1) ? "" : ",");
            }
            code += "]";
        }
    }

    code += "),"

    code = code.replace(/, ]/g, ']'); // get rid of bad code formatting conventions with leaving , ] at the end.

    document.getElementById("generated-code").innerHTML = code;

    // temporary line before git integration is here
    // document.getElementById("generated-code").innerHTML = `${ship.apexReferenceVariable}[${apex_level}] = ${code}`;

    document.getElementById("generated-code").style.display = "inline-block";

    // JOKE LINE, don't actually uncomment this 
    // eval(code);
    globalCode = code;

    return true;
}

var globalCode;

async function getImageDataURLs() {
    const images = document.getElementById("backing-photos").files;
    let dataURLs = [];

    const readFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = () => reject(reader.error);
            reader.readAsDataURL(file);
        });
    };

    for (const file of images) {
        const result = await readFile(file);
        dataURLs.push(result);
    }

    return dataURLs;
}


async function uploadImage(file) {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch("https://apex-database-pr.ak47-tetris.workers.dev/upload-image", {
        method: "POST",
        body: form
    });

    return res.json(); // contains { url: ... }
}

async function uploadFiles() {
    const files = document.getElementById("backing-photos").files;

    const form = new FormData();
    for (const file of files) {
        form.append("files", file, file.name);
    }

    const res = await fetch("https://apex-database-pr.ak47-tetris.workers.dev/upload-image", {
        method: "POST",
        body: form
    });

    const responses = await res.json();
    
    const urls = [];
    for (const file of responses) {
        urls.push(file.content.download_url);
    }
    // console.log(urls);
    return urls;
}

async function sendPR() {
    // get images
    var images = document.getElementById("backing-photos").files;
    // getImages().then(dataURLs => {images;});
    const uploadedURLs = await uploadFiles();
    // const uploadedURLs = [];
    // for (const f of images) {
    //     const { url } = await uploadImage(f);
    //     uploadedURLs.push(url);
    //     console.log(url);
    // }

    // console.log(uploadedURLs);

    const payload = {
        shipIdx: selectedShipIdx,
        shipDisplayName: ships[selectedShipIdx].id,
        username: document.getElementById("name-input").value,
        index: Number(document.getElementById("apex-level-selector").value),
        newValue: globalCode,
        imageURLs: uploadedURLs
    };

    try {
        const response = await fetch("https://apex-database-pr.ak47-tetris.workers.dev/create-pr", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
    });

    const data = await response.json();
    console.log(data);

    if (response.ok && data.prUrl) {
        console.log(`PR Created: <a href="${data.prUrl}" target="_blank">${data.prUrl}</a>`);
        document.getElementById("pr-result-message").innerHTML = `
            Success! You can view your pull request at: <a href="${data.prUrl}" target="_blank">${data.prUrl}</a>
            `
    } else {
        console.error(`Error: ${JSON.stringify(data, null, 2)}`);
    }

    } catch (err) {
        console.error(err);
        console.log(`Network error: ${err.message}`);
    }
}

function verifyCorrect() {
    if (!generateApexCode()) {document.getElementById("verify-correct").checked = false; return;}

    document.getElementById("pr-result-message").innerHTML = "";

    document.getElementById("submit-PR").disabled = !document.getElementById("submit-PR").disabled;
    document.getElementById("form-input-container").classList.toggle("disabledform");
}