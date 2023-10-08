<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The correct answer is "A". In JavaScript, we can declare a variable without any var, let or const keyword. In this case there must be a value assigned to the variable and the variable becomes global scope. Here we are console logging a variable just without any keyword.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>The correct answer is "C". In JavaScript, if we add a string value after a number it will concatenate with the number in front of it. Even if the string value is look like a number, instead of giving the sum of the numbers it will just concatenate with the number in front of it. That is what  happening here. </i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>The correct answer is "A". Although arrays and objects are mutable data type in JavaScript. Changing the value of one does not affect another if they are not referenced to the same memory address within the application. That's why here changing the food array element inside info object does not affect the value of food array because they are not sharing the same memory address.</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Here sayHi function takes a parameter "name" and return it. But when we call the function, we do not provide any value for the parameter. So the function is using "undefined" as parameter value,  which is the default value of a JavaScript function parameter. When we pass a value as parameter, the "undefined" get replaced with the value we provide.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here for every element of nums array, we are adding 1 with the previous value of count. But only when the individual looped element of nums array is truthy. So, 1 will add total three times with the previous value of count although there is total four array element. Because 0 is a falsy value and during it as value of num nothing will add with the previous value of count. (count = 0 + 1 = 1, 1 + 1 = 2, 2 + 1 = 3)</i>

</p>
</details>
