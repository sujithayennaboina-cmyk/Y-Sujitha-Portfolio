const navLinks=document.querySelectorAll('#navLinks a');const nav=document.getElementById('navLinks');const menuBtn=document.querySelector('.menu-btn');const cursor=document.querySelector('.cursor-glow');
menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
navLinks.forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const sections=[...document.querySelectorAll('main section[id]')];
window.addEventListener('scroll',()=>{let current='home';sections.forEach(s=>{if(scrollY>=s.offsetTop-180)current=s.id});navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current))});
function openProject(title,desc,tech){document.getElementById('modalTitle').textContent=title;document.getElementById('modalDesc').textContent=desc;document.getElementById('modalTech').textContent=tech;document.getElementById('projectModal').classList.add('show')}
function closeProject(){document.getElementById('projectModal').classList.remove('show')}
document.getElementById('projectModal').addEventListener('click',e=>{if(e.target.id==='projectModal')closeProject()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeProject()});
function downloadResume(){alert('Add your final PDF resume as "resume.pdf" in this project folder, then change this button to link to resume.pdf.');}
const words=['Creative Developer','Web Developer','AI/ML Enthusiast','Problem Solver'];let wi=0,ci=0,dir=1;const title=document.querySelector('.hero h2');
setInterval(()=>{if(!title)return;const word=words[wi];title.innerHTML=word.slice(0,ci)+'<b></b>';ci+=dir;if(ci>word.length+3){dir=-1}if(ci<0){dir=1;wi=(wi+1)%words.length;ci=0}},115);
