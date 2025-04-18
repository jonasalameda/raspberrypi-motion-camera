import socket
import smtplib
from email.MMEMultipart import MIMEMultipart
from email.MIMEText import MIMEText

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
print(s.getsockname()[])
x = s.getsockname()[0]
s.close()

# put your address which should be your email address
fromaddr = ""
# put the receiving address
toaddr = ""

msg = MIMEMultiplart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "IP Address"

body = xmsg.attach(MIMEText(body, 'plain'))
server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()
server.login(fromaddr, "password")
server.quit()

sudo nano /etc/rc.local
while ! /sbin/ifconfig wlan0 | grep -q 'inet addr:[0-9]';
do sleep 3
done

_IP = $(hostname -l) || true
if ["$_IP"]; then
printf "my ip address is %s\n" "$_IP"
python /home/jon/Background/emailip.py &
fi
exit 0
