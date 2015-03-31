module.exports = (message, times = message.length) => `${message}${"!".repeat(times)}`;
