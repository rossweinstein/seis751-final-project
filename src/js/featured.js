
(function() {
    if (!sessionStorage.getItem('bird')) {
        sessionStorage.setItem('bird', 'beltedKingfisher');
    }

    loadBirdInformation();

    $('#option-belted-kingfisher').click(() => getBirdInfo('beltedKingfisher'));
    $('#option-barn-swallow').click(() => getBirdInfo('barnSwallow'));
    $('#option-tree-swallow').click(() => getBirdInfo('treeSwallow'));
    $('#option-indigo-bunting').click(() => getBirdInfo('indigoBunting'));
    $('#option-blue-jay').click(() => getBirdInfo('blueJay'));
    $('#option-purple-martin').click(() => getBirdInfo('purpleMartin'));
    $('#option-eastern-bluebird').click(() => {
        console.log("Click");
        getBirdInfo('easternBluebird');
    });

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
       // document.getElementById('bird-call').src = bird.call;
       document.getElementById('bg').src
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
       // document.getElementById('bird-call').src = "";
    }

    var theWindow = $(window); 
    var $bg = $("#bg");
    var aspectRatio = $bg.width() / $bg.height();

    function resizeBg() {
        if ((theWindow.width() / theWindow.height()) < aspectRatio) {
            $bg.removeClass().addClass('bgheight');
        } else {
            $bg.removeClass().addClass('bgwidth');
        }
    }

    theWindow.resize(resizeBg).trigger("resize");

})();