#!/bin/bash
node -e "require('crypto').randomBytes(48, (ex,buf) => console.log(buf.toString('hex')))"
