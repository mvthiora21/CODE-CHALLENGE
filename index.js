function TallyPoints(speed) {
    let limit = 70;
    let distanceperdeductedpoint = 5;
    const abovelimit = speed - limit ;
    //prints License suspended if the limit is above 130 (12pts)
if (abovelimit >=130){
    console.log("License Suspended")
}
//prints "OK" if the limit is not exceeded
    if (abovelimit =0){
        console.log("OK")
    }
    else{
        const deductedpoints = Math.floor(abovelimit / distanceperdeductedpoint)
        console.log("deductedpoints") //prints deducted points
    }
}
function primary(){
    const speed =(prompt("speed in kph="))//prompts the speed in kph
if (Number.isNaN(speed)){
    console.log("Please Enter a Number!");
    return;
}

const deductedpoints = TallyPoints(speed);//handles results from calculations
if (deductedpoints ==="OK"){
    console.log("OK");
}
else {
    console.log(`Deducted points:${deductedpoints}`);//returns output
}
}
