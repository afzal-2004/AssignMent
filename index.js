const Grossincome = document.getElementById("grossAnnual");
const ExtraIncome = document.getElementById("Extraincome");
const AgeGroup = document.getElementById("AgeGroup");
const TotalDeduction = document.getElementById("Deduction");
const finalIncome = document.getElementById("CalculatedTax");
const AnnualDetails = document.getElementById("Annual");
const ExtraIncomeDetails = document.getElementById("Extra");
const UserAgeDetails = document.getElementById("UserAge");
const UserApplicativeMoney = document.getElementById("ApplicativeMoney");

const GrossError = document.getElementById("Error");
const ExtraError = document.getElementById("ExtraIncomeError");
const AgeError = document.getElementById("AgeError");
const usedMoneyerror = document.getElementById("AplicativeError");

function HandelChange(event) {
  console.log(event.target.value);
}
//   THIS FUNCTION FOR  TOTAL INCOME CALCULATION
function calculateTotalIncome() {
  const grossIncome = parseFloat(Grossincome.value) || 0;
  const extraIncome = parseFloat(ExtraIncome.value) || 0;
  const totalDeduction = parseFloat(TotalDeduction.value) || 0;

  const totalIncome = grossIncome + extraIncome - totalDeduction - 800000;

  return totalIncome;
}
//  THIS IS FOR TOTAL TAX CALCULATION
function calculate() {
  // ErrorMessage();
  const SelectAge = parseInt(AgeGroup.value);
  const TotalIncome = calculateTotalIncome();

  if (TotalIncome <= 800000) {
    finalIncome.innerHTML = `
    <p> NO tax on this user </p>
   <button class='btn close-btn'  > Close</button> `;
  } else {
    if (SelectAge < 40) {
      finalIncome.innerHTML = `<p class='income-text'>Your Overall Income will be</p> 
        <p class='income'>${0.3 * TotalIncome}</p> 
        <p class='title'>after tax deductions</p>  
           <button class='btn close-btn'  > Close</button>`;
    } else if (SelectAge >= 40 && SelectAge < 60) {
      finalIncome.innerHTML = `<p class='income-text'>Your Overall Income will be</p>
        <p class='income'>${0.4 * TotalIncome}</p> 
        "<p>after tax deductions</p>
        <button class='btn close-btn'> Close</button>
     `;
    } else {
      finalIncome.innerHTML = `<p >Your Overall Income will be</p>
        <p class='income'>
        ${0.1 * TotalIncome}</p> 
        <p>after tax deductions</p>
        <button class='btn close-btn'> Close</button>`;
    }
  }
  console.log(0.3 * TotalIncome);

  finalIncome.setAttribute("style", "background-color: white; color:black; ");

  Grossincome.value = "";
  ExtraIncome.value = "";
  AgeGroup.value = "";
  TotalDeduction.value = "";
  OverLayStyle();
}

function ErrorMessage() {
  const income = parseFloat(Grossincome.value);
  const extramoney = parseFloat(ExtraIncome.value);
  const age = parseFloat(AgeGroup.value);
  const UsedMoney = parseFloat(TotalDeduction.value);

  {
    if (!isNaN(income)) {
      GrossError.style.display = "none";
    } else {
      GrossError.style.display = "block";
    }
  }
  {
    if (!isNaN(extramoney)) {
      ExtraError.style.display = "none";
    } else {
      ExtraError.style.display = "block";
    }
  }
  {
    if (!isNaN(age)) {
      AgeError.style.display = "none";
    } else {
      AgeError.style.display = "block";
    }
  }
  {
    if (!isNaN(UsedMoney)) {
      usedMoneyerror.style.display = "none";
      calculate();
    } else {
      usedMoneyerror.style.display = "block";
    }
  }
}

function OverLayStyle() {
  const OverLay = document.getElementsByClassName("overlay")[0];

  OverLay.setAttribute(
    "style",
    "background-color: white; color:black;  border:2px solid red; height:320px; "
  );
}

function CloseWindow() {
  const OverLay = document.getElementsByClassName("overlay")[0];
  OverLay.style.display = "none";
}

function AnnulText() {
  AnnualDetails.innerHTML =
    " Gross annual income is your Total salary in a year before any deduction";
  AnnualDetails.setAttribute("style", "background-color:#87ceeb ;");
}
function AnnulTextHide() {
  AnnualDetails.style.display = "none";
}

function UserExtraIncome() {
  ExtraIncomeDetails.innerHTML =
    " Extra income is that income that  earned by other resources";
  ExtraIncomeDetails.setAttribute("style", "background-color:#87ceeb ;");
}

function ExtraIncomeHide() {
  ExtraIncomeDetails.style.display = "none";
}
function PersonAge() {
  UserAgeDetails.innerHTML = " Plese enter your Age ";
  UserAgeDetails.setAttribute("style", "background-color:#87ceeb ;");
}

function UserAgeHide() {
  UserAgeDetails.style.display = "none";
}
function ApplicableAmmount() {
  UserApplicativeMoney.innerHTML =
    "Applicable deduction is used in  total expenses ";
  UserApplicativeMoney.setAttribute("style", "background-color:#87ceeb ;");
}
function ApplicativeMoneyHide() {
  UserApplicativeMoney.style.display = "none";
}
