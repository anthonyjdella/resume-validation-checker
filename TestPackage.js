var fs = require("fs");


// Run this with `node TestPackage.json`

// 1st. Select which schema you want to test, custom or default 
    // Using my custom schema
    var resumeSchema = require("anthonyjdella-resume-schema");

    // Using default schema
    // var resumeSchema = require("resume-schema");

// 2nd. Select with resume you want to test, custom or default, valid or invalid
    // Valid resume uing default schema.
    var resumeObject = JSON.parse(fs.readFileSync("resume.json", "utf8"));
    // Invalid resume using default schema.
    var resumeObject = JSON.parse(fs.readFileSync("resume-invalid.json", "utf8"));


    // Valid resume using custom schema.
    var resumeObject = JSON.parse(fs.readFileSync("anthonyResume.json", "utf8"));
    // Invalid resume using custom schema.
    var resumeObject = JSON.parse(fs.readFileSync("anthonyResume.json", "utf8"));


console.log("About to validate")


resumeSchema.validate(
    resumeObject,
    function (err, report) {
        if (err) {
            console.error("The resume was invalid:", err);
        return;
        }
        console.log("Resume validated successfully:", report);
    },
    function (err) {
        console.error("The resume was invalid:", err);
    }
);

console.log("Finished validating")
