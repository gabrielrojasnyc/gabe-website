import { rmSync, existsSync } from 'fs';
import { join } from 'path';

const projectDir = process.cwd();
const nextDir = join(projectDir, '.next');

if (existsSync(nextDir)) {
  rmSync(nextDir, { recursive: true, force: true });
  console.log('Cleared .next build cache');
} else {
  console.log('.next directory does not exist, nothing to clear');
}
