# ETCH-A-SKETCH Implementation

This is supposed to be [an exercise on dynamically generating HTML code](https://www.theodinproject.com/courses/web-development-101/lessons/etch-a-sketch-project?ref=lnav).

## The stuff I've learned

1. putting things into a main function, and calling whenever needed
2. comment things in groups of actions e.g. "querying nodes... creating objects..." and this helps make it more organised!
3. self-implemented random color generation (see self-implementation) on line 2

   ```javascript
   const colorOn = () => {
     const randomNumber = () => {
       return Math.floor(255 * Math.random());
     };
     const r = randomNumber();
     const g = randomNumber();
     const b = randomNumber();
     const a = Math.random();
     // console.log("color generated: " + )
     return "rgba(" + r + "," + g + "," + b + "," + 1 + ")";
   };
   ```

## Stuff I still don't know how to do

- how to reset and change the dimensions of the drawing space?? the hint said button tagging w javascript but... :( maybe create a seperate reset script that calls the original script?
  - i tried using a main function and calling that main function again but the already created DOM elements still remain, and I can only create a new box below the already existing box. (see commented out code)
