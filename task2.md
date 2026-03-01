# Add error pattern detection
Your manager is impressed with the basic log parser, but now asks you to enhance it to detect critical error patterns. Specifically, you need to:

- Identify repeated errors (same error occurring multiple times)
- Detect error spikes (multiple errors in a short time window)
- Generate an alert report showing critical issues that need immediate attention
This enhancement will help the DevOps team proactively address system issues before they escalate.


# solution

```bash
Enhance the existing log parser code to add error pattern detection features:

1. Add a function to detect repeated errors (same error message appearing multiple times)
2. Add a function to detect error spikes (3 or more errors within a 5-minute window)
3. Create an alert report showing:
   - Top 3 most frequent errors
   - Any detected error spikes with their time windows
4. Use the existing code structure and add these new features
5. Update the main execution to demonstrate the new features
6. Keep the code beginner-friendly with clear comments
7. Use modern JavaScript (ES6+) features
```