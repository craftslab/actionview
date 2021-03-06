# actionview

[![Docker](https://img.shields.io/docker/pulls/craftslab/actionview)](https://hub.docker.com/r/craftslab/actionview)
[![License](https://img.shields.io/github/license/craftslab/actionview.svg?color=brightgreen)](https://github.com/craftslab/actionview/blob/master/LICENSE)
[![Tag](https://img.shields.io/github/tag/craftslab/actionview.svg?color=brightgreen)](https://github.com/craftslab/actionview/tags)



## Introduction

*actionview* is a pipeline action view written in JavaScript.

See *[actionfLow](https://github.com/craftslab/actionflow/)* as a server of *actionview*.



## Requirement

- Node.js >= 12.19.0
- Vue.js >= 2.6.12



## Run

```bash
git clone https://github.com/craftslab/actionview.git

cd actionview
npm install
npm run lint
npm run build

npm run serve
```



### Docker

```
git clone https://github.com/craftslab/actionview.git

cd actionview
docker build --no-cache -f Dockerfile -t craftslab/actionview:latest .
docker run -d -p 9091:80 craftslab/actionview:latest
```



## Design

![design](design.svg)



## License

Project License can be found [here](LICENSE).



## Reference

- [Material Icon](https://material.io/resources/icons/?icon=call_merge&style=baseline)
