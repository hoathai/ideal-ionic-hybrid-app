#!/bin/bash

sudo jade www/index.jade
sudo jade www/templates/*/*.jade
sudo gulp sass

exit
