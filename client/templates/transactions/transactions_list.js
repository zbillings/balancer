Template.transactionsList.helpers({
  transactions: function getTrans() {
    return Transactions.find();
  }
});
