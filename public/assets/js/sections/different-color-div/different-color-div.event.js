(function () {
  
    let adDiv = document.getElementById("myBody");
    let btn = document.getElementById("more");
    console.log(adDiv)
    console.log(btn)
    
    let x = 0;
    btn.addEventListener("click", function () {
      
      function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
  
      let newColor = getRandomColor(); // #E943F0
      let newDiv = document.createElement("div");
      newDiv.style.width = "100px";
      newDiv.style.marginTop = "10px";
      newDiv.style.height = "50";
      newDiv.style.background = newColor;
  
      adDiv.appendChild(newDiv);
  
      x++;
  
      return newDiv;
    });
  })();