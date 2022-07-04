
const themeToggle = {

    init: function () {
        document.querySelector('#button').addEventListener('click', themeToggle.handleBtnClick);
        document.querySelector('#button2').addEventListener('click', themeToggle.handleAgainBtnClick);
    },

    handleBtnClick : function () {
    //console.log ('okleft');
        let togglerEl = document.getElementById("theme-toggler");
        if (togglerEl.href.match("../css/professional-style.css")) {
            togglerEl.href = "../css/manuscript-style.css";    
        }
        else {
            togglerEl.href = "../css/professional-style.css";  
        }
    },
    
    handleAgainBtnClick : function () {
        //console.log ('okright');
        let togglerEl = document.getElementById("theme-toggler");
        if (togglerEl.href.match("../css/manuscript-style.css")) {
            togglerEl.href = "../css/professional-style.css";    
        }
        else {
            togglerEl.href = "../css/manuscript-style.css";  
        }
    },
}

document.addEventListener('DOMContentLoaded', themeToggle.init);


//* Code ci-dessous si je change pour un bouton unique

    // init: function () {
    //     document.querySelector('#button').addEventListener('click', themeToggle.handleThemeToggleBtnClick);
    // },
    
    // handleThemeToggleBtnClick : function (event) {
    //     console.log ('ok');
    //     event.preventDefault();
    //     let togglerEl = document.getElementById("theme-toggler");
    //     if (togglerEl.href.match("../css/professional-style.css")) {
    //         togglerEl.href = "../css/manuscript-style.css";    
    //     }
    //     else {
    //         togglerEl.href = "../css/professional-style.css";  
    //     }
    // },
    
    // }
    

//* Code ci-dessous marche aussi pour le bouton unique en ajoutant onclick="toggle() sur le html du button

//  function toggle() {
//     var themeToggle = document.getElementById("theme-toggler");
//     if (themeToggle.href.match("../css/professional-style.css")) {
//         themeToggle.href = "../css/manuscript-style.css";    
//     }
//     else {
//         themeToggle.href = "../css/professional-style.css";  
//     }
// }
