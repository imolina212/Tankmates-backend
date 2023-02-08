const express = require("express");
const newsletter = express.Router();
const request = require("request");
const bodyParser = require("body-parser");
const path = require("path");

newsletter.use(bodyParser.urlencoded({ extended: true }));

newsletter.use(express.static(path.join(__dirname, "./../public")));

newsletter.post("/", (req, res) => {
	const { firstName, lastName, email } = req.body;

	if (!firstName || !lastName || !email) {
		res.redirect("./../newsletter-signup/fail.html");
		return;
	}

	const data = {
		members: [
			{
				email_address: email,
				status: "subscribed",
				merge_fields: {
					FNAME: firstName,
					LNAME: lastName,
				},
			},
		],
	};

	const postData = JSON.stringify(data);

	const options = {
		url: "https://us10.api.mailchimp.com/3.0/lists/12c4a1272f",
		method: "POST",
		headers: {
			Authorization: "auth 04f88b7e572646cfb23ae142bd15b0c0-us10",
		},
		body: postData,
	};

	request(options, (error, response, body) => {
		if (error) {
			res.redirect("./../newsletter-signup/fail.html");
		} else {
			if (response.statusCode === 200) {
				res.redirect("./../newsletter-signup/success.html");
			} else {
				res.redirect("./../newsletter-signup/fail.html");
			}
		}
	});
});

module.exports = newsletter;
