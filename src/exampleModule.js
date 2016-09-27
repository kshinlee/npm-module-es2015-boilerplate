const defaultModule = {
  name: 'my name is default module',
};

export const otherModule = {
  name: 'my name is other module. please look the differences between us',
};

export class Calculator {
  add(op1, op2) {
    return op1 + op2;
  }

  sub(op1, op2) {
    return op1 - op2;
  }

  mul(op1, op2) {
    return op1 * op2;
  }

  div(op1, op2) {
    return op1 / op2;
  }
}

export default defaultModule ;
