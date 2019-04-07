module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger: Time function processed a request.");

  const datetime = new Date();

  if (req.query.format && req.query.format === "string") {
    context.log.info("outputting a string");
    context.res = {
      body: `${datetime}`
    };
  } else {
    context.log.info("outputting an object");
    context.res = {
      body: datetime
    };
  }
};
