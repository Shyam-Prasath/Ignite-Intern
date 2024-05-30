document.addEventListener("DOMContentLoaded",function(){
    const menuicon=document.getElementById("menu-icon")
    const menuiconlist=document.getElementById("menu-icon-list")
    menuicon.addEventListener("click", function(e) {
        e.preventDefault();
        menuiconlist.style.display = (menuiconlist.style.display !== "none") ? "none" : "flex";
        menuicon.src = (menuiconlist.style.display !== "none") ? "./Images/close icon.jpg" : "./Images/menu icon.jpg";
    });
    document.addEventListener("click",function(e){
        if(!menuicon.contains(e.target) && !menuiconlist.contains(e.target)){
            menuiconlist.style.display='none'
        }
    })
})

const data=[
    {
        src: "./Images/Weather Prediction.png",
        href: "https://github.com/Shyam-Prasath/Weather-prediction",
        heading:"Weather Prediction Using Openweather API"
    },
    {
        src: "./Images/Todo list.png",
        href: "https://github.com/Shyam-Prasath/todo-list",
        heading:"Todo List Using React"
    },
    {
        src: "./Images/Tesla.png",
        href: "https://github.com/Shyam-Prasath/Tesla-Website-clone",
        heading:"Tesla-Website-Clone Using Tailwind"
    },
    {
        src: "./Images/Revenue.png",
        href: "https://github.com/Shyam-Prasath/Revenue-collection-graph",
        heading:"Revenue Collection Graph using Chart.js"
    },
    {
        src: "./Images/tic tae toe.png",
        href: "https://github.com/Shyam-Prasath/tic-tae-toe",
        heading:"Tic Tae Toe Using Python"
    },
    {
        src: "./Images/Manage.png",
        href: "https://github.com/Shyam-Prasath/Website-on-Tailwind",
        heading:"Manage Website Clone Using Tailwind"
    },
    {
        src: "./Images/libary.jpg",
        href: "https://github.com/Shyam-Prasath/Book-Details-Backend",
        heading:"Backend Of Libary Using jwt verification and CRUD operations"
    }
]

const projectsContainer = document.getElementById("project-content");

data.forEach(detail => {
    const heading=document.createElement("h3")
    const projectDiv = document.createElement("div");
    const link = document.createElement("a");
    link.href = detail.href;
    link.target = "_blank"; 
    heading.textContent=detail.heading
    const image = document.createElement("img");
    image.src = detail.src;
    image.alt = "Project Image";
    link.appendChild(image);
    projectDiv.appendChild(link);
    projectDiv.appendChild(heading)
    projectsContainer.appendChild(projectDiv);
});