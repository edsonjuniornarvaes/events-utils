$("[data-comissao-produto]").hide();
$("[data-comissao-departamento]").hide();

$("#btn-comissao").on("click", function() {
  var opcao_selecionada = $("#m-select option:selected").val();
  console.log(opcao_selecionada);

  if (opcao_selecionada == 0) {
    $("[data-comissao-produto]").show();
    $("[data-comissao-departamento]").hide();
  }
  
  if (opcao_selecionada == 1) {
    $("[data-comissao-departamento]").show();
    $("[data-comissao-produto]").hide();
  }
  
});