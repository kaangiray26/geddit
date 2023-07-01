#!/usr/bin/sh
set -e

# Minify
./node_modules/.bin/terser geddit.js --compress --mangle --output=geddit.min.js

# Push to git
printf "\nPushing to git...\n"
git add -A
git commit -m "deploy via script"
git push