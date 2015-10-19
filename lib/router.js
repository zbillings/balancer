Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function waitForRegisters() {
    return Meteor.subscribe('registers');
  }
});

Router.route('/', {
  name: 'registersList'
});

Router.route('/trans/:year', {
  name: 'transactionsList',
  waitOn: function waitForTransactions() {
    return Meteor.subscribe('transactions', this.params.year);
  }
});

Router.onBeforeAction('dataNotFound');
