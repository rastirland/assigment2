

 
 
 
 $( document ).ready(() => {
 $(".dropdown-trigger").dropdown();

   let elems = document.querySelectorAll('.carousel');
    let instances1 = M.Carousel.init(elems);

    $('.tap-target').tapTarget();
    $('.sidenav').sidenav();
  });
  
