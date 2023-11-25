projects = []
class Project{
    constructor(name, description, image, options){
        this.name = name
        this.description = description
        this.image = image
        this.options = options
    }
}

function redirect(url, newTab=true) {
    const a = document.createElement('a');
    if (newTab){
    a.target = "_blank"
    }
    a.href = url
    a.click();
    a.remove();
}
function downloadFile(filePath) {
    const a = document.createElement('a');
    a.download = filePath;
    a.href = filePath
    a.click();
    a.remove();
}

class Option{
    constructor(color, type){
        this.color = color
        this.type = type
    }
}
class Download extends Option{
    constructor(name,file, color=[255,255,255]){
        super(color, "download")
        this.file = file
        this.name = name
    }
}
class Redirect extends Option{
    constructor(name,url, color=[255,255,255]){
        super(color, "redirect")
        this.url = url
        this.name = name
    }
}

projects.push(new Project(
    "Game I don't have a name for",
    "My first ever game <br> its a simple score game that I made ages ago, you control the green square with the arrow keys and avoid hitting the red squares <br> as for the name, I genuinly just called it 'Game I don't have a name for' when I made it and now I feel like it would be wrong if I named it <br> I like looking at this because its a reminder on how far I've come",
    "thumbnails/unnamed game.png",
    [new Redirect("Play In Browser", "../play/unnamed-game")]
))


projects.push(new Project(
    "King Of The Key",
    "A platformer were you collect keys that unlock a goal while avoiding spikes <br> this was my first big project and it took me way longer than it should have <br> it isn't great, the physics engine is bad and the code is written quite poorly but I remember having a lot of fun making it <br> I plan on remaking this sometime in the future",
    "thumbnails/king of the key.png",
    [new Redirect("Play In Browser", "../play/king-of-the-key")]
))

projects.push(new Project(
    "Flappy Bird Plus",
    "A recreation of flappy bird I made to see how easy it is to make a chrome extension <br> then I added a shop because why not",
    "thumbnails/flappy bird.png",
    [new Redirect("Play In Browser", "../play/flappy-bird-plus"),new Redirect("View on Chrome Web store", "https://chrome.google.com/webstore/detail/flappy-bird-game/jhdmjggpjbhlpdehmabpibpfgmnmdohb")]
))

projects.push(new Project(
    "Shadow Jump",
    "An infinite score platformer were you jump from platform to platform while avoiding the hidden enemies <br> this was made for the pyweek 35 game jam using python and pygame <br> while this game is simple I like that its one of those time killers that you can just open and play",
    "thumbnails/shadow-jump.png",
    [new Download("Download (.exe)", "../downloads/shadow-jump-win.zip"),new Redirect("Play In Browser (Experimental)", "../play/shadow-jump"),new Redirect("View pyweek entry", "https://pyweek.org/e/HamSandwich/")]
))

projects.push(new Project(
    "Hostile Horizon",
    "A simple 3d fps game I made while learning Godot were you shoot at enemies that spawn on the edge of the map<br> thats basically it",
    "thumbnails/hostile horizon.png",
    [new Download("Download (.exe)", "../downloads/hostile-horizon-win.zip")]
))

projects.push(new Project(
    "Pygame Cookie clicker",
    "a recreation of Orteils masterpiece, <span><a target='_blank' href='https://orteil.dashnet.org/cookieclicker/'>Cookie Clicker</a></span> I made using pygame and python <br><br> this is probably my favorite pygame project as of today, If I make something better I will update this <br><br>this was the most amount of art I had to make for a game and I enjoyed it quite a bit <br><br> <a href='https://youtu.be/5vX9A0XTc6I' target='_blank'>music is space jazz by kevin macleod</a><br> <span style='color:red'>Note: certain features such as saving, offline cookie production and sound have been disabled on web</span>",
    "thumbnails/cookie-clicker.png",
    [new Download("Download (.exe)", "../downloads/cookie-clicker-win-2.7.zip"), new Redirect("Play in Browser", "../play/cookie-clicker")]
))

projects.push(new Project(
    "Roles Reversed",
    "A game made for the <a href='https://itch.io/jam/gmtk-2023' target='_blank'>GMTK 2023</a> game jam which had the theme Roles Reversed <br> It was my second game made in godot and my second ever game jam. The idea of this game is that the roles are reversed so instead of being the player, you are the enemy. <br> not gonna lie the idea sounded a lot better in my head <br> I couldn't think of a name",
    "thumbnails/roles-reversed.png",
    [new Download("Download (.exe)", "../downloads/roles-reversed-win.zip"),new Redirect("View on itch.io", "https://ham-sandwich47.itch.io/roles-reversed")]
))


projects.push(new Project(
    "A Dying World",
    'A 2d platformer made in one week for the pyweek 36 game jam the aim of the game\
    is to\
    rid the world of <span style="font-weight: bold;">dark matter</span> (which was the\
    theme of\
    the jam) by shooting at enemies. <br> The game was made in one week using python and\
    pygame\
    <br> I worked in a team with <a href="https://github.com/reactoimpact"\
        target="_blank">@Reactoimpact</a>',
    "thumbnails/a-dying-world.png",
    [new Download("Download (.exe)", "../downloads/a-dying-world-win.zip"),new Redirect("Play In Browser (Experimental)", "../play/a-dying-world"),new Redirect("View Source on GitHub", "https://github.com/Hammish48/pyweek36")]
))


function createButtonContainer(options){
    container = document.createElement("div")
    container.className = "project-option-button-container"
    for (let x = 0; x <= options.length - 1;x++){
        let btn = document.createElement("button")
        btn.className = "project-option-button"
        btn.classList.add("selection")
        btn.textContent = options[x].name
        if (options[x].type == "redirect"){
            btn.onclick = ()=>{redirect(options[x].url)}
        }else{
            btn.onclick = ()=>{downloadFile(options[x].file)}
        }
        container.appendChild(btn)
    }
    if (options.length == 0){
        container.style.display = "none"
    }
    return container
}

function createProject(project){
    let p = document.createElement("div")
    p.className="project"
    let element = document.createElement("h1")
    element.textContent = project.name
    p.appendChild(element)
    element = document.createElement("img")
    element.src = "/projects/" + project.image
    p.appendChild(element)
    let pcc = document.createElement("div")
    pcc.className = "project-content-container"
    p.appendChild(pcc)
    element = document.createElement("p1")
    element.innerHTML = project.description
    if (navigator.userAgentData.mobile){
        if (project.options.length == 3){
            element.style.height="340px"
        }else if (project.options.length == 2){
            element.style.height="365px"
        }
    }else{
        if (project.options.length == 2){
            element.style.height="384px"
        }
        if (project.options.length == 1){
            element.style.height="416px"
        }
    }
    pcc.appendChild(element)
    pcc.appendChild(createButtonContainer(project.options))
    return p
}


function createRow(){
    let r = document.createElement("div")
    r.className = "row"
    return r
}
let r;
r = Math.round(Math.random() * 10)
if (r%2==1){
r = Math.floor(Math.random() * (projects.length))
projects.splice(r, 0, new Project(
    "cat",
    "look how sophisticated he is",
    "thumbnails/catsuit.jpg",
    []
))
}
function main(){
    projects = projects.reverse()
let d = document.getElementById("projects")
let row = createRow()
d.appendChild(row)
let bc = document.createElement("div")
bc.className = "box-container"
pointer = 0
projects.forEach(p =>{
    bc.appendChild(createProject(p))
    pointer ++
    if (pointer >=3){
        row.appendChild(bc)
        pointer = 0;
        row = createRow()
        d.appendChild(row)
        bc = document.createElement("div")
        bc.className = "box-container"
    }
})
row.appendChild(bc)

}
main()
