

 
 
 
 $( document ).ready(() => {
 $(".dropdown-trigger").dropdown();

   let elems = document.querySelectorAll('.carousel');
    let instances1 = M.Carousel.init(elems);

    $('.tap-target').tapTarget();
    $('.sidenav').sidenav();
    $('select').formSelect();
    $('select').material_select();

    // for HTML5 "required" attribute
    $("select[required]").css({
      display: "inline",
      height: 0,
      padding: 0,
      width: 0
    });
  });

  
