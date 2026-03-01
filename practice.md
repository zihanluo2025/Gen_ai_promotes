# Practice challenges
## 1.Add log filtering by date range

Enhance the log parser to filter logs by a date range. Create a function called filterLogsByDateRange(parsedLogs, startDate, endDate) that returns only logs within the specified date range.

Requirements:

- Accept startDate and endDate as strings in format "YYYY-MM-DD"
- Return a new array containing only logs within that date range (inclusive)
- Handle edge cases where the date range contains no logs


## solution

```bash
Create a JavaScript function to filter logs by date range:
- Function name: filterLogsByDateRange
- Parameters: parsedLogs (array), startDate (string), endDate (string)
- Return only logs where the timestamp falls within the date range
- Use modern JavaScript (ES6+) syntax
- Include example usage with sample data
```

## 2: Add log export to CSV 

Add functionality to export analyzed logs to a CSV file. Create a function called exportLogsToCSV(parsedLogs, filename) that writes the parsed logs to a CSV file with columns: timestamp, level, and message.

Requirements:

- Create a CSV file with headers: "Timestamp", "Level", "Message"
- Write all parsed logs to the CSV file
- Include a success message showing the number of logs exported
- Use Node.js fs module



```bash 
Create a JavaScript function to export logs to CSV format using Node.js:
- Function name: exportLogsToCSV
- Use Node.js fs module
- Write headers: Timestamp, Level, Message
- Write each log as a row in the CSV
- Print confirmation message when done
- Include example usage
```