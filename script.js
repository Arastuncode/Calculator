const display =document.getElementById("display")
function yaz(x){
    display.value  += x
}
function hesabla() {
    display.value = eval(display.value)
}
function sifirla(){
    display.value=' '
}
function sil(){
    display.value = display.value.substring(0 ,  display.value.length - 1)
}