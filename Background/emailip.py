import socket
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
print(s.getsockname()[0])
x = s.getsockname()[0]
s.close()

# put your address which should be your email address
fromaddr = "motionsystemcamera@gmail.com"
# put the receiving address
toaddr = "" # prompt user to write his address? Get his address somehwere?

msg = MIMEMultipart()
msg['From'] = fromaddr
msg['To'] = toaddr
msg['Subject'] = "Movement detected"

# TODO: add link from home assistant to the video OR the actual video?
body = x + msg.attach(MIMEText('plain'))
server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()
server.login(fromaddr, "MotionPlusSecurity80")
server.sendmail(fromaddr, toaddr, body)
server.quit()
