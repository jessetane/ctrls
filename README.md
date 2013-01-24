```              
                     __               __ 
  .----.-----.-----.|  |_.----.-----.|  |.-----.
  |  __|  _  |     ||   _|   _|  _  ||  ||__ --|
  |____|_____|__|__||____|__| |_____||__||_____|

```
## What
Controls for services. Install, start, stop, and status check scripts.

## Why
Depending on System V, Upstart or launchd isn't very portable. You can roll your own with something lightweight like [mon(1)](https://github.com/visionmedia/mon) and run almost anywhere without requiring root privileges. If you need your service to respond to system-level events (like boot), that's a [different problem](https://github.com/jessetane/upstarter).

## How
The first thing any of the scripts do is attempt to source the current user's profile in the following order: .bash_profile, .bash_login, .profile (if you want .bashrc, you should source that from whichever of these files you use). Handy for non-interactive, non-login shells.

Next they try to source service specific information from a file called 'variables' one level up from the directory in which the scripts themselves reside. By default the start script requires $NAME and $RUN to be defined - the variables file is a good place to do that.

After the required environmental information is collected, the scripts are pretty much faithful to their names. They use mon to daemonize, terminate, and check status, but you could easily swap this out. Exit codes try to be helpful where possible, e.g. `bin/status` exits non-zero when the service is not running, etc.

## Details
Some assumptions these scripts make:  
* they live in `<your-service>/bin/`
* a source-able shell script containing the service's environment variables lives in `<your-service>/variables`
* [mon(1)](https://github.com/visionmedia/mon) is in your PATH
* probably bash only at this point

Some files the scripts create:
* `log` to to record your program's stdout
* `mpid` to keep track of mon
* `pid` to keep track of the service itself

## Usage
* make a variables file:

```bash
NAME="my-service"  
RUN="python $NAME.py"
```
* run scripts as you see fit:
	* `bin/install`
	* `bin/status`
	* `bin/start`
	* `bin/stop`

## Install
```bash
cd <your-service>
git clone https://github.com/jessetane/controls bin && rm -rf ./bin/*.md bin/.git
```

## License
MIT
