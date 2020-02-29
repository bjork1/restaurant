const express = require("express");
const path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const patron = [];

$(".submit").on("click", function () {
    const newReservation = [
        {
            customerName: $("#reserve_name")
                .val()
                .trim(),
            phoneNumber: $("#reserve_phone")
                .val()
                .trim(),
            customerEmail: $("#reserve_email")
                .val()
                .trim(),
            cutomerID: $("#reserve_uniqueID")
                .val()
                .trim()
        }
    ];

    console.log(newReservation);
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
