if (Registers.find().count() === 0) {
  Registers.insert({
    year: 2015,
    active: true
  });
}

if (Transactions.find().count() === 0) {
  Transactions.insert({
    year: 2015,
    checkNum: null,
    type: 'withdrawl',
    amt: 102.32,
    desc: 'WE Energies bill',
    cleared: false,
    date: Date.now()
  });

  Transactions.insert({
    year: 2015,
    checkNum: null,
    type: 'deposit',
    amt: 1877.55,
    desc: 'Kari\'s paycheck',
    cleared: false,
    date: Date.now()
  });

  Transactions.insert({
    year: 2015,
    checkNum: 1102,
    type: 'withdrawl',
    amt: 26.15,
    desc: 'EBS (water & sewer bill)',
    cleared: true,
    date: Date.now()
  });
}
