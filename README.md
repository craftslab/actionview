# actionview

[![Docker](https://img.shields.io/docker/pulls/craftslab/actionview)](https://hub.docker.com/r/craftslab/actionview)
[![License](https://img.shields.io/github/license/craftslab/actionview.svg?color=brightgreen)](https://github.com/craftslab/actionview/blob/master/LICENSE)
[![Tag](https://img.shields.io/github/tag/craftslab/actionview.svg?color=brightgreen)](https://github.com/craftslab/actionview/tags)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### Build Docker
```
docker build --no-cache -f Dockerfile -t $NAME:$TAG .
docker run -d -p 9091:80 $NAME:$TAG
```
