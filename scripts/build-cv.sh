#!/usr/bin/env bash
# Regenerates public/daniel-ikoyo-cv.pdf by printing the home page.
# Run `npm run build` first. Needs Google Chrome or Chromium.
set -euo pipefail

PORT=3399
CHROME="$(command -v google-chrome || command -v chromium || command -v chromium-browser)"

# Run the Next binary directly so $! is the server itself and the trap really stops it.
node node_modules/next/dist/bin/next start -p "$PORT" >/dev/null 2>&1 &
SERVER=$!
trap 'kill "$SERVER" 2>/dev/null' EXIT

until curl -s -o /dev/null "http://localhost:$PORT/"; do sleep 0.2; done

"$CHROME" --headless=new --no-sandbox --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/daniel-ikoyo-cv.pdf "http://localhost:$PORT/" 2>/dev/null

echo "Wrote public/daniel-ikoyo-cv.pdf"
