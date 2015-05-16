### Google App Engine in Python lang ###

_appengine server_(gcloud)  and _gulp_ are the two seperate serving daemon

#### Install all the requirements ####

For the first time use this project, you have to install all the npm and bower requirements.

```bash
cd ./assets
npm install;bower install 
```

#### Activate the serving daemon (gcloud and gulp) ####

```bash
cd ./assets
gulp
```

Then open another terminal and activate gcloud serving daemon

```bash
gcloud preview app run app.yaml
```
