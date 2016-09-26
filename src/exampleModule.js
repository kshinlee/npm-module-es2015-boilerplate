const defaultModule = {
  name: 'Koss Project 1',
};

export const foo = function plus(a,b){
  return "1 + 2 = " + (a + b) ;
};

export const time = function currenttime(){
  return Date();
};

export const otherModule = {
  name: 'my name is other module. please look the differences between us',
};


export default defaultModule;
