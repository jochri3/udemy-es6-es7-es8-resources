function sommeDesNombres(p1, p2, p3, ...nombres) {
  console.log(nombres);
  console.log(p1);
  console.log(p2);
  console.log(p3);
  return nombres.reduce((som, nombre) => som + nombre, 0);
}
