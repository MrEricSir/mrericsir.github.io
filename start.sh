#!/bin/bash
bundle exec jekyll serve &
echo $! > .jekyll.pid
echo "Jekyll server started (PID $(cat .jekyll.pid))"

# Wait for the server to be ready, then open in default browser
while ! curl -s http://127.0.0.1:4000 > /dev/null 2>&1; do
  sleep 0.5
done
open http://127.0.0.1:4000
