## Autostart programs
Go to command line <br>
write sudo crontab -e <br>
paste below line at the end on file <br>
>@reboot sleep 20 && python3 "/home/pi/Documents/User interface/bypassingRobotstudio.py" & sudo php -S 127.0.0.1:8000 -t  "/home/pi/Documents/User interface/"& fg <br>

save file <br>

## Open php in full screen
write sudo nano /etc/xdg/lxsession/LXDE-pi/autostart <br>
write below script <br>

> lxpanel --profile LXDE-pi <br>
> pcmanfm --desktop --profile LXDE-pi <br>
> xset s off <br>
> xset -dpms <br>
> xset s noblank <br>
> /usr/bin/chromium-browser --kiosk http://google.com <br>
> unclutter -idle 0.1 -root <br>

Save file <br>
