const {detect} = require("./src/main");
const {inspect} = require("util");

const a = async () => {
    // args: input, output?, debug? (false default, no logs)
    const res = await detect("samples/nude.jpg", "samples/nude-out.jpg");
    console.log(inspect(res));
};

a();