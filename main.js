

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

  const email = document.getElementById("mail");

  /*email.addEventListener("input", function (event) {
    if (email.validity.typeMismatch) {
      email.setCustomValidity("I am expecting an e-mail address!");
    } else {
      email.setCustomValidity("");
    }
    
  });*/

	let form = document.forms["contact"];
	form.addEventListener('submit',contact_submit,false);

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
		body += message + "tessssssst" + "\r\n\r\n";
		body += "Name: " + name + "\r\n";
		body += "Phone Number: " + phone + "\r\n";
    
		// Build final Mailto URI
		uri += '?subject=' + encodeURIComponent(subject);
		uri += '&body=' + encodeURIComponent(body);

		// Open Mailto in New Window / Tab
		window.open(uri,'_blank');
	}


