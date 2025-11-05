
function Calculate() {
    let weight = prompt("Enter your weight in kg:");
    let height = prompt("Enter your height in meters:");

    let weightNum = parseFloat(weight);
    let heightNum = parseFloat(height);

    let heightcm = heightNum / 100;
     
    let BMI = weightNum / (heightcm * heightcm);

    document.getElementById("BMIvalues").innerHTML = `your BMI is ${BMI.toFixed(2)}`;

    setTimeout(() => {
            
    if (BMI < 18.5) {
        alert("You are underweight");
    }
    else if (18.5 <= BMI && BMI < 24.9){
        alert ("you are normal weight");
    }
    else if (25 <= BMI && BMI < 29.9){
        alert("you are overweight");
    }
    else{
        alert("you are obese");
    }
    }, 1100);

}