#!/bin/bash

echo "start app test"
echo "current dir: $(pwd)"
cd /home/ubuntu/rmrn
echo "current dir: $(pwd)"
npm run build && npm run start