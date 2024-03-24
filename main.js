const salary=100000
const benefits=10000
function calculateNetsalary(){
    let tax = Math.floor((salary+benefits) *0.45);
    let NHIFDeductions=Math.floor(salary * 0.08);
    let NSSFDeductions=Math.floor(salary+benefits)
    let netsalary=grosssalary - (tax+NHIFDeductions+NSSFDeductions);
    return{
        grosssalary,
        NHIFDeductions,
        tax,
        NSSFDeductions,
        netsalary,
    }
}
let output = calculateNetsalary(salary,benefits)
console.log('grosssalary:', output.grosssalary)
console.log('NHIFDeductions:',output.deductions)
console.log('tax:', output.tax)
console.log('NSSFDeductions:', output.NSSFDeductions)
console.log('nestsalary:', output,netsalary)