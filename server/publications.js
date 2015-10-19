Meteor.publish('registers', function getAllRegisters() {
  return Registers.find();
});

Meteor.publish('transactions', function getAllTransByYear() {
  return Transactions.find();
});
