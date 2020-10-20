const Pipelines = [
  {
    name: 'C/C++ 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:00'
  },
  {
    name: 'C# 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:01'
  },
  {
    name: 'Dart 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:02'
  },
  {
    name: 'Go 2020-10-20',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:03'
  },
  {
    name: 'Java 2020-10-20',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:04'
  },
  {
    name: 'JavaScript 2020-10-20',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:05'
  },
  {
    name: 'Kotlin 2020-10-20',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:06'
  },
  {
    name: 'PHP 2020-10-20',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:07'
  },
  {
    name: 'Python 2020-10-20',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:08'
  },
  {
    name: 'Ruby 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:09'
  },
  {
    name: 'Rust 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:10'
  },
  {
    name: 'Swift 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:11'
  },
  {
    name: 'TypeScript 2020-10-20',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:12'
  },
]

const getPipeline = limit => {
  return limit ? Pipelines.slice(0, limit) : Pipelines
}

export { Pipelines, getPipeline }
