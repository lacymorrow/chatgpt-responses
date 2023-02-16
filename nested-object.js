// Given the following data structure:
// const fileObject = {
//     name,
//     filepath,
//     filename
// }

// This is a JS function which takes an array of `fileObject`s as input, and returns a nested json object of the input `fileObject`s using the `filename` property (string) to create nesting, where the separator is a slash, and strings may be nested multiply.
// For example, if these were the fileObject.filename of these files:
// - "A/file1.html" & "A/file2.hmtl", "A/B/file3.HTML", "A/B/C/file4.html" and "D/B/file4.html", the output would be:
// {
// 	"A": {
// 		"file1.html": fileObject,
// 		"file2.html": fileObject,
// 		"B": {
// 			"file3.html": fileObject,
// 			"C": {
// 				"file4.html": fileObject
// 			}
// 		}
// 	},
// 	"D/B": {
// 		"file4.html": fileObject
// 	}
// }


// This is the function:
function nestFiles(files) {
    return files.reduce((acc, file) => {
        const path = file.filename.split('/');
        const filename = path.pop();
        const current = path.reduce((acc, path) => {
        if (!acc[path]) {
            acc[path] = {};
        }
        return acc[path];
        }, acc);
        current[filename] = file;
        return acc;
    }, {});
    }

// This is the test data:
const fileObject = {
    name: 'file1',
    filepath: 'A/file1.html',
    filename: 'A/file1.html'
    };
const fileObject2 = {
    name: 'file2',
    filepath: 'A/file2.html',
    filename: 'A/file2.html'
    };
const fileObject3 = {
    name: 'file3',
    filepath: 'A/B/file3.html',
    filename: 'A/B/file3.html'
    };
const fileObject4 = {
    name: 'file4',
    filepath: 'A/B/C/file4.html',
    filename: 'A/B/C/file4.html'
    };
const fileObject5 = {
    name: 'file5',
    filepath: 'D/B/file5.html',
    filename: 'D/B/file5.html'
    };
const fileObject6 = {
    name: 'file6',
    filepath: 'D/B/file6.html',
    filename: 'D/B/file6.html'
    };
const fileObject7 = {
    name: 'file7',
    filepath: 'D/B/file7.html',
    filename: 'D/B/file7.html'
    };
const fileObject8 = {
    name: 'file8',
    filepath: 'D/B/file8.html',
    filename: 'D/B/file8.html'
    };
const fileObject9 = {
    name: 'file9',
    filepath: 'E/B/file9.html',
    filename: 'E/B/file9.html'
    };

const input = [fileObject, fileObject2, fileObject3, fileObject4, fileObject5, fileObject6, fileObject7, fileObject8, fileObject9];
