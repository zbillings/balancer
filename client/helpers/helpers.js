Template.registerHelper('formatDateForTrans', function(dateVal) {
    return moment(dateVal).format('MM/DD');
  }
);
