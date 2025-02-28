const themeSelector = document.querySelector('select');

themeSelector.addEventListener('change', changeTheme);

function changeTheme() {
    const selectedTheme = themeSelector.value;

    const logo = document.querySelector('.logo');

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        
        logo.src = 'logo.webp'; 
    } else {
        document.body.classList.remove('dark');
        
        logo.src = 'darklogo.png';
    }
}
