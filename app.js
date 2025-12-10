const vid1 = document.getElementById("projectVideo1");
const vid2 = document.getElementById("projectVideo2");
const vid3 = document.getElementById("projectVideo3");
const hoverSign = document.querySelector(".hoverSign");

const sidebar = document.querySelector(".sidebar");
const manu = document.querySelector(".manuIcon");
const closemanu = document.querySelector(".closeIcon")

const videoList = [vid1, vid2, vid3];

videoList.forEach(function(e){
  e.addEventListener("mouseover", function(){
    this.play()
    hoverSign.classList.add("active")
  })
  e.addEventListener("mouseout", function(){
    this.pause()
    hoverSign.classList.remove("active")
  })
})

manu.addEventListener("click", function() {
  sidebar.classList.remove("closeSidebar")
  sidebar.classList.add("openSidebar")
})
closemanu.addEventListener("click", function(){
  sidebar.classList.add("closeSidebar")
  sidebar.classList.remove("openSidebar")
})