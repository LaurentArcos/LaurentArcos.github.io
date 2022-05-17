const themeToggle = {
    
init: function () {
    document.querySelector('#button').addEventListener('click', themeToggle.handleThemeToggleBtnClick);
},

handleThemeToggleBtnClick : function (event) {
    //console.log ('ok');
    event.preventDefault();
    let togglerEl = document.getElementById("theme-toggler");
    if (togglerEl.href.match("../css/professional-style.css")) {
        togglerEl.href = "../css/manuscript-style.css";    
    }
    else {
        togglerEl.href = "../css/professional-style.css";  
    }
},

}

document.addEventListener('DOMContentLoaded', themeToggle.init);



//* Code ci-dessous marche aussi en ajoutant onclick="toggle() sur le html du button
//  function toggle() {
//     var themeToggle = document.getElementById("theme-toggler");
//     if (themeToggle.href.match("../css/professional-style.css")) {
//         themeToggle.href = "../css/manuscript-style.css";    
//     }
//     else {
//         themeToggle.href = "../css/professional-style.css";  
//     }
// }