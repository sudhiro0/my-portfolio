var index = 0;
var heroHeading = document.getElementById("heroHeading");
console.log(heroHeading)
function type(){
heroHeading.innerHTML += heroHeading.charAt(index);
index += 1;
var t = setTimeout('type()',100)

}