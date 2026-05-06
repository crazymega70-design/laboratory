const transactions = [
  {
    transaction_id: 1,
    transaction_date: "05.10.2006",
    transaction_amount: 150,
    transaction_type: "расход",
    transaction_description: "Покупка продуктов",
    merchant_name: "Stim",
    card_type: "кредитная"
  },

    {
    transaction_id: 2,
    transaction_date: "06.10.2006",
    transaction_amount: 300,
    transaction_type: "приход",
    transaction_description: "Зарплата",
    merchant_name: "Company",
    card_type: "дебетовая"
  }
];




 function calculateTotalAmountByDate(transactions, year, month, day)  { 
    return  transactions.reduce(( sum, t) => sum + t.transaction_amount, 0); 
}



 function calculateTotalAmountByDate(transactions, year, month, day)  { 
  return transactions 
 
  .filter( t => { 
     const [ d, m, y ] = t.transactions_date.split (".").map(Number); 
     
     if (yers && y !== year) return false; 
     if (mounth && m !== month) return false; 
     if ( day && d!== day) return false; 

     return true; 

  }) 
  .reduce(( sum, t) => sum + t.transaction_amount, 0);  

} 


function getTransactionByType(transactions, type) { 
  return transactions.filter( t => t.transactions_type === type ); 
}  



function getTransactionsInDateRange(transactions, startDate, endDate) { 
  const start = new Date ( startDate.split (".").reverse().join("-"));
  const end = new Date (endDate.split (".").reverse().join("-")); 

  return transactions.filter ( t=> { 
    const current = new Date ( t.transaction_date.split(".").reverse().join("-"))
    return current >= start && current <= end;
  });
}

function getTransactionsByMerchant(transactions, merchantName) { 
    return transactions.filters ( t => t.merchant_Name === merchantName )


function calculateAverageTransactionAmount(transactions) { 
    if (transactions.length ===0) return 0; 
}
  const total = transactions.reduce ((sum, t) => sum + t.transaction_amount, 0); 
  return total / transactions.length 


function calculateTotalDebitAmount(transactions) { 
    return transaction 
    .filters ( t => t.transaction_type === " debit")
    .reduce (( sum, t) => sum + t.transaction_amount, 0 ); 
}



function getTransactionsByAmountRange(transactions, minAmount, maxAmount) { 
   return transactions.filter ( t => 
     t.transaction.amount >= minAmount && t.transaction.amount <=maxAmount 
   ); 


}

function calculateTotalDebitAmount(transactions) {
    return transactions
        .filter(t => t.type === 'debit')
        .reduce((sum, t) => sum + t.amount, 0);
}






function findMostTransactionsMonth(transactions) {
  const monthsCount = {}; // счетчик сколько транзакций 

  transactions.forEach(transaction => {
    const date = new Date(transaction.date);
    const month = date.getMonth(); // 0–11

    monthsCount[month] = (monthsCount[month] || 0) + 1;
  });

  let maxMonth = null;
  let maxCount = 0;

  for (const month in monthsCount) {
    if (monthsCount[month] > maxCount) {
      maxCount = monthsCount[month];
      maxMonth = month;
    }
  }

  return maxMonth; 
}




function findMostDebitTransactionMonth(transactions) {
  const monthsCount = {};

  transactions
    .filter(transaction => transaction.type === "debit")
    .forEach(transaction => {
      const date = new Date(transaction.date);
      const month = date.getMonth(); // 0–11

      monthsCount[month] = (monthsCount[month] || 0) + 1;
    });

  let maxMonth = null;
  let maxCount = 0;

  for (const month in monthsCount) {
    if (monthsCount[month] > maxCount) {
      maxCount = monthsCount[month];
      maxMonth = month;
    }
  }

  return maxMonth; // номер месяца (0 = январь)
}



function getTransactionsBeforeDate(transactions, date) {
  const targetDate = new Date(date);

  return transactions.filter(transaction => {
    return new Date(transaction.date) < targetDate;
  });
}

function findTransactionById(transactions, id) {
  return transactions.find(transaction => transaction.id === id);
}


function mapTransactionDescriptions(transactions) {
  return transactions.map(transaction => transaction.description);
}








