const fs = require('fs');

const data = fs.readFileSync('file.txt');
console.log("" + data );

fs.writeFile('file.txt', 'Hello World! ',"utf-8", (err) => {
   
    console.log('File written successfully!');
});

fs.appendFile('file.txt',"class is going on","utf-8",(err)=>{
    console.log('File appended successfully!');
}
);




fs.mkdir('dir2', (err) => {
    if(err) {
        console.log(err);
    }
    console.log('Directory created successfully!');
}
);

const p = '/home/ruthwik-chikoti/Documents/trem-4/DEV/NODE/node_1/file.txt';
const path = require('path');
const dirname = path.dirname(p);
const extention = path.extname(p);
console.log(dirname);
console.log(extention);

fs.copyFile('file.txt', 'dir2/file.txt', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('File copied successfully!');
});

