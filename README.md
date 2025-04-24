# raspberrypi-motion-camera
Final project for unix

This project's purpose is to allow you to to build a movement detection system using raspberry pi. When the camera detects movement it will send a notification either by email, app notification or website and include a recording or a picture of what was caught. 

The minimum requirements for the project is 2GB RAM, 32GB storage, 2vCPU, Raspberry pi 3 with Bookworm or above, USB or bluetooth camera. 

For this project we will be using Motion and/or MotionPlus library (MotionPlus is inside the motion library and is an enhanced version of motion), Cloudflare stream, Home Assistant. Alternatives for Cloudflare stream: Google drive, Dropbox, OneDrive, maxCDN or maybe GitHub. 

We also used these 3 websites to do this project:
1.Raspberry Pi 3 Motion Detection Camera With Live Feed : 6 Steps - Instructables
2.Build a Raspberry Pi Webcam Server in Minutes
3.Linux - Home Assistant

We have thought of 3 different scenarios this project can be useful for. The first scenario is for someone who wants to put it in their backyard, or a forest nearby, to monitor if there are any wild animals passing by. The second scenario is for a parent who is worried about their kids and wants to know when they will arrive home from school. The third scenario is for someone who fears their house will be broken in.
