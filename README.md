```  
        __         __        
 .----.|  |_.----.|  |.-----.
 |  __||   _|   _||  ||__ --|
 |____||____|__|  |__||_____|

```
## What
Control scripts for services.

## Why
Just some scaffolding for controlling a service with [mon(1)](https://github.com/visionmedia/mon).

## How
* the scripts live in a directory `<your-service>/ctrls`
* you provide a sourceable shell script `<your-service>/variables` where at least $NAME and $RUN are defined
* customize the scripts if needed
* run them
	* `ctrls/install`
	* `ctrls/start`
	* `ctrls/status`
	* `ctrls/stop`

## Usage
Clone the repo and check out the example.

## Install
`curl https://raw.github.com/jessetane/ctrls/master/install | sh`

## License
MIT
