module.exports = function solveEquation(equation) {
  equation = equation.replace(/ /g, "");

  var a, b, c, D, x1, x1;
  var solutions = [];
  a = equation.match( /([-]?\d+)\*x\^2/i );
  b = equation.match( /([-]?\d+)\*x(?!\^)/i );
  c = equation.match( /[-]?\d+\*x\^2[+-]\d+\*x(?!\^)([+-]\d+)/i );
  D = b[1]*b[1] - 4*a[1]*c[1];

  if (D < 0) return "Нет корней";

  if (D > 0) {
  	x1 = Math.round( ( -b[1] + Math.sqrt(D) ) / (2 * a[1]) );
  	x2 = Math.round( ( -b[1] - Math.sqrt(D) ) / (2 * a[1]) );

  	if (x1 < x2) {
  		solutions = [x1, x2];
  	} else {
  		solutions = [x2, x1];
  	}
  	return solutions;
  }
}
