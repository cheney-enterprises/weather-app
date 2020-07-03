const util = require("util");

const log = (obj, a) => {
  if (a && typeof a == "object") {
    return console.dir(obj, a);
  } else if (!a) {
    return console.dir(obj, { showHidden: true, depth: null });
  } else {
    return console.error(
      chalk.red.bold(
        new Error(
          chalk.green(
            'please ensure that if you include an option, it is of type "OBJECT", containing at least one of the following 3 "BOOLEAN" options: showHidden, depth, showColors - the default with NO ARGUMENTS is { showHidden: true, depth: null } where null shows all depthes there are to show, with no limit.',
          ),
        ),
      ),
    );
  }
};

module.exports = log;
