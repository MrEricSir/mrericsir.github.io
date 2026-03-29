#!/bin/bash
if [ -f .jekyll.pid ]; then
  kill "$(cat .jekyll.pid)" 2>/dev/null && echo "Jekyll server stopped" || echo "Server not running"
  rm -f .jekyll.pid
else
  echo "No .jekyll.pid file found"
fi
