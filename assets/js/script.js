$(document).ready(function(){
    $(".hamburger").click(function(){
      $(this).toggleClass("is-active");
    });
  });

const menuToggle = document.querySelector('.toggle');
const showcase = document.querySelector('.showcase');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');
  showcase.classList.toggle('active');
})

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}



/*----- First Page Animation -----*/
$(".line").hover(function(){
  $(this).addClass('hovereffects');
},function(){
  $(this).removeClass('hovereffects');
})

/*-----Typed Javscript ------*/
$("#example").typer({
  strings: [
  "Development Company",
  "House",
  
  ],
  typeSpeed: 200,
  backspaceSpeed: 20,
  backspaceDelay: 800,
  repeatDelay: 1000,
  repeat: true,
  autoStart: true,
  startDelay: 100,
  });

  /*----Header Scrooll --*/
  
// $(document).ready(function(){
//   $(window).scroll(function(){
//   	var scroll = $(window).scrollTop();
// 	  if (scroll > 300) {
// 	    $(".fnav").css("background" , "#fff");
// 	    $(".nav-link").css("color" , "#020d1c").css("fontWeight", "500");
// 	    $(".dropdown-toggle").css("color" , "#020d1c");
// 	    $(".line").css("background" , "#020d1c");
// 	    $(".navbar-brand").css("color" , "black");
// 	    $(".header-btn").css("color" , "#020d1c").css("fontWeight" , "800");
// 	    $(".main-logo").css("color" , "#020d1c").css("fontWeight" , "800");

      
// 	  }
    
// 	  else{
//       $(".fnav").css("background" , "rgba(2,3,3,.15)");  	
//       $(".nav-link").css("color" , "#fff");
//       $(".navbar-brand").css("color" , "#fff");
//       $(".header-btn").css("color" , "#fff");
// 	    $(".main-logo").css("color" , "#fff").css("fontWeight" , "800");

// 	  }
//   })
// })

