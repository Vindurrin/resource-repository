import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();

function readJsonIfExists(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function parseMajor(versionRange) {
  if (!versionRange) return null;
  const match = versionRange.match(/(\d+)/);
  return match ? Number(match[1]) : null;
}

function assertSingleMajor(pkgJsonPath, packageNames, familyName) {
  const pkgJson = readJsonIfExists(pkgJsonPath);
  if (!pkgJson) {
    console.log(`Skipping ${familyName}: ${pkgJsonPath} not found.`);
    return;
  }

  const allDeps = {
    ...(pkgJson.dependencies || {}),
    ...(pkgJson.devDependencies || {})
  };

  const majors = new Map();

  for (const packageName of packageNames) {
    const version = allDeps[packageName];
    if (!version) continue;
    const major = parseMajor(version);
    if (major === null) continue;

    if (!majors.has(major)) majors.set(major, []);
    majors.get(major).push(`${packageName}@${version}`);
  }

  if (majors.size <= 1) {
    console.log(`OK: ${familyName} versions are aligned in ${pkgJsonPath}.`);
    return;
  }

  console.error(`ERROR: ${familyName} has mixed major versions in ${pkgJsonPath}:`);
  for (const [major, entries] of majors.entries()) {
    console.error(`  major ${major}: ${entries.join(', ')}`);
  }

  process.exitCode = 1;
}

assertSingleMajor(
  path.join(root, 'angular-client', 'package.json'),
  [
    '@angular/animations',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router'
  ],
  'Angular core family'
);

assertSingleMajor(
  path.join(root, 'react-client', 'package.json'),
  ['react', 'react-dom'],
  'React core family'
);

if (process.exitCode) {
  process.exit(process.exitCode);
}
