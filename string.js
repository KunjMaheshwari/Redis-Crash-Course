const client = require("./client");

async function init(){
    //const result = await client.get('msg:5');
    await client.expire("msg:6", 10);
    // await client.set("msg:6", "Hey from Node.js");
    const result = await client.get("msg:6");
    console.log("Result -> "+ result);
}

init();