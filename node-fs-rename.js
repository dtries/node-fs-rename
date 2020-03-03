/* INSTRUCTIONS TO RUN DEMO & EXPECTED RESULT:
    Delete any existing text files. Next create a new text file by typing the following in the CLI of the terminal: touch fileWithOldName.txt
    Next run the code by entering the following in the CLI of the terminal: node node-fs-rename
    You will see that, as long as the file with the name in the first argument of the fs.rename function exists, it will rename that file to the name given is the second argument. If the file name in the first argument does not exist, an error will be thrown and displayed in the terminal.
*/


const fs = require('fs'); /* constant created that uses the built-in file system module within node.js */

fs.rename('fileWithOldName.txt', 'fileWithNewName.txt', function (err) {
    if (err) throw err; /* When error occurs print error message to terminal */
    console.log('File renamed'); /* As long as there is no error, a message indicated the file has be renamed is printed to the terminal */
});