module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger: Time function processed a request.");

  const datetime = new Date();

  if (req.query.format && req.query.format === "string") {
    if (req.query.locale) {
      context.log.info(
        `outputting a string in a format of "${req.query.locale}"`
      );
      context.res = {
        body: `${datetime.toLocaleTimeString(req.query.locale)}`
      };
    } else {
      context.log.info("outputting a string");
      context.res = {
        body: `${datetime}`
      };
    }
  } else {
    context.log.info("outputting an object");
    context.res = {
      body: datetime
    };
  }
};
