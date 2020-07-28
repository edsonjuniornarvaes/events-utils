(function () {
    let div1 = document.getElementById("div1");
    let nomes = ["Diego", "Gabriel", "Lucas"];
  
    let ul = document.createElement("ul");
    div1.appendChild(ul);
  
    let li = "";
    for (let i = 0; i < nomes.length; i++) {
      li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML = nomes[i];
    }
  
    let ipt = document.createElement("input");
    let addNameButton = document.createElement("button");
  
    div1.appendChild(ipt);
    div1.appendChild(addNameButton);
  
    let txtBtn = document.createTextNode("Adicionar Nome");
    addNameButton.appendChild(txtBtn);
  
    addNameButton.addEventListener("click", function () {
      let iptVal = ipt.value;
      let newLi = document.createElement("li");
      ul.appendChild(newLi);
      newLi.innerHTML = iptVal;
      ipt.value = "";
    });
  
    let x = 0;
  })();
  