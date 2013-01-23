```
                                      __                 ___      
                                     /\ \__             /\_ \     
  ____             ___    ___     ___\ \ ,_\  _ __   ___\//\ \    
 /',__\  _______  /'___\ / __`\ /' _ `\ \ \/ /\`'__\/ __`\\ \ \   
/\__, `\/\______\/\ \__//\ \L\ \/\ \/\ \ \ \_\ \ \//\ \L\ \\_\ \_ 
\/\____/\/______/\ \____\ \____/\ \_\ \_\ \__\\ \_\\ \____//\____\
 \/___/           \/____/\/___/  \/_/\/_/\/__/ \/_/ \/___/ \/____/

```
This is a dumb name.

## What
Controls for services. The idea is to allow a deploy tool to start, stop, restart and install dependencies for services via remote ssh commands.

## Why
Mostly for scaffolding new projects since a lot of controlling a service is boilerplate. Usually a bit of customization happens, but the scripts should also work as is.

## How
First, a couple major assumptions these scripts make:  
* they live in <your-project>/bin  
* a source-able shell script containing the service's environment variables lives in <your-project>/variables  
* you use [mon(1)](https://github.com/visionmedia/mon) to daemonize and monitor your services  
* you're using bash

The first thing any of the scripts do is attempt to source the current user's profile in the following order: .bash_profile, .bash_login, .profile (if you want .bashrc, you should source that from whichever of these files you use). 

Next they try to source service specific information from a file called 'variables' one level up from the directory in which the scripts themselves reside. By default the start script requires $NAME and $RUN to be defined - the variables file is a good place to do that.

After the required environmental information is collected, the scripts are pretty much faithful to their names. Exit codes try to be helpful where possible, e.g. `bin/status` exits non-zero when the service is not running, etc.

## Usage
`bin/install`
`bin/status`
`bin/start`
`bin/stop`
`bin/restart`

## Install
```bash
cd <your-project>
git clone https://github.com/jessetane/s-control
mv s-control bin
rm bin/.gitignore bin/*.md
```

## License
MIT
