#!/bin/bash

echo "stop app test"
port_to_stop=3000

pid=$(lsof -ti :$port_to_stop)

if [ -n "$pid" ]; then
  echo "Stopping Node.js process using port $port_to_stop (PID: $pid)"
  kill -9 $pid
else
  echo "No Node.js process found using port $port_to_stop."
fi