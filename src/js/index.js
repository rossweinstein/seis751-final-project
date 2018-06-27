(function(){

  /*
    When a bird is highlighted, it will display their name on the screen
    When no bird is highlighted, it will ask for a bird to be selected
  */
  $('#belted-kingfisher').mouseover(() => updateSelectAnyBirdText('Belted Kingfisher'));
  $('#barn-swallow').mouseover(() => updateSelectAnyBirdText('Barn Swallow'));
  $('#tree-swallow').mouseover(() => updateSelectAnyBirdText('Tree Swallow'));
  $('#indigo-bunting').mouseover(() => updateSelectAnyBirdText('Indigo Bunting'));
  $('#purple-martin').mouseover(() => updateSelectAnyBirdText('Purple Martin'));
  $('#blue-jay').mouseover(() => updateSelectAnyBirdText('Blue Jay'));
  $('#eastern-bluebird').mouseover(() => updateSelectAnyBirdText('Eastern Bluebird'));
  $('.bird-image').mouseout(() => updateSelectAnyBirdText('Select Any Bird to Learn More'));

  function updateSelectAnyBirdText(birdName) {
    $('#bird-name').html(birdName);
  }

   /*
    When a bird is clicked, update sessionStorage so the appropriate bird is displayed on
    the next screen and the navigate to the Featured.html page
  */
  $('#belted-kingfisher').click(() => setSessionStorage('beltedKingfisher'));
  $('#barn-swallow').click(() => setSessionStorage('barnSwallow'));
  $('#tree-swallow').click(() => setSessionStorage('treeSwallow'));
  $('#indigo-bunting').click(() => setSessionStorage('indigoBunting'));
  $('#purple-martin').click(() => setSessionStorage('purpleMartin'));
  $('#blue-jay').click(() => setSessionStorage('blueJay'));
  $('#eastern-bluebird').click(() => setSessionStorage('easternBluebird'));

  function setSessionStorage(birdName) {
    sessionStorage.setItem('bird', birdName);
  }

  $('.bird-image').click(() => window.location.href='../html/featured.html');

})();
