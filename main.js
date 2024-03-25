const salary=100000//acquires input values
const benefits=10000
function calculateNetsalary(){
    //calculates the tax
    let tax = Math.floor((salary+benefits) *0.45);
    //calculates NHIF deductions
    let NHIFDeductions=Math.floor(salary * 0.08);
    //calculates NSSF  deductions
    let NSSFDeductions=Math.floor(salary+benefits)
    //calculates netsalary
    let netsalary=grosssalary - (tax+NHIFDeductions+NSSFDeductions);
    return{
        grosssalary,
        NHIFDeductions,
        tax,
        NSSFDeductions,
        netsalary,
    }
}
let output = calculateNetsalary(salary,benefits)//outputs netsalary
console.log('grosssalary:', output.grosssalary)
console.log('NHIFDeductions:',output.deductions)
console.log('tax:', output.tax)
console.log('NSSFDeductions:', output.NSSFDeductions)
console.log('nestsalary:', output,netsalary)
