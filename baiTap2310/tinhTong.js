function Tinh() {
    var a = Number(document.querySelector('#a').value);
    var b = Number(document.querySelector('#b').value);

    var c = a + b ;
    document.querySelector('.hienthi').innerHTML = `tong la : ${c}` ;
}