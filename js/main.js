$( document ).ready(function() {
    // Control click of the itme
    $(".portfolio-item").click(function(){
      var elementID = $(this).attr("id");
      if (elementID === "geoparse"){
        location.href = "https://github.com/guma44/GEOparse";
      }
      else if (elementID === "mirzag"){
        location.href = "https://github.com/guma44/MIRZAG";
      }
      else if (elementID === "snornas"){
        location.href = "https://github.com/guma44/snoRNAHybridSearchPipeline";
      }
    })
});
