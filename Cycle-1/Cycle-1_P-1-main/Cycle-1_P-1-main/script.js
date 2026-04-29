// const togglebtn = document.getElementById("theme-toggle");
// const storageMsg = document.getElementById('storgae-msg');

// const currenttheme = localStorage.getItem('theme');

// if(currenttheme ==='dark') {
//     document.body.classList.add('dark-mode');
//     storageMsg.innerText = "Status: Dark mode";
// }
// else {
//     storageMsg.innerText = "Status: Light mode";

// }

// togglebtn.addEventListener('click',() => {
//     document.body.classList.toggle('dark-mode');
//     const isdark = document.body.classicList.contains('dark-mode');
//     const theme = isdark ? 'dark' : 'light';
//     localStorage.innerText = `Preference updated : ${theme} mode saved to API`;
// });

const button = document.getElementById("mode");
let bo = true; 
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    bo = !bo;
    if (bo) {
        button.innerText = "Dark";
    } else {
        button.innerText = "Light";
    }
});
