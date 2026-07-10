const start = new Date('1975-04-05T00:00:00');

function update() {
    const now = new Date();

    let anni = now.getFullYear() - start.getFullYear();
    let mesi = now.getMonth() - start.getMonth();
    let giorni = now.getDate() - start.getDate();
    let ore = now.getHours() - start.getHours();

    if (ore < 0) {
        ore += 24;
        giorni--;
    }

    if (giorni < 0) {
        const mesePrec = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        giorni += mesePrec;
        mesi--;
    }

    if (mesi < 0) {
        mesi += 12;
        anni--;
    }

    document.getElementById('anni').textContent = anni;
    document.getElementById('mesi').textContent = mesi;
    document.getElementById('giorni').textContent = giorni;
    document.getElementById('ore').textContent = ore;
}

update();
setInterval(update, 1000);
