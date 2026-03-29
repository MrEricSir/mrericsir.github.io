#!/bin/bash
bundle exec jekyll serve &
echo $! > .jekyll.pid
echo "Jekyll server started (PID $(cat .jekyll.pid))"
