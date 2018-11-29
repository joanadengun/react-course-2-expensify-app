import getExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 if no expenses',() => {
    const expenses = [];
    const total = getExpensesTotal(expenses);

    expect(total).toBe(0);

});
test('Should correctly add up a single expense',() => {
    const total = getExpensesTotal([expenses[0]]);

    expect(total).toBe(195);
});
test('Should correctly add up a multiple expense',() => {
    const total = getExpensesTotal(expenses);
    expect(total).toBe(114195);
});