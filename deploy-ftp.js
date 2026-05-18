import { Client } from "basic-ftp";
import dotenv from "dotenv";

dotenv.config();

const host = process.env.FTP_HOST;
const user = process.env.FTP_USER;
const password = process.env.FTP_PASSWORD;
// Hardcoded default for the site's document root. Keep this here as a
// sensible default while allowing override via the `FTP_REMOTE_PATH` env var.
const DEFAULT_REMOTE_PATH = "/domains/goodmarksclasses.com/public_html";
const remotePath = process.env.FTP_REMOTE_PATH || DEFAULT_REMOTE_PATH;
const localDir = process.env.FTP_LOCAL_DIR || "dist";
const secure = (process.env.FTP_SECURE || "true").toLowerCase() === "true";

if (!host || !user || !password) {
  console.error("Missing FTP credentials. Set FTP_HOST, FTP_USER, FTP_PASSWORD in .env");
  process.exit(1);
}

const client = new Client();
client.ftp.verbose = true;

async function upload() {
  try {
    await client.access({ host, user, password, secure });
    await client.ensureDir(remotePath);
    // remove existing files in the remote directory before uploading
    await client.clearWorkingDir();

    console.log(`Uploading ${localDir} -> ${remotePath} ...`);
    await client.uploadFromDir(localDir, remotePath);
    console.log("Upload successful");
  } catch (err) {
    console.error("Upload failed:", err);
    process.exitCode = 1;
  } finally {
    client.close();
  }
}

upload();
