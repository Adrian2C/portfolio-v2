
//show main section text

ScrollReveal({
  reset: true,
  distance: '60px',
  duration: 2500,
  delay: 300
});


ScrollReveal().reveal('.me__contact', {
  delay: 600,
  origin: 'bottom',
  interval: 200,
});


//show items on scrolling

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);  
    if (entry.isIntersecting) {
      entry.target.classList.add('show');  
    } else {
      entry.target.classList.remove('show');  
    }  
  });  
});  
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

