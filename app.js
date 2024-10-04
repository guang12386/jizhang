// 初始化今天的支出
let todayExpense = 0;

// 载入存储的支出金额
function loadExpense() {
    const savedDate = localStorage.getItem('savedDate');
    const today = new Date().toLocaleDateString();

    // 如果日期变化，则重置支出
    if (savedDate !== today) {
        localStorage.setItem('savedDate', today);
        todayExpense = 0;
        localStorage.setItem('todayExpense', todayExpense);
    } else {
        todayExpense = parseFloat(localStorage.getItem('todayExpense')) || 0;
    }
    document.getElementById('today-expense').textContent = todayExpense;
}

// 添加支出
function addExpense() {
    const expenseInput = document.getElementById('expense-input').value;
    const expense = parseFloat(expenseInput);

    if (!isNaN(expense) && expense > 0) {
        todayExpense += expense;
        localStorage.setItem('todayExpense', todayExpense);
        document.getElementById('today-expense').textContent = todayExpense;
    }

    document.getElementById('expense-input').value = '';
}

// 减少支出
function subtractExpense() {
    const expenseInput = document.getElementById('expense-input').value;
    const expense = parseFloat(expenseInput);

    if (!isNaN(expense) && expense > 0) {
        todayExpense -= expense;
        if (todayExpense < 0) {
            todayExpense = 0; // 确保支出不会变成负数
        }
        localStorage.setItem('todayExpense', todayExpense);
        document.getElementById('today-expense').textContent = todayExpense;
    }

    document.getElementById('expense-input').value = '';
}

// 每次加载时更新支出
window.onload = loadExpense;