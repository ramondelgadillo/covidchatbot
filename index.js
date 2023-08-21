const Request = require("request-promise");
const numeral = require("numeral");

// Define the main function for handling intents
const dispatcher = async (event) => {
  // Create a response object structure
  let response = {
    sessionAttributes: event.sessionAttributes,
    dialogAction: {
      type: "Close",
      fulfillmentState: "",
      message: {
        contentType: "PlainText",
        content: "",
      },
    },
  };

  // Switch case based on the intent received
  switch (event.currentIntent.name) {
    case "CovidTracker":
      try {
        // Construct URL for COVID data based on the provided country
        let url =
          "https://disease.sh/v3/covid-19/countries/" +
          event.currentIntent.slots.country;
        console.log("endpoint: " + url);

        // Fetch COVID data from the API
        let result = await Request(url, { json: true });

        console.log(result.todayCases);
        // Prepare response message with COVID data
        response.dialogAction.fulfillmentState = "Fulfilled";
        response.dialogAction.message.content =
          "Today (" +
          new Date().toISOString().slice(0, 10) +
          ") Cases: " +
          numeral(result.todayCases).format("0.0a") +
          ",\n" +
          "Recovered: " +
          numeral(result.todayRecovered).format("0.0a") +
          ",\n" +
          "Deaths: " +
          numeral(result.todayDeaths).format("0.0a") +
          "\n" +
          "Total Cases (till date): " +
          numeral(result.cases).format("0.0a") +
          ",\n" +
          "Recovered: " +
          numeral(result.recovered).format("0.0a") +
          ",\n" +
          "Deaths: " +
          numeral(result.deaths).format("0.0a");
      } catch {
        // Handle errors when data retrieval fails
        response.dialogAction.fulfillmentState = "Failed";
        response.dialogAction.message.content =
          "Sorry, no data found for provided country. Please try again with correct country name!";
      }
      break;
    case "Goodbye":
      // Prepare goodbye message
      response.dialogAction.fulfilmentState = "Failed";
      response.dialogAction.message.content =
        "Goodbye, Stay Updated! Stay Protected!";
      break;
    case "AboutBot":
      // Provide information about the bot
      response.dialogAction.fulfilmentState = "Failed";
      response.dialogAction.message.content =
        "This bot helps to stay updated on the latest covid-19 informations.";
      break;
    case "Welcome":
      // Prepare a welcome message
      response.dialogAction.fulfillmentState = "Fulfilled";
      response.dialogAction.message.content =
        "Hello, I'm Dexa, How can I help you today?";
      break;
    default:
      // Handle cases where the intent name doesn't match any known intents
      response.dialogAction.fulfillmentState = "Failed";
      response.dialogAction.message.content = "No data found for this country";
      break;
  }
  // Return the response to the Lex bot
  return response;
};
// Export the main handler function
exports.handler = async (event) => {
  return dispatcher(event);
};
