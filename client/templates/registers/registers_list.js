Template.registersList.helpers({
  registers: function getRegisters() {
    return Registers.find({active: true});
  }
});
