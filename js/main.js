
// Sticky menu background
window.addEventListener('scroll', function() {
  if (window.scrollY > 150) {
    document.querySelector('#navbar').style.opacity = 1;
  } else {
    document.querySelector('#navbar').style.opacity = 1;
  }
});

// Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100
      },
      800
    );
  }
});




// Hamburge functionality 
/*
const hamburger = document.getElementById('hamburger');
const navUl = document.querySelector('#navbar ul');

hamburger.addEventListener('click', () => {
	navUl.classList.toggle('show');
});

*/

// New hamburger-menu functionality 

const hamburger = document.querySelector('.hamburger-menu');
const navUl = document.querySelector('#navbar ul');

/* console.log(hamburger);
console.log(navUl); */


hamburger.addEventListener('click', () => {
	navUl.classList.toggle("change");
});

// Slider functionality :

const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = true;
const intervalTime = 3000;
let slideInterval;

// create a arrow function for next slide feature. 

const nextSlide = () => {
	// Get current class 
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// check for next slide
	if(current.nextElementSibling) {
		// Add current to the nextElementSibling 
		current.nextElementSibling.classList.add('current');
	} else {
		// Add current to start 
		slides[0].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

// create a arrow function for previous slide feature. 

const prevSlide = () => {
	// Get current class 
	const current = document.querySelector('.current');
	// Remove current class
	current.classList.remove('current');
	// check for previous slide
	if(current.previousElementSibling) {
		// Add current to the nextElementSibling 
		current.previousElementSibling.classList.add('current');
	} else {
		// Add current to last 
		slides[slides.length-1].classList.add('current');
	}
	setTimeout(() => current.classList.remove('current'));
};

// Eventlistner to trigger to button events

next.addEventListener('click',e => {
	nextSlide();
	if(auto) {
	// Clear the interval using inbuilt js method
	clearInterval(slideInterval);
	// Run next slide interval time
	slideInterval =  setInterval(nextSlide,intervalTime);
	}
});

prev.addEventListener('click',e => {
	prevSlide();
	if(auto) {
	// Clear the interval using inbuilt js method
	clearInterval(slideInterval);
	// Run next slide interval time
	slideInterval =  setInterval(nextSlide,intervalTime);
	}	
});

// Auto Slide :

if(auto) {
	// Run next slide interval time
	slideInterval =  setInterval(nextSlide,intervalTime);
}

// ScrollToTop functionaliy js code. 

const scrollToTop = document.querySelector('#btnScrolltoTop');

// EventHandlers 

scrollToTop.addEventListener('click', function() {
	/* window.scrollTo(0,0);
	window.scrollTo({
					top: 0,
					left: 0,
					behavior : "smooth"
	}); */ 
	
	$("html,body").animate({scrollTop:0},"slow");
});

// Tab functionality for product page:

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

 
// Select tab content item
function selectItem(e)  {
	removeBorder();
	removeShow();
	// Add border to current tab
	this.classList.add('tab-border');
	// Grab the content from DOM
	console.log(this.id);
	const tabContentItem = document.querySelector(`#${this.id}-content`);
	tabContentItem.classList.add('show');
}

function removeBorder() {
	tabItems.forEach(item => item.classList.remove('tab-border'));
}

function removeShow() {
	tabContentItems.forEach(item => item.classList.remove('show'));
}

// Event Listener to select the items

tabItems.forEach(item => item.addEventListener('click',selectItem)); 


// Contact us functionality 

const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


// Hide all elements with class="containerTab", except for the one that matches the clickable grid column

function openTab(tabName) {
  var i, x;
  x = document.getElementsByClassName("containerTab");
  //console.log(x);
  for (i = 0; i < x.length; i++) {
    x[i].parentElement.style.display = "none";
	console.log(x[i].parentElement);
	//x[i].childNodes.style.display = "none";
	console.log(x[i].parentElement.children[0]);
	console.log(x[i].parentElement.children[1]);
	x[i].parentElement.children[0].style.display = "none";
	x[i].parentElement.children[1].style.display = "none";
  }
  document.getElementById(tabName).parentElement.style.display = "block";
  document.getElementById(tabName).style.display = "block";
  document.getElementById(tabName).parentElement.parentElement.style.display = "block";
  
  /*let current = document.getElementById(tabName).parentElement;
  console.log(current); */
  //document.getElementById(tabName).parentElement.parentElement.style.display = "grid";
  /*document.getElementById(tabName).parentElement.parentElement.style.display.gridTemplateColumns= "repeat(2, 1fr)"; 
  document.getElementById(tabName).parentElement.parentElement.style.display.gridAutoRows= "1000px"; */ 
  //console.log(document.getElementById(tabName).parentElement);
  //document.getElementById(tabName).parentElement.parentElement.style.display = "none";
}

// Functionality to close the product details page. 
/* */
document.body.addEventListener('click',closeButton);

function closeButton(e) {
	
	if(e.target.classList.contains('closebtn')) 
	{
		 //console.log(e.target.parentElement.parentElement.parentElement);
		 e.target.parentElement.style.display="none";
		 window.location.reload(true);
		//e.target.parentElement.parentElement.parentElement.style.display="grid";
	}
}  

// Form Validation 

const form = document.getElementById('testform');
const name = document.getElementById('name');
const email = document.getElementById('email');
const phonenumber = document.getElementById('phone');
const message = document.getElementById('message');


// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
}


// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
	console.log()
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    showSuccess(input);
  } else {
    showError(input, 'Email is not valid');
  }
}

// 

function checkPhone(input)
{
  //var text = document.getElementById("pno").value;
  const regx = /^[0-9]\d{9}$/ ;  //  /^[0-9]{10}$/
  if(regx.test(input.value.trim()))
     showSuccess(input);
  else
     showError(input, 'Phone is not valid');
}

// Check required fields
function checkRequired(inputArr) {
  let isRequired = false;
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isRequired = true;
    } else {
      showSuccess(input);
    }
  });

 return isRequired;
}


// Check input length
function checkLength(input, min, max) {	
  if (input.value.length < min) {
    showError(
      input,
      `${getFieldName(input)} at least ${min} characters`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${getFieldName(input)} less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
};

/* Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, 'Passwords do not match');
  }
}
*/

// Get fieldname
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
};

// Event listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();
	checkRequired([name, email, companyname,phone])  
    checkLength(name, 3, 20);
	checkLength(companyname, 3, 50);
	checkPhone(phone);
    checkEmail(email);
   
});






