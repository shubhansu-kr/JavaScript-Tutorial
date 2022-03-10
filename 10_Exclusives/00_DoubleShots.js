const google = 'google';
const fb = null;

// condition google is evaluated and has a truly nature , so the block
// is executed , however the condition is not  completely true;
if (google) {
    console.log("block 1");
}

// Condition fb is evaluated and has a falsy nature, so the block is not 
// executed, however the condition is not completely flase 
if (fb) {
    console.log("block 2");
}

// Situations like authentication has to be either true or false , 
// we cannot rely on truly or falsy value here ;

// (!fb) is not truly , its completely true. So to convert value from 
// incomplete to complete we use two shot of exclamation 
// (!! google) -> True 

// Documentation 

const age = 0;

// bad 
const hasAge = new Boolean(age);

// good 
const hasAge1 = Boolean(age);

// best 
const hasAge2 = !!age;

