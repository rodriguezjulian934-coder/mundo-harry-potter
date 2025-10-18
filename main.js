const grid = document.getElementById('grid');

fetch('https://hp-api.onrender.com/api/characters')
.then(r=>r.json())
.then(d => {
document.getElementById('loading').remove();
d.filter(p => p.image) .forEach(p => {
    const card=document.createElement('div');
    card.classname = 'card';
    card.innerHTML = `
    <div class="portrait" > <img src=${p.image}
    alt=${p.name }></div>
    <div class=">${p.name}</div>
    <div class=">${p.house}</div>
    <div class=">${p.actor}</div>
    <div class=">${p.alive}</div>`
    grid.append(card)
});

});
