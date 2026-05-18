import fs from "node:fs/promises";
import path from "node:path";

const LOG_DIR = path.join(process.cwd(), "data", "toni");

export async function appendToniLog(fileName: string, value: unknown) {
  try {
    await fs.mkdir(LOG_DIR, { recursive: true });
    await fs.appendFile(
      path.join(LOG_DIR, fileName),
      `${JSON.stringify({ at: new Date().toISOString(), ...asObject(value) })}\n`,
      "utf8",
    );
  } catch (error) {
    console.warn("[toni] failed to write local log", error);
  }
}

function asObject(value: unknown): Record<string, unknown> {
  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value as Record<string, unknown>;
  }
  return { value };
}
