import { rmSync } from "node:fs";
import { join } from "node:path";

const nextDirectory = join(process.cwd(), ".next");

rmSync(nextDirectory, { recursive: true, force: true });
console.log("Cache Next.js nettoye: .next");
