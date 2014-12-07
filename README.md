koding-hackathon
================

Koding Hackathon 2014


Installation
================


## Server
on "Server" folder, make sure to have bundle installed and run.
run "bundle install"
then run "rackup -p $PORT -o $IP" on cloud9 or your own port and IP.
If it didn't work, run 'lsof -wni tcp:"$PORT"' then "pkill -9 [process shown]" on cloud9!

## Client
on "client" folder, have nodejs, gulp, bower.
run "npm install && bower install"