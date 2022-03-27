'use strict';

// const decompressRLElist = function (nums) {
//   let final = [];

//   let position = 0;
//   for (let i = 0; i < nums.length - 1; i += 2) {
//     for (let j = 0; j < nums[i]; j++) {
//       final.push(nums[i + 1]);
//     }
//     // final.fill(nums[i + 1], position);
//     // position++;
//     // console.log(`i + 1: ` + nums[i + 1]);
//     // console.log(nums[i]);
//   }

//   return final;
// };
// console.log(decompressRLElist([1, 2, 3, 4]));
// console.log(decompressRLElist([1, 1, 2, 3]));

// const average = function (arr) {
//   let valid = 0;
//   if (arr.length < 1) return 0;

//   return (
//     arr.reduce((init, el) => {
//       if (Number.isFinite(el)) {
//         // count numbers
//         valid++;
//         init += el;
//       }

//       // add number to reducer
//       return init;
//     }, 0) / valid // divide sum by total number of valid array elements
//   );
// };

// console.log(average([2, 4, 9]));
// console.log(average([2, 3.4, 'x', false, null, -1]));
// console.log(average([2, 4]));
// console.log(average([]));
// console.log(average([2]));

// ------------ Section 13 (ADVANCED DOM AND EVENTS) -------------------

/*document.getElementsByTagName();

// creating elements prorgramatically
const message = document.createElement('div'); // not on the page yet
message.classList.add('cookie-message'); // adds a class to the element
message.textContent - 'We use cookies for imporved functions';
message.innerHTML =
  'We use cookies for imporved functions. <button>Got it</button>';
Headers.prepend(message); // insert element in the HTML
Headers.append(message); // insert but it will only show element prepend.

// deleting element
document.querySelector('.message').addEventListener('click', function () {
  message.remove(); // new way of removing
  message.parentElement.removeChild(message); // old way of removing - DOM traversing
});

// setting styles - setting styles in the DOM creates inline styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// attributes
const logo = document.querySelector('.nav');
console.log(logo.alt);

// smooth scrolling
const btnScrollTo = document.querySelector('.someClass');
const section1 = document.querySelector('#section1');
btnScrollTo.addEventListener('click', function (e) {
  // get coords of element (x, y, bottom, etc)
  const s1Coords = section1.getBoundingClientRect();

  section1.scrollIntoView({ behavior: 'smooth' });
});

// types of events and handlers
const h1 = document.querySelector('h1');

// event delegation
// bad approach - .nav__link could be millions
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();

    // get the href from the a els
    const id = this.getAttribute('href');

    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});
// good approach
// 1 add listener to common parent el
// 2 determine what el originated the event
document.querySelector('.nav__links').addEventListener('click', e => {
  // matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM TRAVERSING
const h1 = document.querySelector('h1');
console.log(h1.querySelectorAll('.highlights')); //select all the els that are children of the h1 el
console.log(h1.childNodes); // access direct children nodes - texts, comments, etc
console.log(h1.children); // gives an html collection of direct children only

// going updwards
console.log(h1.parentNode); // direct parent node
console.log(h1.parentElement); // direct parent el
h1.closest(); // parent el that's not direct and no matter how far in the DOM

// siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling); // el that comes after
console.log(h1.previousSibling); // previous node

// Intersection Observer API
// this function is called each time the observed el is intersecting
// the root el at the threshold defined
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};
const obsOptions = {
  // the el that the target is intersecting
  root: null, // null so it checks the veiwport
  // the percentage of interseption where the observer callback will be called
  threshold: [0, 0.2],
};
const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1); // target el

const header = document.querySelector('.header');
const obsCallb = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) navigator.classList.add('sticky');
  else navigator.classList.remove('sticky');
};
const obsOpt = {
  root: null,
  threshold: 0,
  rootMargin: -'90px', // applies a size outside our target el
};
const observeer = new IntersectionObserver(obsCallb, obsOpt);
observeer.observe(header);

// reveal el on scroll
const allSections = document.querySelectorAll('.section');
const revailSects = function (entries, obs) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObs = new IntersectionObserver(revailSects, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  sectionObs.observe(section);
  section.classList.add('section--hidden');
});

// LAZY LOADING
const imgTargets = document.querySelector('img[data-src]');
const loadImg = function (ent, obs) {
  const [entry] = ent;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  obs.unobserve(entry.target);
};
const imgObs = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObs.observe(img));

// slider components
slides.foreach((s, i) => s.style.transform());

// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML paresed and dom tree built at:', e);
});

window.addEventListener('load', function (e) {
  console.log('Page fully loaded at', e);
});

// window.addEventListener('beforeunload', function(e) {
//   e.preventDefault();
//   console.log(e);
//   // e.returnValue="";
// });
*/

//---------- 14 OBJECT ORIENTED PROGRAMMING -------------

// constructor function - starts with capital, does not work with arrow funct(no this)
/*const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // bad practice - never create a method in a constructor funciton
  // it is attached to every instance
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const pegie = new Person('Doh', 1997);
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to proto
// 4. function automatically return {}

const matilda = new Person('Matilda', 2000);
const jack = new Person('Jack', 1987);
console.log(pegie instanceof Person);

// Prototypes - every function has a prototype - constructors included
console.log(Person.prototype);
// adding a method to the proto property
Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

pegie.calcAge();
matilda.calcAge();
// the proto (__proto__) of pegie is the proto property of the constructor function
console.log(pegie.__proto__);
console.log(pegie.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(pegie));

// setting properties on the proto - inherited properties, not owned (not in constructor)
Person.prototype.species = 'Home Sapiens';
console.log(pegie.species, matilda.species);

// INHERITANCE
const Student = function (firstName, birthYear, course) {
  // call() manually set the this keyword inside a function
  Person.call(this, firstName, birthYear);
  this.course = course;
};
// link the proto property of Student to Person
Student.prototype = Object.create(Person.prototype);

Student.prototype.intro = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2020, 'Computer Science');
mike.intro();
mike.calcAge();
console.log(mike.__proto__);

//Object.prototype - top of chain
console.log(pegie.__proto__.__proto__);
// null
console.log(pegie.__proto__.__proto__.__proto__);
// constructor property points back to itself (Person)
console.dir(Person.prototype.constructor);
Student.prototype.constructor = Student;

const arr = [1, 3, 5, 6, 6, 1, 4, 3];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
// adding custom methods to built-in objects - generally not a good idea
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// Coding Challenge #1
const Car = function (make, speed) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const bmw = new Car('BMW', 50);
const honda = new Car('Honda', 30);
bmw.accelerate();
honda.accelerate();
bmw.brake();
honda.brake();

// Coding challenge 2
class CarES {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    speed *= 1.6;
    this.speed = speed;
  }
}

// challenge 3
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};
EV.prototype = Object.create(Car.prototype);
EV.prototype.constructor = EV;
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} is going at ${this.speed} with a charge of ${this.charge}%.`
  );
  // 1% = .01
};

// challenge 4
class EVCl extends Car {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
    return this;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
    return this;
  }
}

//  ES6 CLASS - classes are special types of functions

// class expression
// const PersonCl = class {};

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // all methods are on the proto of the object
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else console.log(`${name} is not a full name.`);
  }

  get fullName() {
    return this._fullName;
  }

  // static method - this keyword points to class
  static hey() {
    console.log('Hey there!!');
  }
}

// INHERITANCE BETWEEN ES6 classes
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // must happen first - super is responsible for creating `this` in the subclass
    super(fullName, birthYear);
    this.course = course;
  }

  intro() {
    console.log(`My name is ${this.fullName} and I study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I'm ${2037 - this.birthYear} years old but feel like ${
        2037 - this.birthYear + 20
      }`
    );
  }
}

const martha = new Student('Martha', 1998, 'Social Studies');

const joe = new PersonCl('Joe', 1957);
console.log(joe);
joe.calcAge();

console.log(joe.__proto__ === PersonCl.prototype);

// methods can also be added to the proto property manually in ES6 classes
PersonCl.prototype.greet = function () {
  console.log(`Hey ${this.fullName}`);
};
joe.greet();

// GETTERS AND SETTERS
const account = {
  owner: 'Jay',
  movements: [200, 34, 321, 34],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);

// STATIC METHOD
Person.hey = function () {
  console.log('Hey there!!');
  console.log(this);
};
Person.hey();

// OBJECT.CREATE
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

// PersonProto now becomes the proto of steven
const steve = Object.create(PersonProto);

const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

const jay = Object.create(StudentProto);
jay.init('Jay', 2011, 'Science');
// add property to the obj
steve.name = 'Steve';
steve.birthYear = 2000;
steve.calcAge();
console.log(steve.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1989);
sarah.calcAge();

class Account {
  // public fields
  locale = navigator.language;

  // private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._movements = [];
    // this.locale = navigator.language;
    console.log(`Thanks for opening an account, ${owner}`);
  }

  // public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);

    // enable chaining
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  // static methods - only avialable on the class
  static helper() {
    console.log('Do something');
  }

  // private methods
  // #approveLoan(val){
  //   return true;
  // }
}

const acc1 = new Account('Jonas', 'EUR', 1111);
acc1.deposit(420);
acc1.withdraw(21);
console.log(acc1);
// console.log(acc1.#movements);

// chaining
acc1.deposit(300).deposit(500).withdraw(35);*/

// ASYNCH - PROMISES

// AJAX call: XMLHTTPREQUEST

/*
-------------GIT------------------
Go back in time to the previous commit - git reset --hard HEAD
Shows previous commit info - git log
Go to a previous specified commit - git reset --hard <commit key>
List branched - git branch
Parallel track to write new code without changing the original - git branch <branch name>

---------------- Forkify ----------
IMPLEMENTING BOOKMARKS - a common pattern for adding and removing data is that we 
add, we get the entire data and when we want to delete, we get the id.
DEVELOPING A DOM UPDATING ALGO - The firstChild property of a selected element is the 
text of that element. When we change an element, we want to change the attribute as
well. NodeValue is used to set or return the content of the specified node but returns
null for certain node types.

EVENT HANDLERS IN MVC: PUBLISHER-SUBSCRIBER(p-s) PATTERN - design patterns are standard
solution to certain kinds of problems. In p-s, the publisher is some code that knows
when to react, and the subscriber is code that wants to react, the code that should
be exuecuted when the event happens. The pusblisher does not know that the subscriber
exist. 

HELPERS AND CONFIGURATION FILES - many real world app have two module modules that
are independent of the rest of the project architecture and they are project config
and help functions module.

THE MVC ARCHITECTURE
Our project must follow a certain architecture for easy maintainance, expansions, and
structure.
There are some frameworks that take care of architecture but we can also create one
manually. 
Components of Architecture
BUSINESS - code that solves the business problem. If your business is whatsapp, your
businsess is sending messages. The logic related to solve the problem that the
business was set out to do.

STATE - stores the data needed for the application. It should be the 'single source of
truth' so if something changes in the state, it should be reflected in the UI and vice
versa. Storing, display, and keeping data in sync is one of the most difficult task.

HTTP LIBRARY - responsible for making and receiving fetch requests.

APPLICATION LOGIC (ROUTER) - concern about the implementation of the application that
is not directly related to the business logic. It is the technical aspect, including
hanling of UI events and page navigation. It maps action to the user navigation.

PRESENTATION LOGIC (UI LAYER) - visible part of the application, responsible for
displaying the app state on the UI.

Any good architecture have a way for separating all these components like the MVC.

Model - the application data. Usually contains the state and the business logic. It
also contains HTTP library.

Controller - contains the app logic. Sits between the model and the view which should
know nothing of each other. MVC mainly separates business from application logic. The 
controller is a sort of bridge between the two. It dispaches tasks to the model and
the view. Only the controller imports and calls functions from the model and the view.

VIEW - renders data to the UI. Handles everything related to the DOM or the view.

There are different ways of implementing the MVC pattern.


//------------- 16 Async JS -----------
Synch code is executed as the appear in the code line-by-line. If there is an
that is long running, it blocks execution of other code after it.
ASYNC code are non-blocking because the rest of the code keeps running will the asyn
code runs in the background. Not all callback functions and event listeners are async.
Setting the src attr of any img is essentially loading the img in the background while
the other code runs.
AJAX -(Async JS And Xml) allows us to communicate with remote servers in an async way. 
We make AJAX calls to request some data from a web server dynamically (without 
reloading page). The commuincation between server and clients happend in the back.
XML is data format use to transmit data on the web but JSON is most popular and is a
JS object converted to a string.
Server contains web API which is what has the data we are requesting.
API - a program that allow other application to talk to each other and share info.

//------------ 14 OOP --------------------
OOP - objects are self contained pieces of code/blocks and are used as building blocks
of our application and used with other objects through a public interface (API). OOP
exist to order our code and avoid spaghetti code.
CLASS - blueprint used to create new class. JS does not support the normal class used
in other languages.
OBJECT - instance of a class.
ABSTRACTION - hide details that don't matter.
ENCAPSULATION - keep some methods and properties private to the class. Exposed methods
are in the public interface (API).
INHERITANCE - a has-a relationship. Reduce duplicate code by having closely related
classes have a ancestor-descendant hierarchical relationship.
POLYMORPHISM - child class can override methods inherited from parent. The JS engine
will first look in the child class for methods before moving up the chain.

OOP IN JS - js uses prototypes (proto) object that all objects are linked. The proto
contains methods and properties that all the methods and objects linked to that proto
can use in a process called prototypal inheritance. Objects delegate behavior to the
linked proto object. Each time we use array methods, it is because of prototyping.
CREATING OBJECT - constructor functions create objects programmatically and is how
built in object are created (array, maps, etc) with new keyword. 
ES6 classes are syntatic sugar of constructor functions and make it easier to do OOP. 
Object.create() is the easiest way of linking objects to a prototype object.

Constructor functions - are simply a concept used by developers
Prototypes every obj created by a certain constructor function will have access to 
all the methods and properties defined on the constructor's proto properties. Each
object has a special property called __proto__ which is the prototype of the object.
The proto (__proto__) is the proto property of its constructor funct.

PROTO CHAIN - the ability of looking up methods in the prototype. All object have a
prototype and the proto of a class points to Object.prototype which then points to
null. When js can't find a property or method in a certain proto, it looks up the
chain.

ES6 CLASSES -  the 'constructor' in ES6 classes are like regular constructor function
with a difference being that ES6 constructors are a method of the class. Classes are not
hoisted (expr or decl). Classes are first class citizen - can be passed in and returned
from functions. Body of a class is always executed in strict mode.

// GETTERS AND SETTERS - functions that get and set values and they look like regular
properties. They are like any other methods we set on the proto. Getter is so we can
get a value out of an object by simply writing a property rather than a method, same
for setters;

// STATIC METHODS - are attached to the constructor and not the proto. 

// OBJECT.CREATE - third way of implementing proto inheritance but no proto properties,
constructor functs, or new operator. They are used to manually set the proto of an
to any obj.

// Encapsulation - prevent code from outside the class from manually manipulating 
with data in our class. JS classes do not yet support true data encapsulation. 
Underscore is a convention used to make properties private in JS.

// PRIVATE CLASS FIELDS AND METHODS - has 8 different class fields and methods - public
and private methods, and public and private fields.


// ------------- 13 ADVANCED DOM EVENTS ---------------
EFFECIENT SCRIPT LOADING - adding async and defer attribute to the script tage affect
how the script is fetched and downloaded. Without any attribute and being in the head, 
the script will be fetched in the middle of HTML parsing, which will stop the HTML 
parsing temporarily and the script will be executed before the HTML is fully parsed.
Async script loading in the head loads the script at the same time the html is parsed
but the parsing still stops for the script execution. DomContentLoaded usually waits
for all scripts to execute except async scripts and script aren't always executed
in order defined and is used for third party scripts when order doesn't matter.
With DEFER, script is loaded asyncly but the execution is defered until the end of
HTML parsing. DomContentloaded only fires after defer script is executed and all
scripts are executed in order with defer and is good with third party library.
Adding script at end of body fetches and executes it after the html is completely
parsed

LIFECYCLE DOM EVENTS - lifecycle is from the moment the page is first accessed until
the user leaves it. DOMCONTENTLOADED is fired by the doc as the html is parsed
and have been downloaded to the dom tree. It does not wait for imgs and other 
resources, just html and js. All script must be downloaded and excecuted before 
DOMCOntentloaded is fired.
The load event is fired by the window when the html, imgs, and other resources have
been loaded.
BeforeUnload event gets fired on window before the user is about to leave the page.

// BUILDING SLIDER COMPONENTS - 

LAZY LOADING IMAGES - the mean feature of lazy loading is to have a lower resolution
image load at the beginning that is replaced when the user scrolls to that section
of the page.

dom is the interface between our js code and the browser or html docs rendered
by the browser.
DOM is used to make js interact with the browser through the DOM TREE - which
is generated from any html doc and is a structure made out of node. It is an
API used to interact with the DOM. Some nodes are html elements while some are
just texts. Every node in the DOM is of the type node and is represented in js
as an object. There are element, text, comment, and document node. DOM elements
are unique and can only show up one place on the page can be copied with the 
cloneNode() method.

getElementsByTagName/ClassName returns an HTML collection that is a live collection that
changes when the DOM changes.

A nodelist does not update based on changes in the DOM.

When creating classes, aviod using the className property on the classList object as
it can override all existing classes on the element.

Only styles that we set programatically can be selected programatically without the use
of the getComputedStyle() method. With custom css property we use the setProperty()
method to change.
JS creates objects for each attribute on an element which we can access and change.

Data attributes are special kinds of attribute that starts with data and are 
always stored in the dataset attribute. We used it store data in the UI/HTML code.

Event is a signal that is trigerred by a certain DOM node. Events can be removed.

Event Propagation - Bubbling and Capturing
In a nested element, when an event happens on the most nested element, it is first
generated at the root where the capturing phase happens and the event travel from
 the DOC root to the target nested el, passing through every single parent el
 of the target el. When the event reaches the taret, the target phase begins,
  where events are handled right at the target with event listeners. After reaching
  the target, the event travels back to the root in the BUBBLING phase, passing through
  all its parent el to the root. Its as if the event happens on all the parent el.
By default, events can only be handled in the target and bubbling phase, but can also
be set up to handled in the capturing phase. Some events are created right on the target
and can only be handled there. Propagating is concept of capturing and bubbling. In an
event listener function, e.target is the el where the click or event first happens and
e.currentTarget is the el on which the event is attached. Propagation can be stopped
with e.stopPropagation. Capturing is not useful to us but the bubbling phase is, because
of event delegation but event can be captured by adding a third para to the event handler
function. Capturing and bubbling exist mostly for historical reason.

EVENT DELEGATION - makes used of the fact that events bubble up. We do that by putting 
event listeners on a common parent for all the elements we are interested in.

DOM TRAVERSING - selecting elements relative to another element. The closest method
finds a parent el that matches provided selector string. We can only access direct
siblings.

Intersection Observer API - allows our code to observe changes to the way a certain
target el intersect another el or the viewport.
*/

// ------------ Section 12 (NUMBERS, DATES, INTL, and TIMERS) -----------------

/*// convert a string to number
console.log(+'23');

// parse a number from a string - string must start with number
console.log(Number.parseInt('30px', 10));
console.log(Number.parseInt(' 2.5rem '));

// check if a value is NOT a number - not a good way for checking for number
console.log(Number.isNaN(20)); // false
console.log(Number.isNaN('20')); // false

// better way for checking if a value is a number
console.log(Number.isFinite(20));

// rounding INts
console.log(Math.trunc(-23)); // trunc doesn't work well with negatives
console.log(Math.floor(-23)); // floor works better - does type coercion

// numeric separator - does not work with strings, only in numeric literals
const diameter = 245_563_654_774;
console.log(diameter);
const price = 345_99;
console.log(price);

// BigInt is used to store ints as large as we want but can't be used with
// regular number without BigInt(num)
console.log(1452456368576034634635n);
console.log(BigInt(2535235266350963673));

// Date and Times

// Create a date
const now = new Date();
console.log(now);
console.log(now.getTime());

console.log(new Date('Aug 02 2020 18:05:41'));
*/

// a clock the logs the hr/min/secs to console after every secs
/*setInterval(() => {
  const now = new Date();
  console.log(`${now.getHours()}/${now.getMinutes()}/${now.getSeconds()}`);
}, 1000);*/

// display day/month/year

/*
In JS, all numbers are represented internally as floating point numbers
and in a binary, 64 bit format where only 53 are used to store digits. 
You cannot do precise, scientific calculation because of how numbers are stored 
internally.

Dates are objects and therefore have methods like getFullYear, getMonth, etc.

setTimeout() executes a function once after a specified period. It can be cancelled
with clearTimeout(). setInterval runs repeatedly after a specified number of time.

*/

// CLOSER LOOK AT FUNCTIONS
/*const upperFirstWord = function (str) {
  let [first, ...others] = str.split(' ');
  const testString = [first.toUpperCase(), ...others].join(' ');
  console.log(first);
  console.log(others);
  console.log(testString);
};

upperFirstWord('This is a test case');

// write arrow function that returns another function
const greet = greeting => name => console.log(`${greeting} ${name}`);
greet('Hello')('Facsimile');

const addTax = value => rate => console.log(value + value * rate);
const addTaxFun = function (value) {
  return rate => console.log(value + value * rate);
};

const addRate = addTax(100);
addRate(0.23);
const addRateArr = addTaxFun(100);
addRateArr(0.23);

// Coding Challenge
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section 😃
  answers: new Array(4).fill(0),
};

poll.registerNewAnswer = function () {
  const qOptions = this.options;
  let dispOpt = '';
  qOptions.forEach(opt => (dispOpt += opt + '\n'));

  let inputNum = Number();
  // prompt(`${this.question} \n ${dispOpt} (Write option number)`)

  if ((typeof inputNum === 'number' && inputNum < 4) || inputNum > 0) {
    this.answers[inputNum - 1]++;
  }
};

const displayResults = function (...type) {
  if (Array.isArray(type)) console.log(type);
  else console.log(`Poll results are ${type}`);
};

poll.registerNewAnswer();/*

//coding challenge 2
/*(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();*/

//------------------Section10 (FUNCTIONS CLOSER LOOK)----------------
/* 
In a regular function call, the 'this' keyword points to undefined.

BIND does not immediately call the function but set a new function where the
'this' keyword is always bind to the passed in object. It gives us a new function

On an event listener, the this keyword always point to the element the event is
attached to.

Paritial Application - means that we can preset parameter values
*/

//--------------Working with Arrays-----------------------
/*
Arrays are objects so they have methods that can be applied to them.

Slice operator and spread operator can be used to create a shallow array without
mutation. Splice on the other hand mutates the array.

*/

// Coding Challenge 1
/*const checkDogs = function (age1, age2) {
  const age1Copy = [...age1];
  const newAge = age1Copy.slice(1, -2);
  console.log(newAge);
  const combined = newAge.concat(age2);
  console.log(combined);

  combined.forEach((dog, i) => {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy.`);
    }
  });
};

const JuliaData = [3, 5, 2, 12, 7];
const kateData = [4, 1, 15, 8, 3];
checkDogs(JuliaData, kateData);*/

// const str = userName.map(strn => strn[0]).join('');
// const deposits = movements.filter(mov => mov < 0);

// Coding Challenge 2
/*const calcAverageHumanAge = ages => {
  return (
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, age) => acc + age, 0) / ages.length
  );
};

const test1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(test1);

// coding challenge 4
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

let dogEats = function (dogs) {
  let sarahDog = '';
  let ownersEatTooMuch = [];
  let ownersEatTooLittle = [];
  dogs.forEach(val => {
    const recommended = Math.trunc(val.weight ** 0.75 * 29);
    val.recommendedFood = recommended;

    if (val.curFood > recommended * 0.9 && val.curFood < recommended * 1.1) {
      sarahDog = val.owners.includes('Sarah')
        ? "Sarah's dog is eating just right"
        : '';
      console.log(`Eating right amount`);
    } else if (val.curFood < recommended * 0.9) {
      sarahDog = val.owners.includes('Sarah')
        ? "Sarah's dog is eating too little"
        : '';
      ownersEatTooLittle = [...val.owners];
      console.log(`Eating too little`);
    } else {
      sarahDog = val.owners.includes('Sarah')
        ? "Sarah's dog is eating too much"
        : '';
      ownersEatTooMuch = [...val.owners];
      console.log(`Eating too much`);
    }
  });

  const sortedDogs = dogs.sort((a, b) => a.recommendedFood - b.recommendedFood);
  console.log(sortedDogs);

  console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little.`);
  console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much.`);
  console.log(sarahDog);
};

dogEats(dogs);*/
// console.log(dogs);

//------------------Section 11 (WORKING WITH ARRAYS)---------------------
/*
MAP array method is similar to foreach but creates a brand new array.
FILTER filters for elemennts in the original array based on a condition.
REDUCE biols down all the element in an array to one value. Unlike the other
methods, its first parameter is the accumulator that operates on all the elements
of the array.
FIND method is used to retrieve one element from an array based on a condition.
It returns the first element that matches the condition.
FINDINDEX is an array method that returns the first index that passes a certain.
INCLUDES test for equality while SOME returns true if it finds any value.
EVERY only returns true if all the elements in the array returns true.
FLAT creates a new singler array from all subarrays, it only goes one level deep
by defaul but can go deeper using a parameter. FLATMAP is a combination of the
MAP and the FLAT method which is better for performance.


Chaining should not be overused because chaining tons of methods on a huge array
can cause performance issues. We should try to compress our methods when possible.
It is a bad practice to chain method that mutate the original array.

In HTML, the default behavior when a submit form button is clicked is that the page
is reloaded. This can be stopped using preventDefault on the event listener parameter.

*/
