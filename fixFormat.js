export default code => {
  // replace 4, 3 and 2 spaces to \t
  while (code.includes('    ')) {
    code = code.replace('    ', '\t');
  }
  while (code.includes('   ')) {
    code = code.replace('   ', '\t');
  }
  while (code.includes('  ')) {
    code = code.replace('  ', '\t');
  }

  // remove \n and space in end of code
  while (
    code.charAt(code.length - 1) === '\n' ||
    code.charAt(code.length - 1) === ' '
  ) {
    code = code.slice(0, -1);
  }
  return code;
};
