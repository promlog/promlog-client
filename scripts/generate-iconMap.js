import { promises as fs } from 'fs';
import path from 'path';

const GENERATED_DIR = path.resolve('src/components/Icon/generated');
const OUTPUT_FILE = path.resolve('src/components/Icon/iconMap.ts');

function toIconKey(fileName) {
  const base = fileName.replace(/\.tsx$/, '');
  const withoutSuffix = base.replace(/Icon$/, '');

  return withoutSuffix.charAt(0).toLowerCase() + withoutSuffix.slice(1);
}

async function generateIconMap() {
  const files = await fs.readdir(GENERATED_DIR);

  const tsxFiles = files.filter((file) => file.endsWith('.tsx'));

  if (tsxFiles.length === 0) {
    console.warn('아이콘 파일을 찾을 수 없습니다.', GENERATED_DIR);
    return;
  }

  const importLines = `import * as Icon from './generated/index.tsx'`;

  const iconEntries = tsxFiles
    .filter((file) => file.replace(/\.tsx$/, '') !== 'index')
    .map((file) => {
      const componentName = file.replace(/\.tsx$/, '');
      const key = toIconKey(file);

      return `  ${key}: Icon.${componentName},`;
    })
    .join('\n');

  const date = new Date();
  const fileContent = `// 자동으로 생성된 파일입니다. 수정을 금지합니다.
// 마지막 수정 일시 ${date}

${importLines}

export const sizeMap = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const;

export const iconMap = {
${iconEntries}
} as const;
`;

  await fs.mkdir(path.dirname(OUTPUT_FILE), { recursive: true });
  await fs.writeFile(OUTPUT_FILE, fileContent, 'utf8');

  console.log(`iconMap이 정상적으로 생성되었습니다.`);
}

generateIconMap().catch((err) => {
  console.error(err);
  process.exit(1);
});
