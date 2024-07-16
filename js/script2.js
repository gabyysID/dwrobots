window.onload = function() {
    setTimeout(function() {
        document.getElementById('colmeia').style.opacity = '0';
        document.getElementById('cubo').style.opacity = '1';
    }, 5000);
    
    setTimeout(() => {
        document.getElementById('human').style.opacity = '1';
    }, 6000); // 

    setTimeout(() => {
        window.location.href = '/index.html';
    }, 13000); //
};
