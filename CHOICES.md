# Major Choices
These are the choices we made during the project regarding the implementation of the motion detection system, the reasoning behind our decisions and alternatives that we also considered.

<br>

## Motion Detection Software
### **Motion** vs **Webcam Zone Trigger**
<div style="text-align: justify">
For the motion detection software, we decided to go with Motion over Webcam Zone Trigger which is another motion detection software. The main reason why we chose to go with Motion is because Webcam Zone Trigger is proprietary and cost money, where as Motion is free. Moreover, there were more resources online about Motion than Webcam Zone Trigger. Also. when we researched about motion detection projects online, a lot of them used Motion, so it was easier for us to understand how to use Motion than Webcam Zone Trigger or other motion detection software.
</div>

<br>

## Home Automation System
### **Home Assistant** vs **OpenHAB**
<div style="text-align: justify">
We chose Home Assistant because it has a more intuitive interface than OpenHAB. OpenHAB is more flexible and is very customizable. But for our project we wanted the system with the most intuitive interface, so that the client doesn’t get lost trying to set up the automations. Setting up an automation in Home Assistant is very simple and can be done in the user interface by simply creating an automation and adding a trigger that will determine when to start the automation, optional conditions that need to be satisfied in order for the automation to begin and the actions to perform when the automation runs. In OpenHAB, automation rules are created using Xtend which is a scripting language with many complex structures and functions. So, we decided to go with Home Assistant because of its user friendliness.
</div>

<br>

## Uploading the Video Online
### **Cloudflare** vs **AWS S3** vs **Firebase** vs **Other**
<div style="text-align: justify">
When thinking about the project we wanted to have a way to save the video online for it to be available to the client no matter where they are so that they are able to see the recording of what was detected by the motion detection system. The reason why we choose Cloudflare Stream as our solution to storing the video online is because when we were seaching online for projects that used a motion detection system we found a project that used Cloudflare Stream to upload their videos, so we decided to go with that. Cloudflare Stream is also way simpler because it handles everything, unlike the other solutions like AWS S3 or Firebase where we would need to manually handle multiple pieces in order to make it work.
</div>

<br>

## Sending email notification
### **SMTP integration** vs **Google Mail integration** vs **Using a python script**
<div style="text-align: justify">
There were multiple ways to send an email, but we decided to use the Home Assistant SMTP integration. The reason we chose this method is because the Home Assistant Google Mail integration requires a lot of set up in the Google Cloud Console in order to get the credentials. So, the SMTP integration was the simplest way to set it up and only requires you to add a few lines to the home assistant configuration yaml file.
</div>