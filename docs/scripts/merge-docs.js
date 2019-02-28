"use strict";

const jetpack = require("fs-jetpack");

async function mergeDocs() {
    if (jetpack.exists("docs_output_tutorials") !== "dir") return false;
    if (jetpack.exists("docs_output_api") !== "dir") return false;
    await jetpack.removeAsync("docs_output");
    await jetpack.copyAsync("docs", "docs_output", {
        matching: ['!scripts/**/*', '!scripts']
    });
    await Promise.all([
        jetpack.moveAsync("docs_output_tutorials", "docs_output/tutorials"),
        jetpack.moveAsync("docs_output_api", "docs_output/api")
    ]);
}

mergeDocs();