const button=document.querySelector('.menu-toggle');
const menu=document.querySelector('.nav-links');
function closeMenu(){button.setAttribute('aria-expanded','false');menu.classList.remove('open');}
button.addEventListener('click',()=>{const open=button.getAttribute('aria-expanded')!=='true';button.setAttribute('aria-expanded',String(open));menu.classList.toggle('open',open);});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&button.getAttribute('aria-expanded')==='true'){closeMenu();button.focus();}});
document.addEventListener('click',event=>{if(!event.target.closest('nav'))closeMenu();});
window.matchMedia('(min-width: 601px)').addEventListener('change',closeMenu);
