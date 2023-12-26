function getData() {
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);

    bmi = (weight / Math.pow(height / 100, 2)).toFixed(1);

    if (isNaN(weight) || isNaN(height)) {
        alert("ENTER THE VALUES");
    } else {
        if (bmi < 18.5) {
            console.log("you are UnderWeight");
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            console.log("you are Normal Weigth");
        } else if (bmi >= 25 && bmi <= 24.9) {
            console.log("you are Normal Weigth");
        } else {
            console.log("you are obese");
        }
        console.log(bmi);
    }
}

// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more