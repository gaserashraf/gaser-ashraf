

window.onload=function()
{
    if(localStorage.getItem("mode")=='normal')
    ;
    else
    {
        toggleDarkNormal();
            localStorage.setItem("mode", "dark");
    }
}
//get divs of the site
var projectsDiv=document.getElementById('projects');

//get elements to dark mode
var header=document.getElementById('head'),
    container=document.getElementById('container'),
    con=document.getElementById('con');
var box=document.getElementById('BOX'),
    ancor=document.getElementById('ancor'),
    foot=document.getElementById('foot'),
    span=document.getElementById('span'),
    LinkHome=document.getElementById('linkHome');
var butDarkMode=document.getElementById('darkMode');
function toggleDarkNormal()
{
    butDarkMode.firstElementChild.classList.toggle('dark');
    header.classList.toggle('dark');
    container.classList.toggle('dark');
    
    con.classList.toggle('dark');
   
    projectsDiv.classList.toggle('dark');
    document.body.classList.toggle('dark');
    
    box.classList.toggle('dark');
    ancor.classList.toggle('dark');
    foot.classList.toggle('dark');
    span.classList.toggle('dark');
    LinkHome.classList.toggle('dark');
    if(header.classList.contains('dark'))
        localStorage.setItem("mode", "dark");
    else
        localStorage.setItem("mode", "normal");
}
butDarkMode.onclick=toggleDarkNormal;
