function validation(){
    let name = document.forms["contact"]["name"];
    let subject = document.forms["contact"]["subject"];
    let phone = document.forms["contact"]["phone"];
    let message = document.forms["contact"]["message"];
    

    if (name.value == ""){
        window.alert("Please enter name.");
        name.focus();
        return false;
    }

    else if (subject.value == ""){
        window.alert("Please the put a message subject.");
        subject.focus();
        return false;
    }

    else if (phone.value == ""){
        window.alert("Please enter your Number.");
        phone.focus();
        return false;
    }

    else if (message.value == ""){
        window.alert("Please enter a message.");
        message.focus();
        return false;
    }

    else {
    return true;
    }
};

const email = document.getElementById("mail");

let form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false);

function check(){
    if (validation() == true){
      
        
     }
    };

function contact_submit(e) {
  // Stop Form From Submitting
  e.preventDefault();

  // Set Initial Variables
  let target = e.target || e.srcElement;
  let to = 'rastirland@hotmail.com';
  let uri = 'mailto:' + to;
  let body = '';

  // Set Form Values to Variables
  let name = target.elements['name'].value;
  let subject = target.elements['subject'].value;
  let phone = target.elements['phone'].value;
  let message = target.elements['message'].value;

  // Build Body / Message with all Input Fields
  body += message + "\r\n\r\n";
  body += "Name: " + name + "\r\n";
  body += "Phone Number: " + phone + "\r\n";
  
  // Build final Mailto URI
  uri += '?subject=' + encodeURIComponent(subject);
  uri += '&body=' + encodeURIComponent(body);

  // Open Mailto in New Window / Tab
  window.open(uri,'_blank');
}




console.log("this is working")
document.getElementById("menu").addEventListener("click", openMenu);
function openMenu(){
  document.getElementById("dropdown").classList.toggle("active");
}

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
   
    burger.addEventListener('click', ()=>{ 
        //toggle nav
        nav.classList.toggle('nav-active');
            //animated links
    navLinks.forEach((link, index) => {
       if (link.style.animation) {
           link.style.animation = '';
       }else{
       link.style.animation =`navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    }
});
//burger animation
burger.classList.toggle('toggle');
});
}
navSlide();





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


