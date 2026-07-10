const persone = {
    'DC': { data: '1975-04-05', testo: 'Sabato 5 aprile 1975' },
    'BM': { data: '1975-04-23', testo: 'Mercoledì 23 aprile 1975' },
};

const params = new URLSearchParams(window.location.search);
let chiaveRichiesta = params.get('chi')?.toUpperCase();

if (!chiaveRichiesta) {
    const urlIntero = window.location.pathname.toUpperCase();
    chiaveRichiesta = Object.keys(persone).find(chiave => urlIntero.includes('/' + chiave)) || 'DC';
}

const chi = persone[chiaveRichiesta] ? chiaveRichiesta : 'DC';
const profilo = persone[chi];

const start = new Date(`${profilo.data}T00:00:00`);
document.getElementById('title').textContent = `Quanto tempo ha vissuto ${chi}?`;
document.getElementById('info').textContent = profilo.testo;

function update() {
    const now = new Date();
    let anni = now.getFullYear() - start.getFullYear();
    let mesi = now.getMonth() - start.getMonth();
    let giorni = now.getDate() - start.getDate();
    let ore = now.getHours() - start.getHours();

    if (ore < 0) { ore += 24; giorni--; }
    if (giorni < 0) {
        const mesePrec = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        giorni += mesePrec;
        mesi--;
    }
    if (mesi < 0) { mesi += 12; anni--; }

    if (anni < 0) {
        document.getElementById('anni').textContent = "-";
        document.getElementById('mesi').textContent = "-";
        document.getElementById('giorni').textContent = "-";
        document.getElementById('ore').textContent = "-";
        return;
    }

    document.getElementById('anni').textContent = anni;
    document.getElementById('mesi').textContent = mesi;
    document.getElementById('giorni').textContent = giorni;
    document.getElementById('ore').textContent = ore;
}
update();
setInterval(update, 1000);