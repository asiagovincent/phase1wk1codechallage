//to calculate the tax
let salary = 55000;
let payeAmount , NHIF , tax , nssfDeductions , totalTaxes , netSalary; 
function calculateTax (){
    let calculatePaye = function (){
       if  (salary < 24000){
        paye = salary * 10;
       }
       else if (salary <24001 && salary <=32333){
        paye = salary * 0.25 ;
       }
       else if (salary >= 32333) {
        paye = salary * 0.3 ;
       }
       return paye;
       console.log("tiff")
    }
    
    let NSSFCalculator = function (){
        nssfDeductions = salary * 0.06;
        return nssfDeductions;
    };

    let nhifCalculator = function (){
        if (salary <5999){
        NHIF = 150;
        }
        else if (salary >=6000 && salary <= 7999) {
        NHIF = 300;
        }
        else if (salary >= 8000 && salary <= 11999){
            NHIF = 400;
        }
        else if (salary >=12000 && salary <=14999){
            NHIF = 500;
        }
        else if (salary >=15000 && salary <=19999){
            NHIF = 600;
        }
        else if (salary >=20000 && salary <=24999){
            NHIF = 750;
        }
        else if (salary >=25000 && salary <=29999){
            NHIF = 850;
        }
        else if (salary >=30000 && salary <=34999){
            NHIF = 900;
        }
        else if (salary >=35000 && salary <=39999){
            NHIF = 950;
        }
        else if (salary >=40000 && salary <=44999){
            NHIF = 1000;
        }
        else if (salary >=45000 && salary <=49999){
            NHIF = 1100;
        }
        else if (salary >=50000 && salary <=59999){
            NHIF = 1200;
        }
        else if (salary >=60000 && salary <=69999){
            NHIF = 1300;
        }
        else if (salary >70000 && salary <=79999){
            NHIF = 1400;
        }
        return NHIF;
    };
    payeAmount = calculatePaye()
    nssfDeductions = NSSFCalculator ();
    NHIF = nhifCalculator();
    totalTaxes = paye + NHIF + nssfDeductions;
    netSalary=salary-totalTaxes

console.log(`HEY YOUR SALARY  ${salary} , NHIF is ${NHIF}, paye is ${payeAmount} and your nssf deduction is ${nssfDeductions
    }. Therefore, your total taxes is ${totalTaxes} and net salary is ${netSalary}`)

};
calculateTax()