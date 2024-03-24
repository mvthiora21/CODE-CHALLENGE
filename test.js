const Maximum=marks(100);
console.log(Maximum);
function marks(m){

if(m>79){
    console.log("You scored an A")//prints "A" if marks are >79
}
else if(m>=60 && m<=79){
    console.log("You scored a B")//prints "B" if marks are either 60+ or 79 and below
}
else if(m>=49 && m<=59){
    console.log("You scored a C")//prints "C" if marks are 49+ or 59 and below
}
else if(m>=40 && m<49 ){
    console.log("You scored a D")//prints "D" if marks are 40+ or less than 49
}
else{
    console.log("You scored an E")//prints "E" if marks are below 40
}
return "scores:" + m
}
