# TODO

- [ ] 複数ファイルに分割された各関数・定数を `index.ts` から一括で export する
  - `index.ts` には `export * from './hoge'` という形で記述する
  - 呼び出し側は `import { hoge } from 'utils'` という形で記述する
