#!/bin/bash
TOKEN=`node gen-token.js`
URL='http://localhost:3000/api/authorize?jwt='
echo "$URL$TOKEN"