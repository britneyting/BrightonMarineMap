@echo off
DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
node data_formatter.js
LeafletTrial.html

