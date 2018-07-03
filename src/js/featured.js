(function() {
  var theWindow = $(window);
  var $bg = $("#bg");
  var aspectRatio = 2560 / 1440;

  if (!sessionStorage.getItem("bird")) {
    sessionStorage.setItem("bird", "beltedKingfisher");
  }

  loadBirdInformation();

  $("#option-belted-kingfisher").click(() => getBirdInfo("beltedKingfisher"));
  $("#option-barn-swallow").click(() => getBirdInfo("barnSwallow"));
  $("#option-tree-swallow").click(() => getBirdInfo("treeSwallow"));
  $("#option-indigo-bunting").click(() => getBirdInfo("indigoBunting"));
  $("#option-blue-jay").click(() => getBirdInfo("blueJay"));
  $("#option-purple-martin").click(() => getBirdInfo("purpleMartin"));
  $("#option-eastern-bluebird").click(() => getBirdInfo("easternBluebird"));

  function getBirdInfo(bird) {
    if (sessionStorage.getItem("bird") !== bird) {
      sessionStorage.setItem("bird", bird);
      loadBirdInformation();
    }
  }

  function loadBirdInformation() {
    axios
      .get("../json/bird-info.json")
      .then(function(response) {
        foundInfoForBird(response.data[sessionStorage.getItem("bird")]);
      })
      .catch(function(error) {
        cannotFindBird();
      });
  }

  function foundInfoForBird(bird) {
    $(".bird-name").html(bird.name);
    $(".bird-latin").html(bird.latin);
    $(".bird-family").html(bird.family);
    $(".bird-height").html(bird.height);
    $(".bird-wingspan").html(bird.wingspan);
    $(".bird-weight").html(bird.weight);
    $(".bird-eggs").html(bird.eggs);
    $(".bird-habitat").html(bird.habitat);
    $(".bird-diet").html(bird.diet);
    $("#mobile-bird-image").attr("src", bird.smallphoto);
    // document.getElementById('bird-call').src = bird.call;
    $("#bg").attr("src", bird.photo);
  }

  function cannotFindBird() {
    document.getElementById("bird-name").textContent = "N/A";
    document.getElementById("bird-latin").textContent = "N/A";
    document.getElementById("bird-family").textContent = "N/A";
    document.getElementById("bird-height").textContent = "N/A";
    document.getElementById("bird-wingspan").textContent = "N/A";
    document.getElementById("bird-weight").textContent = "N/A";
    document.getElementById("bird-eggs").textContent = "N/A";
    document.getElementById("bird-habitat").textContent = "N/A";
    document.getElementById("bird-diet").textContent = "N/A";
    // document.getElementById('bird-call').src = "";
    document.getElementById("bg").src = "";
  }

  function resizeBg() {
    if (theWindow.width() / theWindow.height() < aspectRatio) {
      $bg.removeClass().addClass("bgheight");
    } else {
      $bg.removeClass().addClass("bgwidth");
    }
  }
  theWindow.resize(resizeBg).trigger("resize");
})();
