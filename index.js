import getModifiedArray from './Tasks/task-1.js';
import filterNums from './Tasks/task-2.js';
import maxInterv from './Tasks/task-3.js';
import sumOfLen from './Tasks/task-4.js';
import combineArray from './Tasks/task-5.js';
import longestLogin from './Tasks/task-6.js';
import processArray, {factorial} from './Tasks/task-7.js';
import overloadedFunc from './Tasks/task-8.js';
import combineFunctions from './Tasks/task-9.js';
import getLanguages from './Tasks/task-10.js';
import students from './Tasks/task-10_students.js';
import createComposition from './Tasks/task-11.js';
import {
  copy,
  split,
  join,
  tripleExclaim,
  upperCase,
} from './Tasks/task-11_funcs.js';

// !Task-1
const myArr = [12, 6, 22, 0, -8];
console.log(getModifiedArray(myArr));
console.log(myArr);

// !Task-2
console.log(filterNums([-1, 2, 4, 0, 55, -12, 3], 11, 'greater')); //[ 55]
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 6, 'less')); // [-2, 2, 3, 0, -13]
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], -33, 'less')); //  []
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6])); // [2, 3, 43, 6]
console.log(filterNums([-2, 2, 3, 0, 43, -13, 6], 23)); // [43]

// !Task-3
console.log(maxInterv(3, 5, 2, 7)); //5
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2)); //11
console.log(maxInterv(3, 5)); //2
console.log(maxInterv(3)); //0

// !Task-4
console.log(sumOfLen('hello', 'hi')); //7
console.log(sumOfLen('hi')); //2
console.log(sumOfLen()); //0
console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16

// !Task-5
console.log(combineArray([12, 'User01', 22, true, -8], ['Index', 6, null, 15])); // [12, 22, -8, 6, 15]

// !Task-6
console.log(longestLogin(['dima', 'vlad_2', 'Radchenko', 'guest'])); //  Radchenko
console.log(longestLogin(['user1', 'user2', '333', 'user4', 'aa'])); //  user4
console.log(longestLogin(['maxxx', 'NewUser', 'admin111', 'Administrator'])); // Administrator

// !Task-7
console.log(processArray([1, 2, 3, 4, 5], factorial)); // [1, 2, 6, 24, 120]

// !Task-8
console.log(overloadedFunc()); // [2, 4, 6]
console.log(overloadedFunc([2, 4, 6, 8])); // [4, 8, 12, 16]
console.log(overloadedFunc([2, 4, 6], 3)); // [6, 12, 18]
console.log(overloadedFunc(10)); // 20
console.log(overloadedFunc(8, 3)); // 24

// !Task-9
console.log(combineFunctions((x) => x + 5)(3));
console.log(combineFunctions()(3));
console.log(
  combineFunctions(
    (x) => x + x,
    (x) => x - 1,
    (x) => x !== 0
  )(5)
);
console.log(
  combineFunctions(
    (x) => x + x,
    (x) => x - 1,
    (x) => (x = -x),
    (x) => 'Hello, ' + x
  )(5)
);

// !Task-10
console.log(getLanguages(students, (student) => student.age < 26));
// ['English', 'Ukrainian',  'Italian', 'Polish']
console.log(getLanguages(students, (student) => student.name === 'Alice'));
// ['Italian', 'Polish']
console.log(getLanguages(students));
// ['English', 'Ukrainian','Polish', 'Spanish', 'Italian', 'Polish']

// !Task-11
const result = createComposition(
  upperCase,
  tripleExclaim,
  split('_'),
  join(' '),
  copy
);

console.log(upperCase('by_ticket_now')); // BY_TICKET_NOW
console.log(tripleExclaim('by_ticket_now')); //by_ticket_now!!!
console.log(copy('by_ticket_now')); //by_ticket_now by_ticket_now
console.log(result('by_ticket_now')); //BY TICKET NOW!!! BY TICKET NOW!!!
console.log(result('only_today_big_discounts')); // ONLY TODAY BIG DISCOUNTS!!! ONLY TODAY BIG DISCOUNTS!!!
console.log(result('total sale')); // TOTAL SALE!!! TOTAL SALE!!!
console.log(result('buy 2 - get 3')); // BUY 2 - GET 3!!! BUY 2 - GET 3!!!