const Pipelines = [
  {
    name: 'C/C++ 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:00'
  },
  {
    name: 'Go 2020-10-20',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:01'
  },
  {
    name: 'Java 2020-10-20',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:02'
  },
  {
    name: 'Node.js 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:03'
  },
  {
    name: 'PHP 2020-10-20',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:04'
  },
  {
    name: 'Python 2020-10-20',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:05'
  },
  {
    name: '.NET Core 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:06'
  }
]

const getPipeline = limit => {
  return limit ? Pipelines.slice(0, limit) : Pipelines
}

export { Pipelines, getPipeline }
