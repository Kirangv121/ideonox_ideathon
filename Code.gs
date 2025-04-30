// Google Apps Script to handle form submissions and write to Google Sheet

function doGet(e) {
  return ContentService.createTextOutput("Form submission script is working. Please use POST method to submit data.");
}

function doPost(e) {
  try {
    // Log the entire event object for debugging
    Logger.log("Event object: " + JSON.stringify(e));
    
    // Get the sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("Form Responses");
    
    // Create the sheet if it doesn't exist
    if (!sheet) {
      sheet = ss.insertSheet("Form Responses");
      // Add headers to the sheet
      sheet.appendRow([
        "Timestamp", 
        "Name", 
        "Email", 
        "Subject", 
        "Message"
      ]);
    }
    
    // Initialize formData as an empty object
    var formData = {};
    
    // Check if e.parameter exists
    if (e && e.parameter) {
      formData = e.parameter;
      Logger.log("URL parameters: " + JSON.stringify(formData));
    }
    
    // If this is a POST request, the data might be in the postData
    if (e && e.postData) {
      try {
        // Try to parse as URL-encoded form data
        var formDataString = e.postData.contents;
        Logger.log("Raw form data: " + formDataString);
        
        if (formDataString) {
          // Parse form data from postData
          var pairs = formDataString.split('&');
          for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            if (pair.length == 2) {
              var key = decodeURIComponent(pair[0]);
              var value = decodeURIComponent(pair[1].replace(/\+/g, ' '));
              formData[key] = value;
            }
          }
          Logger.log("Parsed form data: " + JSON.stringify(formData));
        }
      } catch (parseError) {
        Logger.log("Error parsing form data: " + parseError);
      }
    }
    
    // Extract form fields with fallbacks
    var timestamp = formData.timestamp || new Date().toISOString();
    var name = formData.name || "Not provided";
    var email = formData.email || "Not provided";
    var subject = formData.subject || "Not provided";
    var message = formData.message || "Not provided";
    
    // Log the values we're about to write
    Logger.log("Writing to sheet: timestamp=" + timestamp + ", name=" + name + 
              ", email=" + email + ", subject=" + subject + ", message=" + message);
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      subject,
      message
    ]);
    
    Logger.log("Form data successfully written to sheet");
    
    // Return a simple text response
    return ContentService.createTextOutput("Success! Data has been recorded.");
    
  } catch (error) {
    Logger.log("Error: " + error.toString());
    Logger.log("Error stack: " + error.stack);
    
    // Return error message
    return ContentService.createTextOutput("Error: " + error.toString());
  }
}

// This is needed to handle preflight OPTIONS requests for CORS
function doOptions(e) {
  // Create a text output object
  var output = ContentService.createTextOutput();
  // Return the output object
  return output;
}
