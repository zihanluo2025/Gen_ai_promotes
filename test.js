/**
 * Log Parser (ES6+)
 * Format: "YYYY-MM-DD HH:MM:SS LEVEL Message"
 *
 * Features:
 * 1) Parse a single log line -> { timestamp, level, message }
 * 2) Parse multiple lines -> array of objects
 * 3) Count occurrences per level (INFO, ERROR, WARNING, DEBUG)
 * 4) Demonstrate with sample data + expected output
 */

// -----------------------------
// 1) Parse one line
// -----------------------------
const parseLogLine = (line) => {
    // Trim to avoid issues with leading/trailing spaces
    const trimmed = line.trim();
  
    // Regex groups:
    // 1) date+time: YYYY-MM-DD HH:MM:SS
    // 2) level: INFO|ERROR|WARNING|DEBUG (or any word if you prefer \w+)
    // 3) message: rest of line
    const match = trimmed.match(
      /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})\s+([A-Z]+)\s+(.*)$/
    );
  
    // If a line doesn't match, return null (caller can decide what to do)
    if (!match) return null;
  
    const [, timestamp, level, message] = match;
  
    return { timestamp, level, message };
  };
  
  // -----------------------------
  // 2) Parse multiple lines
  // -----------------------------
  const parseLogLines = (text) => {
    // Split by newline, parse each line, and keep only valid parses
    return text
      .split("\n")
      .map(parseLogLine)
      .filter((obj) => obj !== null);
  };
  
  // -----------------------------
  // 3) Count log levels
  // -----------------------------
  const countLogLevels = (entries) => {
    // Initialize known levels at 0 so output is stable even if missing in data
    const counts = { INFO: 0, ERROR: 0, WARNING: 0, DEBUG: 0 };
  
    for (const { level } of entries) {
      // Only count known levels; ignore unknown ones (or track them if you want)
      if (counts[level] !== undefined) counts[level] += 1;
    }
  
    return counts;
  };
  
  // -----------------------------
  // 4) Sample log data (demo)
  // -----------------------------
  const sampleLogs = `2026-03-01 09:00:00 INFO App started
  2026-03-01 09:00:02 DEBUG Loading configuration
  2026-03-01 09:00:05 WARNING Cache miss for key=user:123
  2026-03-01 09:00:09 ERROR Failed to connect to database
  2026-03-01 09:00:12 INFO Retrying connection
  2026-03-01 09:00:15 INFO Connected successfully
  2026-03-01 09:00:18 DEBUG Request received: GET /health`;
  
  // -----------------------------
  // 5) Run demo
  // -----------------------------
  const parsedEntries = parseLogLines(sampleLogs);
  const levelCounts = countLogLevels(parsedEntries);
  
  // Print results (nice and readable)
  console.log("Parsed entries:");
  console.log(JSON.stringify(parsedEntries, null, 2));
  
  console.log("\nLog level counts:");
  console.log(levelCounts);
  
  // Optional: pretty summary using template literals
  console.log(
    `\nSummary: INFO=${levelCounts.INFO}, WARNING=${levelCounts.WARNING}, ERROR=${levelCounts.ERROR}, DEBUG=${levelCounts.DEBUG}`
  );
  
  /**
   * -----------------------------
   * Expected output (sample)
   * -----------------------------
   *
   * Parsed entries:
   * [
   *   { "timestamp": "2026-03-01 09:00:00", "level": "INFO", "message": "App started" },
   *   { "timestamp": "2026-03-01 09:00:02", "level": "DEBUG", "message": "Loading configuration" },
   *   { "timestamp": "2026-03-01 09:00:05", "level": "WARNING", "message": "Cache miss for key=user:123" },
   *   { "timestamp": "2026-03-01 09:00:09", "level": "ERROR", "message": "Failed to connect to database" },
   *   { "timestamp": "2026-03-01 09:00:12", "level": "INFO", "message": "Retrying connection" },
   *   { "timestamp": "2026-03-01 09:00:15", "level": "INFO", "message": "Connected successfully" },
   *   { "timestamp": "2026-03-01 09:00:18", "level": "DEBUG", "message": "Request received: GET /health" }
   * ]
   *
   * Log level counts:
   * { INFO: 3, ERROR: 1, WARNING: 1, DEBUG: 2 }
   *
   * Summary: INFO=3, WARNING=1, ERROR=1, DEBUG=2
   */