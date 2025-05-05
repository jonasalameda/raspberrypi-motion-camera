# Prerequisites
- Debian Bookworm or above
- Docker installed
- USB webcam connected
- Gmail credentials

First, clone the repository in your desired repository

git clone https://github.com/jonasalameda/raspberrypi-motion-camera.git
cd respberrypi-motion-camera

### For an automatic installation, follow the steps below

Give permission to the files to be executed by you or anyone, if you want more control over the files   
we recommend you use the recommended config, if you just want to execute it use the minimal config

**recommended**: chmod 777 WebcamServer InstallHomeCore HomeAssistantContainer setup.sh
**minimal**: chmod +x WebcamServer InstallHomeCore HomeAssistantContainer setup.sh

In order to automatically setup your camera with home assistant you will need to run these files in order:

1. WebcamServer
-  OPTIONAL, IF YOU HAVE DOCKER IGNORE: SetupDocker 
2. HomeAssistantContainer

After that, everything should be set up and you can access Home assistant from **http://localhost:8123**
And your live server can be found in **http://localhost:8081**
