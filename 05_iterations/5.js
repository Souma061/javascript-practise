const arr = ["js" , "python" , "java" ,"cpp"];

// arr.forEach(function (item) {
//   console.log(item);

// })

// arr.forEach((value) => {
//   console.log(value);


// })

const myArray = [
  {
    language: "javascript",
    fileName: "js"
  },
  {
    language: "python",
    fileName: "py"
  },
  {
    language: "java",
    fileName: "java"
  },
  {
    language: "cpp",
    fileName: "cpp"
  }
]

myArray.forEach((item) =>{
  console.log(item.fileName);

})


myArray.every((item) => {
  console.log(item.language);
  
})
