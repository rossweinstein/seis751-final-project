$('#col-tree-swallow').mouseover(() => $('#selection').html("Learn about the Tree Swallow"));
$('#col-eastern-bluebird').mouseover(() => $('#selection').html("Learn about the Eastern Bluebird"));
$('#col-belted-kingfisher').mouseover(() => $('#selection').html("Learn about the Belted Kingfisher"));
$('#col-blue-jay').mouseover(() => $('#selection').html("Learn about the Blue Jay"));
$('#col-barn-swallow').mouseover(() => $('#selection').html("Learn about the Barn Swallow"));
$('#col-indigo-bunting').mouseover(() => $('#selection').html("Learn about the Indigo Bunting"));
$('#col-purple-martin').mouseover(() => $('#selection').html("Learn about the Purple Martin"));

$('.columned-image').mouseleave(() => $('#selection').html(''));

/*
    When a bird is clicked, update sessionStorage so the appropriate bird is displayed on
    the next screen and the navigate to the Featured.html page
  */
$('#col-belted-kingfisher').click(() => setSessionStorage('beltedKingfisher'));
$('#col-barn-swallow').click(() => setSessionStorage('barnSwallow'));
$('#col-tree-swallow').click(() => setSessionStorage('treeSwallow'));
$('#col-indigo-bunting').click(() => setSessionStorage('indigoBunting'));
$('#col-purple-martin').click(() => setSessionStorage('purpleMartin'));
$('#col-blue-jay').click(() => setSessionStorage('blueJay'));
$('#col-eastern-bluebird').click(() => setSessionStorage('easternBluebird'));

function setSessionStorage(birdName) {
    sessionStorage.setItem('bird', birdName);
  }

  $('.columned-image').click(() => window.location.href='../html/featured.html');