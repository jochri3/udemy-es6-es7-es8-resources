const bresilienRealMadrid = ['Ronaldo', 'Roberto Carlos', 'Flavio Concecao'];
const bresilienFCBarcelone = ['Ronalinho', 'Silvinho', 'Belleti', 'Edmilson'];
const bresilienMilanAC = ['Rivaldo', 'Kaka'];
const equipeBresil = bresilienMilanAC.concat(
  bresilienRealMadrid.concat(bresilienFCBarcelone)
);

const equipeBresilSpread = [
  ...bresilienRealMadrid,
  ...bresilienFCBarcelone,
  ...bresilienMilanAC,
];

// const bresil1 = bresilienRealMadrid.concat(bresilienFCBarcelone);
// const bresil = bresilienMilanAC.concat(bresil1);
