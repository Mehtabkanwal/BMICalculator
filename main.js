"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
let weightInKg = 65;
let heightInMeters = 1.85;
let bmi = weightInKg / (heightInMeters * heightInMeters);
console.log(chalk_1.default.bgWhiteBright.blueBright(`Your BMI is ${bmi} `));
function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    }
    else if (bmi >= 18.5 && bmi < 25) {
        return "Normal weight";
    }
    else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    }
    else {
        return "Obese";
    }
}
let category = getBMICategory(bmi);
console.log(chalk_1.default.bgWhiteBright.redBright("Category:", category));
