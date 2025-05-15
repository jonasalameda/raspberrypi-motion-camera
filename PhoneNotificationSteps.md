# Steps for Phone Notifications

## Set up the Docker, Home Assistant and Motion

1 - Use the scripts that are in the folder RasbpiAutomations    ![1746731964446](image/PhoneNotificationSteps/1746731964446.png)

## Setting up your Home Assistant acount

1 - To find ip address type hostname -I in the terminal

![1746984037585](image/PhoneNotificationSteps/1746984037585.png)

2 -  Go to the Home assistant website by http://localhost:8123

![1746984011486](image/PhoneNotificationSteps/1746984011486.png)

3 - Creat an acoount

## Download Home Assistant

1- Download the Home Assistant app on your phone

![1746543982973](image/PhoneNotificationSteps/1746543982973.png)

2- Log in using the account that was previously created on your Raspberry Pi

## Adding a usb camera

1 - Go to the Home assistant website by http://localhost:8123

1.1 - To find ip address type hostname -I in the terminal

![1746984157361](image/PhoneNotificationSteps/1746984157361.png)

2 - Go to settings

3 - Go to Devices & Services
![1746538946030](image/PhoneNotificationSteps/1746538946030.png)

4 - Then go to the Devices section and select at the bottom ADD DEVICE
![1746539222033](image/PhoneNotificationSteps/1746539222033.png)

5 - In the search area write mjpeg then select MJPEG IP Camera
![1746539337636](image/PhoneNotificationSteps/1746539337636.png)

6 - Then add camera name(write name for exmaple camera),  MJPEG URL(Write the following: http://localhost:8081/stream), Still Image URL(Write the following: http://localhost:8081/current)
![1746539376637](image/PhoneNotificationSteps/1746539376637.png)

7 - To check if it is working go to Overview and you will be able to see what the camera sees
![1746539538619](image/PhoneNotificationSteps/1746539538619.png)

## Steps to add a trigger

1 - Go to settings

2 - Then go to automations & scenes
![1746537381693](image/PhoneNotificationSteps/1746537381693.png)

3 - Select create automation that is located at the bottom right corner
![1746540112490](image/PhoneNotificationSteps/1746540112490.png)

4 - Select create new automation
![1746540158177](image/PhoneNotificationSteps/1746540158177.png)

5 - Add trigger
![1746540175520](image/PhoneNotificationSteps/1746540175520.png)

6 - Select When a Webhook payload has been received and add the name

![1747002411064](image/PhoneNotificationSteps/1747002411064.png)

7 - Add action
![1746541579452](image/PhoneNotificationSteps/1746541579452.png)

8. For this action add the following

![1747090308060](image/PhoneNotificationSteps/1747090308060.png)

## Uploading to Cloudflare

1 - Create a Cloudflare account if you already don't have one and login in to cloudflare
![1746541740171](image/PhoneNotificationSteps/1746541740171.png)

2 - Create an API token by going to My Profile which is in the upper right corner

![1747012616154](image/PhoneNotificationSteps/1747012616154.png)

3 - Select create API token and then Create Token

![1747012637359](image/PhoneNotificationSteps/1747012637359.png)

4 - Open terminal and run the following commands

    1. sudo apt-get install nodejs node-npm

    2. sudonpm install --save tus-js-client

5 - Copy the following script that is in the repositry and run the script

![1747059256285](image/PhoneNotificationSteps/1747059256285.png)

**

## Create a to do list for the next part

1 - Go to To do list

2 - Select create list

![1747015564884](image/PhoneNotificationSteps/1747015564884.png)

3 - Call it Video Upload List

![1747015547626](image/PhoneNotificationSteps/1747015547626.png)

![1747015533650](image/PhoneNotificationSteps/1747015533650.png)

## Steps to add the second trigger to watch the video

1 - Go to settng again like the previous time and then select Automation & scenes

2 - Then press on Create Automation and the bottom right corner

3 - Then selct create new Automation

4 -  Like the first time  select When a Webhook payload has been received, but this time the name will be video-uploader

![1747014810856](image/PhoneNotificationSteps/1747014810856.png)

5 - For the action we will need to add two

>  1.For the first action add this

```
service: notify.notify
data:  
	title: Motion Notification  
	message: "{{ trigger.json.message }}"  
	data:  
	actions:  
	- action: URI  
	title: Watch
uri: "{{ trigger.json.link }}"
```


>     2. For the second action add this

```
service: todo.add_item
target:
entity_id: todo.video_upload_list
data:  
item: "{{ trigger.json.link }}"
```
