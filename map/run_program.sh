#!/bin/bash
DIR="$(cd -P "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
node data_formatter.js >/dev/null
open WebMap.html