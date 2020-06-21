
window.onload=function()
{
    if(localStorage.getItem("mode")&&localStorage.getItem("mode")=="normal")
    ;
    else if(localStorage.getItem("mode"))
    {
        toggleDarkNormal();
        localStorage.setItem("mode", "dark");
    }
    else
    {
        
        localStorage.setItem("mode", "normal");
    }
}

//make leftbar
var homeLi=document.getElementById('h'),
    aboutLi=document.getElementById('a'),
    educationLi=document.getElementById('e'),
    skillsLi=document.getElementById('s'),
    projectsLi=document.getElementById('p'),
    achLi=document.getElementById('ac');

//get divs of the site
var homeDiv=document.getElementById('home'),
    aboutDiv=document.getElementById('about'),
    educationDiv=document.getElementById('eduaction'),
    skillsDiv=document.getElementById('skills'),
    projectsDiv=document.getElementById('projects'),
    achDiv=document.getElementById('ach');
homeLi.onclick=function()
{
    window.scrollTo({
        top:homeDiv.offsetTop-170,
        left:0,
        behavior: 'smooth'}
    );
}
aboutLi.onclick=function()
{
    window.scrollTo({
        top:aboutDiv.offsetTop-170,
        left:0,
        behavior: 'smooth'}
    );
}
educationLi.onclick=function()
{
    window.scrollTo({
        top:educationDiv.offsetTop-170,
        left:0,
        behavior: 'smooth'}
    );
}
skillsLi.onclick=function()
{
    window.scrollTo({
        top:skillsDiv.offsetTop-170,
        left:0,
        behavior: 'smooth'}
    );
}
projectsLi.onclick=function()
{
    window.scrollTo({
        top:projectsDiv.offsetTop-170,
        left:0,
        behavior: 'smooth'}
    );
}
achLi.onclick=function()
{
    window.scrollTo({
        top:achDiv.offsetTop-170,
        left:0,
        behavior: 'smooth'}
    );
}
window.onscroll=function()
{
    
    
    if(scrollY>=1&&scrollY<=aboutDiv.offsetTop-400)
        homeLi.classList.add('active');
    else
        homeLi.classList.remove('active');
    if(scrollY>=aboutDiv.offsetTop-400&&scrollY<=educationDiv.offsetTop-400)
        aboutLi.classList.add('active');
    else
        aboutLi.classList.remove('active');
    if(scrollY>=educationDiv.offsetTop-400&&scrollY<=skillsDiv.offsetTop-400)
        educationLi.classList.add('active');
    else
        educationLi.classList.remove('active');
    if(scrollY>=skillsDiv.offsetTop-400&&scrollY<=projectsDiv.offsetTop-400)
        skillsLi.classList.add('active');
    else
        skillsLi.classList.remove('active');
    if(scrollY>=projectsDiv.offsetTop-400&&scrollY<=achDiv.offsetTop-500)
        projectsLi.classList.add('active');
    else
        projectsLi.classList.remove('active');
    if(scrollY>=achDiv.offsetTop-500)
        achLi.classList.add('active');
    else
        achLi.classList.remove('active');
}

//get elements to dark mode
var header=document.getElementById('head'),
    container=document.getElementById('container'),
    leftBar=document.getElementById('leftBar'),
    con=document.getElementById('con');
var arrBox=Array.from(document.querySelectorAll('.boxs .box'));


var butDarkMode=document.getElementById('darkMode');
function toggleDarkNormal()
{
    butDarkMode.firstElementChild.classList.toggle('dark');
    header.classList.toggle('dark');
    container.classList.toggle('dark');
    leftBar.classList.toggle('dark');
    con.classList.toggle('dark');
    homeDiv.classList.toggle('dark');
    aboutDiv.classList.toggle('dark');
    educationDiv.classList.toggle('dark');
    skillsDiv.classList.toggle('dark');
    projectsDiv.classList.toggle('dark');
    achDiv.classList.toggle('dark');
    for(var i=0;i<arrBox.length;i++)
        arrBox[i].classList.toggle('dark');
    if(achDiv.classList.contains('dark'))
        localStorage.setItem("mode", "dark");
    else
        localStorage.setItem("mode", "normal");
}
butDarkMode.onclick=toggleDarkNormal;
