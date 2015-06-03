/*globals blanket, module */
var options = {
    modulePrefix: "base-ember-cli-addon",
    filter: "//.*base-ember-cli-addon/.*/",
    antifilter: "//.*(tests|template).*/",
    loaderExclusions: [],
    enableCoverage: true,
    cliOptions: {
        reporters: ['json']
    }
};
if (typeof exports === 'undefined') {
    blanket.options(options);
} else {
    module.exports = options;
}
