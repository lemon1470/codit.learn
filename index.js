document.getElementById('theme').addEventListener('click', changeTheme)

function changeTheme() {
    switch (document.documentElement.getAttribute('data-theme')) {
    case 'dark': {
            document.documentElement.setAttribute('data-theme', 'light');
        } 
    case 'light': {
            document.documentElement.setAttribute('data-theme', 'dark');
        }    
    }
}
