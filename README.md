# frontend_team2019

> 【戦略技術習得施策】フロントエンド開発チームのプロジェクト

## 初回の開発環境の構築

``` bash
$ git clone https://github.com/Shibata0806/frontend_team2019.git

$ cd frontend_team2019

$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/develop
  remotes/origin/first #このブランチにローカルにチェックアウトする
  remotes/origin/master

$ git checkout -b first remotes/origin/first

# 依存関係にあるライブラリなどのインストール
$ npm run install

# ローカルで起動
# http://localhost:3000/
# でアクセスできるようになる
$ npm run dev
```

## 2回目以降のローカル開発環境の起動
``` bash
$ cd frontend_team2019

$ npm run dev
```

## 2回目以降のローカル開発環境の起動
``` bash
# build
$ npm run build

# launch server
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
