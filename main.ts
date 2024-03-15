import chalk from "chalk";
 
let weightInKg:number = 65;
let heightInMeters:number = 1.85;
let bmi:number = weightInKg / (heightInMeters * heightInMeters);
console.log(chalk.bgWhiteBright.blueBright(`Your BMI is ${bmi} `));


function getBMICategory(bmi:number) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
let category = getBMICategory(bmi);
console.log(chalk.bgWhiteBright.redBright("Category:", category));

