function tabNotif(tab) {
    document.getElementById(`${tab}Notif`).style.display = 'inline-block';
}

function successContract(contract) {
    function str() {
        var str = '';
        for (let i in contract.reward.currency) {
            str += `${contract.reward.currency[i].toFixed(2)} ${Player.currency[Object.keys(Player.currency).filter(item => item == i)[0]].name}<br>`
        }
        for (let i in contract.reward.resources) {
            str += `${contract.reward.resources[i].toFixed(2)} ${resources[i].name}`
        }
        return str;
    }
    siiimpleToast.success(`<span style="font-weight: 700">Contract complete!</span><br>
    You received:<br> <span style="font-size: 0.7em;">${str()}</span>`, {
        position: 'bottom|right',
        margin: 10,
        delay: 0,
        duration: 3000,
        style: {

        },
	});
}

function failContract(contract) {
    function str() {
        var str = '';
        for (let i in contract.failure.currency) {
            str += `${contract.failure.currency[i].toFixed(2)} ${Player.currency[Object.keys(Player.currency).filter(item => item == i)[0]].name}<br>`
        }
        for (let i in contract.failure.resources) {
            str += `${contract.failure.resources[i].toFixed(2)} ${resources[i].name}`
        }
        return str;
    }
    siiimpleToast.alert(`<span style="font-weight: 700">Contract failed!</span><br>
    You lost:<br> <span style="font-size: 0.7em;">${str()}</span>`, {
        position: 'bottom|right',
        margin: 10,
        delay: 0,
        duration: 3000,
        style: {

        },
	});
}