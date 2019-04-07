module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  const datetime = new Date();
  context.res = {
    body: datetime // format as date object for easier API consumption
  };
};
