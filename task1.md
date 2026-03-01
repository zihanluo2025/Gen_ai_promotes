# Task 1: Create basic log parser


As a software developer, you've been asked to build a tool that can parse application log files. Your application generates logs in the following format:

```bash
2025-10-09 10:15:23 INFO User login successful - user_id: 12345
2025-10-09 10:16:45 ERROR Database connection failed - error: timeout
2025-10-09 10:17:02 WARNING High memory usage detected - 85%
2025-10-09 10:18:30 INFO API request completed - endpoint: /api/users
```

# solution
```bash 
Create a JavaScript program to parse application log files. The logs have this format:
"YYYY-MM-DD HH:MM:SS LEVEL Message"

Requirements:
- Create a function to parse individual log lines into an object with properties: timestamp, level, message
- Create a function to parse multiple log lines and return an array of objects
- Count the occurrence of each log level (INFO, ERROR, WARNING, DEBUG)
- Include sample log data to demonstrate the functionality
- Use modern JavaScript (ES6+) with const/let, arrow functions, and template literals
- Provide clear comments explaining each section
- Show the expected output with sample data
```

