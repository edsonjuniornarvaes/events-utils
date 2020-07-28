$(document).ready(function () {

    $("#enviar").click(function () {
  
      var error = 0;
      
      $("#main").find("input[required],textarea[required],select[required]").each(function () {
          let val = $(this).val();
          if (val.length === 0 && val === "" && $(this).prop("type") !== "hidden") {
            error++;
          }
        });
      
        var opcao_estado = $("#estado option:selected").val();
        var opcao_cidade = $("#cidade option:selected").val();
  
      if (error == 0 && opcao_estado && opcao_cidade != "") {
        var t = 0;
        $("#endereco #localidade").each(function () {
          t++;
        });
  
        var $this = $(this);
        let cep = $("#cep").val();
        let logradouro = $("#logradouro").val();
        let numero = $("#numero").val();
        let bairro = $("#bairro").val();
        let complemento = $("#complemento").val();
        let idestado = $("#estado").val();
        let idcidade = $("#cidade ").val();
  
        //Recuperar valor do select na hora de listar
        let estado = $("#estado option:selected").text();
        let cidade = $("#cidade option:selected").text();
  
        var select = document.querySelector("select");
        var option = select.children[select.selectedIndex];
        var texto = option.textContent;
        var tr = ` <tr>
                      <td>${cep}         </td>
                      <td>${logradouro}  </td>
                      <td>${numero}      </td>
                      <td>${bairro}      </td>
                      <td>${complemento} </td>
                      <td>${estado}      </td>
                      <td>${cidade}      </td>
                  </tr> `;
        
        $("#grid").find("tbody").append(tr);
        
        $('input, select').val('');
        
        console.log(cep + ' - ' + logradouro + ' - ' + numero + ' - ' + bairro + ' - ' + complemento + ' - ' + estado + ' - ' + cidade);
        
        var hiddens =
          `<div id="localidade">
              <input type="hidden" name="endereco[${t}][cep]" value="${cep}"/>
              <input type="hidden" name="endereco[${t}][logradouro]" value="${logradouro}">
              <input type="hidden" name="endereco[${t}][numero]" value="${numero}">
              <input type="hidden" name="endereco[${t}][bairro]" value="${bairro}">
              <input type="hidden" name="endereco[${t}][complemento]" value="${complemento}">
              <input type="hidden" name="endereco[${t}][idestado]" value="${estado}">
              <input type="hidden" name="endereco[${t}][idcidade]" value="${cidade}">
          </div>`;
  
        return false;
      } else {
        alert("Preencha todos os campos");
      }
    });
  });
  