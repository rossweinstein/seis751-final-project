var birdInformation = {
    treeSwallow: {
        name: 'Tree Swallow',
        latin: 'Tachycineta bicolor',
        family: 'Swallows',
        height: '12-14cm',
        wingspan: '30-35cm',
        weight: '17-25.5g',
        eggs: '4-7, sometimes 2-8. Very pale pink at first, fading to white',
        habitat: 'Open country near water, marshes, meadows, lakes.',
        diet: 'Mostly insects, some berries.',
        video: 'https://www.youtube.com/embed/ijzHSkGd6w8',
        photo: '',
        call: ''
    },
    easternBluebird: {
        name: 'Eastern Bluebird',
        latin: 'Sialia sialis',
        family: 'Thrushes',
        height: '16-21cm',
        wingspan: '25-32cm',
        weight: '27-34g',
        eggs: '4-5, sometimes 3-7. Pale blue, unmarked; sometimes white.',
        habitat: 'Open country with scattered trees; farms, roadsides.',
        diet: 'Mostly insects and berries.',
        video: 'https://www.youtube.com/embed/Mpcs8s5jIrQ',
        photo: '',
        call: ''
    },
    beltedKingfisher: {
        name: 'Belted Kingfisher',
        latin: 'Megaceryle alcyon',
        family: 'Kingfishers',
        height: '28-35cm',
        wingspan: '48-58cm',
        weight: '113-178g',
        eggs: '6-7, sometimes 5-8. White.',
        habitat: 'Streams, lakes, bays, coasts; nests in banks.',
        diet: 'Mostly small fish (smaller than 4-5"), crayfish, frogs, tadpoles, aquatic insects.',
        video: 'https://www.youtube.com/embed/UUwgjKCcnxI',
        photo: '../images/belted-kingfisher.svg',
        call: ''
    },
    blueJay: {
        name: 'Blue Jay',
        latin: 'Cyanocitta cristata',
        family: 'Crows, Magpies, Jays',
        height: '22-30cm',
        wingspan: '34-43cm',
        weight: '70-100g',
        eggs: '4-5, sometimes 3-7. Greenish or buff, sometimes pale blue, spotted with brown and gray.',
        habitat: 'Oak and pine woods, suburban gardens, groves, towns.',
        diet: 'Omnivorous',
        video: 'https://www.youtube.com/embed/_cyzlxqtSMg',
        photo: '',
        call: ''
    },
    barnSwallow: {
        name: 'Barn Swallow',
        latin: 'Hirundo rustica',
        family: 'Swallows',
        height: '17-19cm',
        wingspan: '32-34.5cm',
        weight: '16-22g',
        eggs: '4-5, sometimes 6, rarely 7. White, spotted with brown.',
        habitat: 'Open or semi-open land, farms, fields, marshes, lakes.',
        diet: 'Insects',
        video: 'https://www.youtube.com/embed/XgjEGXkpLic',
        photo: '',
        call: ''
    },
    indigoBunting: {
        name: 'Indigo Bunting',
        latin: 'Passerina cyanea',
        family: 'Cardinals, Grosbeaks and Buntings',
        height: '11.5-15cm',
        wingspan: '18-23cm',
        weight: '11.2–21.4g',
        eggs: '3-4, rarely 1-2. White to bluish-white, rarely with brown or purple spots.',
        habitat: 'Brushy pastures, bushy wood edges.',
        diet: 'Mostly seeds and insects.',
        video: 'https://www.youtube.com/embed/JJTaV95E9Qg',
        photo: '',
        call: ''
    },
    purpleMartin: {
        name: 'Purple Martin',
        latin: 'Progne subis',
        family: 'Swallows',
        height: '18-22cm',
        wingspan: '39-43cm',
        weight: '45-60g',
        eggs: '4-5, sometimes 3-8. White.',
        habitat: 'Towns, farms, semi-open country near water; in west, also mountain forest, saguaro desert.',
        diet: 'Insects',
        video: 'https://www.youtube.com/embed/uB2CwX13rDg',
        photo: '',
        call: ''
    }
};

document.getElementById('media-belted-kingfisher').addEventListener('click', function () {
   fillInInfo(birdInformation.beltedKingfisher);
});
document.getElementById('media-barn-swallow').addEventListener('click', function () {
  fillInInfo(birdInformation.barnSwallow);
});
document.getElementById('media-tree-swallow').addEventListener('click', function () {
  fillInInfo(birdInformation.treeSwallow);
});
document.getElementById('media-indigo-bunting').addEventListener('click', function () {
  fillInInfo(birdInformation.indigoBunting);
});
document.getElementById('media-blue-jay').addEventListener('click', function () {
  fillInInfo(birdInformation.blueJay);
});
document.getElementById('media-purple-martin').addEventListener('click', function () {
  fillInInfo(birdInformation.purpleMartin);
});
document.getElementById('media-eastern-bluebird').addEventListener('click', function () {
  fillInInfo(birdInformation.easternBluebird);
});

function fillInInfo (bird) {
  document.getElementById('bird-name').textContent = bird.name;
  document.getElementById('bird-latin').textContent = bird.latin;
  document.getElementById('bird-family').textContent = bird.family;
  document.getElementById('bird-height').textContent = bird.height;
  document.getElementById('bird-wingspan').textContent = bird.wingspan;
  document.getElementById('bird-weight').textContent = bird.weight;
  document.getElementById('bird-eggs').textContent = bird.eggs;
  document.getElementById('bird-habitat').textContent = bird.habitat;
  document.getElementById('bird-diet').textContent = bird.diet;
  document.getElementById('bird-info-picture').src = bird.photo;
  document.getElementById('bird-movie').src = bird.video;
}