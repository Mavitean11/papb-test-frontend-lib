"use strict";

const jetpack = require("fs-jetpack");

async function makeTutorials() {
    await jetpack.dirAsync("docs_output_tutorials", { empty: true });
    // TODO
}

makeTutorials();