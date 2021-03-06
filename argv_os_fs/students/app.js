/*
    To start a new nodejs project:
    1- in terminal `npm init` follow....
*/
// importint os (operating system) library (Auto installed)
// const os = require('os')

// console.log(os.cpus())
// console.log(os.arch())
// console.log(os.freemem())
// console.log("Node project is running....")
// console.log(process.argv.slice(2))

// File System Library...
const fs = require('fs');
console.log(fs)
// 1-create file
// 2-write to file
// 3- read from file
// 4- delete file
// 5- create a directory (folder)
// 6- delete folder
// 7- rename 
console.clear()
/////////////////////////////// create a new folder (directory)
// check if directory exist

// fs.existsSync('path') ==> true if exist or false if not
let exist = fs.existsSync("./students/bla")
console.log(exist)
if(!exist){
    fs.mkdir("bla",error=>{
        if (error){
            console.log("mission faild successfuly")
            console.log(error)
        }else{
           console.log("Directory 'bla' was created successfuly") 
        }
    })
}else{
    console.log("The directory 'bla' is already exist!")
}
////////////////////////////////////// rename directory
// check first if directory exist
// fs.rename('oldPath', 'newPath', error=>{})
if(exist){
    fs.rename('./students/bla', './students/newName', (error) => {
      if (error) throw error;
      console.log('Folder renamed successfuly');
    });
}
///////////////////////////////////////// remove directory
// check if exist
exist = fs.existsSync('./students/test/t1');
if(exist){
    fs.rm('./students/test/t1', { recursive: true, force: true }, (error) => {
      if (error) throw error;
      console.log('folder deleted');
    });
}
console.clear()
//////////////////////////////////create a file /////
// check if exist
exist = fs.existsSync('./students/data.txt');
// console.log(exist)
// fs.writeFile('name of the file', "data STRING", error)
// fs.appendFile('name of the file', "data STRING", error)
if(true){
    fs.appendFile("./data.txt", "\nnew line", error=>{
        if(error) throw error
        console.log("file created")
    })
}
/////////// to rename file use fs.rename()
////////// to remove use fs.rm()

// fs.rm("./data1.txt", error=>{
//     if(error)throw error
//     console.log("file remover")
// })

// fs.rename("./students/data.txt", "data1.txt", error=>{
//     if(error)throw error
//     console.log("file renamed")
// })

/////////////// read file
console.clear()
fs.readFile('./students/file.csv', (error, data) => {
  if (error) throw error;
  console.log(data.toString());
  let content = data.toString();
  console.log(content.split('\n'));
  content.split('\n').forEach((line) => {
    line.split(',').forEach((word) => {
      console.log(word);
    });
  });
});
