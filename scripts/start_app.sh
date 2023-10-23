#!/bin/bash

cd /home/ubuntu/rmrn
npm run build
#pm2 --name rmrn start npm -- start