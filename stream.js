const client = require("./client");

async function init(){
    const result = await client.xadd('temp', 't', 2);

    console.log(result);
}

init();