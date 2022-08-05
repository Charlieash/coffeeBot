Go to command line
write sudo crontab -e
paste below line at the end on file
@reboot sleep 20 && python3 "/home/pi/Documents/User interface/bypassingRobotstudio.py" & sudo php -S 127.0.0.1:8000 -t  "/home/pi/Documents/User interface/"& fg
save file

write sudo nano /etc/xdg/lxsession/LXDE-pi/autostart

lxpanel --profile LXDE-pi
pcmanfm --desktop --profile LXDE-pi

xset s off
xset -dpms
xset s noblank
/usr/bin/chromium-browser --kiosk http://google.com
unclutter -idle 0.1 -root
