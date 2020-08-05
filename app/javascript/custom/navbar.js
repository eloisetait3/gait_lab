document.addEventListener('scroll', responsiveNav());

function responsiveNav() {
  const nav = document.getElementById("navbar");
  const banner = document.querySelector('banner');
  if (document.body.scrollY > 80 || document.documentElement.scroll > 80){
    nav.classList.add('transformed'); 
  }  else {
    nav.classList.remove('transformed'); 
  }
}

