// Generated by CoffeeScript 1.12.4
(function() {
  var age, copy, first, firstAgain, gender, hello, i, iLike, item, len, name, person, ref, rest, sushi, type, typeTwo, yell,
    slice = [].slice;

  name = 'Jorman';

  person = true;

  age = 27;

  yell = function() {
    alert(name);
    return alert(age);
  };

  if (person === true && name === "Jorman") {
    yell();
  }

  if (name != null) {
    yell();
  }

  if (typeof gender !== "undefined" && gender !== null) {
    gender = 'Male';

    /* gender = '' -> gender ?= 'Male' */
  }

  type = ['Rice', 'Crab', 'Cucumber', 'Seaweed', 'Tuna', 'Salmon'];

  sushi = {
    kind: 'Roll',
    roll: function() {
      return 'Rolled';
    },
    fish: 'Salmon',
    ing: {
      rice: 'white',
      veg: 'cucumber'
    }
  };

  alert("My name is " + name + " and mi age is " + (20 + 7));

  hello = "<h1>\n  Hello\n</h1>";

  for (i = 0, len = type.length; i < len; i++) {
    item = type[i];
    alert(item);

    /*
    alert item for item in type when item isnt 'Rice'
    "{item}s" for item in type when item isnt 'Rice'
     */
  }

  type = (function() {
    var j, len1, results;
    results = [];
    for (j = 0, len1 = type.length; j < len1; j++) {
      item = type[j];
      if (item !== 'Rice') {
        results.push(item + "s");
      }
    }
    return results;
  })();

  typeTwo = (function() {
    var j, len1, results;
    results = [];
    for (j = 0, len1 = type.length; j < len1; j++) {
      item = type[j];
      if (item !== 'Rice') {
        results.push(item);
      }
    }
    return results;
  })();

  iLike = function() {
    var most, rest, second;
    most = arguments[0], second = arguments[1], rest = 3 <= arguments.length ? slice.call(arguments, 2) : [];
    alert("I like " + most + " the most");
    alert("I like " + second + " the second most");
    return alert("I also enjoy " + rest);
  };

  iLike.apply(null, type);

  first = type.slice(0, 4);

  firstAgain = type.slice(0, 3);

  rest = type.slice(4);

  copy = type.slice(0);

  [].splice.apply(type, [2, 3].concat(ref = ['Yellowtail', 'Fugu', 'Eel'])), ref;

  alert(type);

  switch (colors) {
    case 'Blue':
      alert('Blue');
      break;
    case 'Greem':
      name = 'Green';
      break;
    case 'Black':
    case 'Brown':
      if (colors === 'Black') {
        alert('Black');
      }
      name = 'Brown/Black';
      break;
    default:
      alert('No colors');
  }


  /*
  is ===
  isnt !==
  not !
  and &&
  or ||
  true, yes, on     true
  false, no, off    false
  @, this           this
  of                in
  in
  unless
  then
  ?
   */

}).call(this);
