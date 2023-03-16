const functions = require("firebase-functions");

exports.helloWorld = functions.https.onRequest((req, res) => {
    var helloWorld = "Hello World"
    res.status(200).send(
    "<!doctype html>
        <html>
          <head>
                <title>Test Function</title>
            </head>
            <body>
                <p>Hello World</p>
            </body>
        </html>")
    )

});
