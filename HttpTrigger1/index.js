module.exports = async function(context, req) {
  context.log("JavaScript HTTP trigger function processed a request.");

  context.res = {
    //body: `${new Date()}` // format as string just for prettier output in browser
    body: ${new Date()} // format as date object for easier API consumption
  };
};
