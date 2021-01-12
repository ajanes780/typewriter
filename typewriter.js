const sentence = "hello there from lighthouse labs";

  let timeOut = 0 

  for (const char of sentence) {  // looping through each letter of each word in sentence 
    setTimeout(() => {
      process.stdout.write(char); // prints to terminal  each letter then has a time out before doing next 
    }, timeOut);
    timeOut += 50; // this is my dela
  }

  setTimeout(() => { // once message has been typed this creates a new line 
    console.log('\n');
  }, timeOut);     




