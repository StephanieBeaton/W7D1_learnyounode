//   These four things are the contract that your module must follow.

//    » Export a single function that takes exactly the arguments described.
//    » Call the callback exactly once with an error or some data as described.
//    » Don't change anything else, like global variables or stdout.
//    » Handle all the errors that may occur and pass them to the callback.

// three arguments: the directory name,
//   the filename extension string and a callback function, in that order. The
//   filename extension argument must be the same as what was passed to your
//   program.

var fs = require('fs');

var path = require('path');

module.exports = function (dirpath, fileExtension, callback){

  var result = [];

  // console.log("inside ex_6_module.js");

  fs.readdir(dirpath, function anotherCallback(err, filenames){

    var result = [];
    // console.log("inside anotherCallback");

    if (!err) {
      for (var i=0; i<filenames.length; i++) {
        if (path.extname(filenames[i]) === "." + fileExtension) {
          result.push(filenames[i]);
        }
      }
    }

    //   The callback function must be called using the idiomatic node(err, data)
    //   convention. This convention stipulates that unless there's an error, the
    //   first argument passed to the callback will be null, and the second will be
    //   your data. In this exercise, the data will be your filtered list of files,
    //   as an Array. If you receive an error, e.g. from your call to
    //   fs.readdir(), the callback must be called with the error, and only the
    //   error, as the first argument.
    // Print the list of files (one file per line) to the console.

     // console.log("err is ", err);
     // console.log("result is", result);

     callback(err, result);
  });


};
