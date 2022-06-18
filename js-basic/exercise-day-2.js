const tabs = document.querySelectorAll(".tabs .tab-link");
const tabsContent = document.querySelectorAll(".tab-content");

for(let i = 0; i <= tabs.length; i++) {
  tabs[i].addEventListener("click", function (e) {
    for(let j = 0; j < tabs.length; j++) {
      if(tabs[j].classList.contains("current")) {
        tabs[j].classList.remove("current");
      }
    }
    tabs[i].classList.add("current");
    let contents = document.getElementById(tabs[i].dataset.tab);
    for(let j = 0; j < tabsContent.length; j++) {
      if(tabsContent[j].classList.contains("current")) {
        tabsContent[j].classList.remove("current");
      }
    }
    contents.classList.add("current")
  });
}