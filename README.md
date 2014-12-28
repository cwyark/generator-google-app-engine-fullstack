# Generator-google-app-engine-fullstack

*version: v0.0.3*

>It's a [Yeoman](http://yeoman.io) generator to help you to rapidly build a Google App Engine based on Python Lang. 

## Getting Started

### How to install Yeoman?

First of all, please install [npm](https://npmjs.org), this tool is a Node Packaging tool. If you have installed NodeJS, there should have this tool in your PC.

Then there only one step to install Yeoman.

```bash
npm install -g yo
```

### How to install generator-google-app-engine-fullstack?

Currently, the only way to install generator-google-app-engine-fullstack is from github, run:

```bash
git clone https://github.com/cwyark/generator-google-app-engine-fullstack.git 

cd generator-google-app-engine-fullstack

npm link
```

Finally, initiate the generator:

```bash
yo google-app-engine-fullstack
```

To initialize the gae server...

```bash
grunt install
```

This command will install the python libraries from the PyPi by using pip.

### How to run dev_appserver.py ?

For the original way, you can directly use

```
dev_appserver.py .

```
Now you can activate gae server from grunt

```bash
grunt server
```

The dev_appserver.py which is wrapped in Grunt tasks.


## License

MIT
