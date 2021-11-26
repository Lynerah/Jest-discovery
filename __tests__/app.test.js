const app = require('../app');

//test V1
// describe('Palindrom', () => {
//    it('receive a sentence', () =>{
//       expect(app.hello.length).toBeGreaterThan(0);
//    });
//    it('have a lenght of 11', () =>{
//       expect(app.hello.length).toEqual(11);
//    });
// });

//TEST V2
describe('Palindrom', ()=>{
   it('is a palindrom', ()=>{
      expect(app.isPalindrom('kayak')).toEqual(true);
   });
});