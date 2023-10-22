const { spawn } = require("child_process");
const express = require("express");
const app = express();
const path = require('path');
const logger = require("./utils/log.js");

const PORT = process.env.PORT || 8888;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  logger.loader(`Bot is running on port: ${PORT}`);
  startBot(0);
});

async function startBot(index) {
  logger(`Starting child process ${index}`, "[ Starting ]");
  const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "main.js"], {
    cwd: __dirname,
    stdio: "inherit",
    shell: true,
    env: {
      ...process.env,
      CHILD_INDEX: index,
    },
  });

  child.on("close", async (codeExit) => {
    if (codeExit !== 0 || global.countRestart && global.countRestart < 5) {
      await startBot(index);
      return;
    }
    return;
  });

  child.on("error", (error) => {
    logger(`An error occurred: ${JSON.stringify(error)}`, "[ Starting ]");
  });
}

// Auto Reply Settings
const autoReplySettings = {
  enabled: true,
  message: "OWNER: Ron Zedric Laurente",
};

// Auto reply to bot and console
console.log(autoReplySettings.message);
