const Pipelines = [
  {
    name: 'C/C++',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:00'
  },
  {
    name: 'C#',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:01'
  },
  {
    name: 'Dart',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:02'
  },
  {
    name: 'Go',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:03'
  },
  {
    name: 'Java',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:04'
  },
  {
    name: 'JavaScript',
    status: 'pass',
    stage: 'test',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:05'
  },
  {
    name: 'Kotlin',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:06'
  },
  {
    name: 'PHP',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:07'
  },
  {
    name: 'Python',
    status: 'fail',
    stage: 'deploy',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:08'
  },
  {
    name: 'Ruby',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:09'
  },
  {
    name: 'Rust',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:10'
  },
  {
    name: 'Swift',
    status: 'running',
    stage: 'build',
    owner: 'name@example.com',
    time: '2020-10-20 00:00:11'
  },
  {
    name: 'TypeScript',
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
