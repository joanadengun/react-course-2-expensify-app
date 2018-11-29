export default (expenses) => {
    var totalAmount = expenses.reduce(
        (sum, expense) => sum + expense.amount, 0
    );
    return totalAmount;

}