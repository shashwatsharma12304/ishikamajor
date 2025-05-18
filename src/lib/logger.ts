/**
 * Enhanced logging utility for better debugging
 */

// Available log levels
type LogLevel = 'debug' | 'info' | 'warn' | 'error';

// Color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m',
};

// Timestamp formatter
const getTimestamp = (): string => {
  return new Date().toISOString();
};

// Main logger function
const log = (level: LogLevel, message: string, data?: any): void => {
  const timestamp = getTimestamp();
  
  // Format based on log level
  let colorCode = '';
  let emoji = '';
  
  switch (level) {
    case 'debug':
      colorCode = colors.dim + colors.cyan;
      emoji = '🔍';
      break;
    case 'info':
      colorCode = colors.blue;
      emoji = 'ℹ️';
      break;
    case 'warn':
      colorCode = colors.yellow;
      emoji = '⚠️';
      break;
    case 'error':
      colorCode = colors.red;
      emoji = '❌';
      break;
  }
  
  // Log to console with color and structure
  const prefix = `${colorCode}${emoji} [${timestamp}] [${level.toUpperCase()}]${colors.reset}`;
  
  console.log(`${prefix} ${message}`);
  
  // Log additional data if provided
  if (data !== undefined) {
    console.log(`${colorCode}${' '.repeat(emoji.length + 3)}${colors.dim}${JSON.stringify(data, null, 2)}${colors.reset}`);
  }
};

// Export individual log level functions
export const logger = {
  debug: (message: string, data?: any) => log('debug', message, data),
  info: (message: string, data?: any) => log('info', message, data),
  warn: (message: string, data?: any) => log('warn', message, data),
  error: (message: string, data?: any) => log('error', message, data),
  
  // Api specific logging
  apiRequest: (method: string, url: string, headers?: any) => {
    log('info', `API Request: ${method} ${url}`, headers);
  },
  
  apiResponse: (url: string, status: number, data?: any) => {
    if (status >= 200 && status < 300) {
      log('info', `API Response: ${url} (${status})`, data);
    } else {
      log('error', `API Response: ${url} (${status})`, data);
    }
  },
  
  apiError: (url: string, error: any) => {
    log('error', `API Error: ${url}`, error);
  }
};

export default logger; 