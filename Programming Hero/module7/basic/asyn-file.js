const fs = require('fs');

// reading text async

fs.readFile("./texts/read.txt", "utf-8", (err, data) => {
  if (err) {
    throw Error("Error reading text");
  }
  console.log(data)

  // write text async 
  fs.writeFile("./texts/read2.txt", data, "utf-8", (err) => {
    if (err) {
      throw Error("Error writing text");
    }

    console.log("File write successfully")
  })
})