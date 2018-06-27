(function () {

    if (!sessionStorage.getItem('bird')) {
        sessionStorage.setItem('bird', 'beltedKingfisher');
    }

    loadBirdInformation();

    $('#media-belted-kingfisher').click(() => getBirdInfo('beltedKingfisher'));
    $('#media-barn-swallow').click(() => getBirdInfo('barnSwallow'));
    $('#media-tree-swallow').click(() => getBirdInfo('treeSwallow'));
    $('#media-indigo-bunting').click(() => getBirdInfo('indigoBunting'));
    $('#media-blue-jay').click(() => getBirdInfo('blueJay'));
    $('#media-purple-martin').click(() => getBirdInfo('purpleMartin'));
    $('#media-eastern-bluebird').click(() => getBirdInfo('easternBluebird'));

    function getBirdInfo(bird) {
        if (sessionStorage.getItem('bird') !== bird) {
            sessionStorage.setItem('bird', bird);
            loadBirdInformation();
        }
    }

    function loadBirdInformation() {
        axios.get('../json/bird-info.json')
            .then(function (response) {
                foundInfoForBird(response.data[sessionStorage.getItem('bird')]);
            })
            .catch(function (error) {
                cannotFindBird();
            });
    }

    function foundInfoForBird(bird) {
        document.getElementById('bird-name').textContent = bird.name;
        document.getElementById('bird-latin').textContent = bird.latin;
        document.getElementById('bird-family').textContent = bird.family;
        document.getElementById('bird-height').textContent = bird.height;
        document.getElementById('bird-wingspan').textContent = bird.wingspan;
        document.getElementById('bird-weight').textContent = bird.weight;
        document.getElementById('bird-eggs').textContent = bird.eggs;
        document.getElementById('bird-habitat').textContent = bird.habitat;
        document.getElementById('bird-diet').textContent = bird.diet;
        $('#bird-call').attr('src', bird.call);
        document.getElementById('bird-info-picture').src = bird.photo;
        document.getElementById('bird-movie').src = bird.video;
    }

    function cannotFindBird() {
        document.getElementById('bird-name').textContent = "N/A";
        document.getElementById('bird-latin').textContent = "N/A";
        document.getElementById('bird-family').textContent = "N/A";
        document.getElementById('bird-height').textContent = "N/A";
        document.getElementById('bird-wingspan').textContent = "N/A";
        document.getElementById('bird-weight').textContent = "N/A";
        document.getElementById('bird-eggs').textContent = "N/A";
        document.getElementById('bird-habitat').textContent = "N/A";
        document.getElementById('bird-diet').textContent = "N/A";
        document.getElementById('bird-info-picture').src = "";
        document.getElementById('bird-movie').src = "";
    }
})();