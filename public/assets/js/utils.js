/* Troca divs através do radio selecionado */
export let dynamicDivRadio = (form1, form2, radio1, radio2, div1, div2) => {
    $(div2).hide();
    
    $(radio1).on("change", function() {  
        $(div1).show();
        $(div2).hide();
        $(radio2).prop('checked', false);
       if(this.checked && this.value == '1') {
           $(form1).show();
           $(form2).hide();
       }
   })
          
   $(radio2).on("change", function() { 
       $(div2).show();
       $(div1).hide();
       $(radio1).prop('checked', false);
           if(this.checked && this.value == '2') {
               $(form2).show();
               $(form1).hide();
       }
   });   
}