import * as path from 'path';

export = {
  'type': 'better-sqlite3',
  'database': path.join(__dirname, 'data', 'database.db'),
  'synchronize': true,
  'logging': false,
  'entities': [
    'src/entity/**/*.ts'
  ],
  'migrations': [
    'src/migration/**/*.ts'
  ],
  'subscribers': [
    'src/subscriber/**/*.ts'
  ]
}
