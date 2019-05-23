#!/usr/bin/env bash
chmod +x ./dev.sh | bash

if lsof -t -i :8080
then
 python -m SimpleHTTPServer 8081
else
 python -m SimpleHTTPServer 8080
fi 

