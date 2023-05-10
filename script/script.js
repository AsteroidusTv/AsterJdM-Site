
   window.onload = function() {
      document.getElementById("popup-container").style.display = "flex";
   }

   document.getElementById("close-popup").addEventListener("click", function() {
      document.getElementById("popup-container").style.display = "none";
   });
