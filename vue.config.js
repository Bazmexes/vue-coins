module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "./src/scss/main.scss"`,
            },
        },
    },
};