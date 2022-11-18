'use strict';

const fs = require("fs");
fs.existsSync(".git") || fs.mkdirSync(".git");
fs.appendFile('.git/config', `
[user]
	name = github-actions[bot]
	email = 41898282+github-actions[bot]@users.noreply.github.com
`, error => {
	if (error) {
		throw error;
	}
});
