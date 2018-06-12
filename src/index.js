/* eslint-disable */

import "./list.js";

var listParams = {
    title: "Colorfuls",
    items: [
        "https://img1-staging-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/7/large_thumb_55w3c1tkl9suq73gca47ixa0o95oirua.jpg",
        "https://img1-staging-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/6/large_thumb_ylpm8klnrgfe1aiomeg0dlxp8mwofh8w.jpg",
        "https://img1-staging-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/7/large_thumb_55w3c1tkl9suq73gca47ixa0o95oirua.jpg",
        "https://img1-staging-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/6/large_thumb_ylpm8klnrgfe1aiomeg0dlxp8mwofh8w.jpg",
        "https://img1-staging-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/7/large_thumb_55w3c1tkl9suq73gca47ixa0o95oirua.jpg"
    ]
};

var listParams2 = {
    title: "Colorfuls 2",
    items: [
        "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/S1iB-img1.png",
        "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/lH-f-img2.png",
        "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/s1aI-img3.png",
        "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/QSZw-img4.png",
        "https://uploads.codesandbox.io/uploads/user/a6f59428-f0d7-41bd-8f8d-53d125d25caf/C0NN-img5.png"
    ]
};

var list = new UI.List(listParams);
var list2 = new UI.List(listParams2);

list.render(document.body.querySelector("#app"));
list2.render(document.body.querySelector("#app"));
