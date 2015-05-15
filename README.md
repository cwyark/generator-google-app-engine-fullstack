# Generator-pygae #

*version: v0.0.3*

>It's a [Yeoman](http://yeoman.io) generator to help you to rapidly build a Google App Engine based on Python language. 

## Getting Started ##

### How to install Yeoman? ###

First of all, please install [npm](https://npmjs.org) whcih is a Node Packaging tool. And alsoyou have to install `Nodejs`.

Then there only one step to install Yeoman.

```bash
npm install -g yo
```

### How to install generator-pygae ###

So far, the only way to install generator-pygae is from github, run:

```bash
git clone https://github.com/cwyark/generator-pygae.git 

cd generator-pygae

npm link
```

Finally, initiate the generator:

```bash
yo google-pygae
```

### How to activate google app engine server ? ###

You can first download and install the [_gcloud_](https://cloud.google.com/sdk/).

Install the requirements for python environment.

```bash
gcloud components update pkg-python app gae-python preview app-engine-python
```

Then, run the server 

```bash
gcloud preview app run app.yaml 
```

## License

MIT
