
let calculate_salary = function () {

    let salary = window.prompt("Enter your salary for the month: ")
    let month = window.prompt("Enter the name of the month: ")
    let savings_per = window.prompt("Enter Savings' Percentage: ")
    let rent_per = window.prompt("Enter Rent' Percentage: ")
    let elec_per = window.prompt("Enter Electricity' Percentage: ")

    let savings = savings_per/100 * salary
    let rent = rent_per/100 * salary
    let electricity = elec_per/100 * salary
    let spends = savings + rent + electricity
    let remainder = salary - spends

    console.log("The amount allocated to savings: ", savings)
    console.log("The amount allocated to rent: ", rent)
    console.log("The amount allocated to electricity: ", electricity)
    console.log("The total amount you spendsf: ", spends)
    console.log("The remainder of the salary: ", remainder)
    console.log("Your yearly rent and electricity cost: ", (electricity+rent) * 12)
    console.log("The salary for the month raised to the power of 2: ", salary*salary)
    console.log("The additional random amount 50, divided by the total amount allocated to savings is: ", 50/savings)

}

calculate_salary()


