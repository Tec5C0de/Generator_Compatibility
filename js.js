function generator() {
    let gen = Math.floor(Math.random() * 100);
    document.getElementsByName("result")[0].innerHTML = "Совместимость: " + gen + "%"; 
}