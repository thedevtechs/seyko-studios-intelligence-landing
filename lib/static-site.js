import { readFileSync } from 'node:fs';
import { join } from 'node:path';

const sourcePath = join(process.cwd(), 'lib', 'home.html');
let source;

function getSource() {
  source ??= readFileSync(sourcePath, 'utf8');
  return source;
}

export function getTitle() {
  return getSource().match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? 'Seyko Studios';
}

export function getInlineStyle() {
  return getSource().match(/<style>([\s\S]*?)<\/style>/i)?.[1] ?? '';
}

export function getScreenLabel() {
  const bodyAttrs = getSource().match(/<body([^>]*)>/i)?.[1] ?? '';
  return bodyAttrs.match(/data-screen-label="([^"]*)"/i)?.[1];
}

export function getBodyHtml() {
  const bodyHtml = getSource().match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? '';
  return bodyHtml
    .replace(/\s*<script\s+src=["']assets\/site\.js["']\s*><\/script>\s*$/i, '')
    .trim();
}
