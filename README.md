# YouTube Clone built using Nuxt3 x FastAPI, MySQL.

## 今回の内容

- レコメンド機能を実装

  - 視聴履歴からジャンルを絞るやり方
  - いいねやチャンネル登録も含めて複合的に絞るやり方

    →[こちらのリポジトリ](https://github.com/yamu-studio/FastAPI-api/tree/youtube_api)を確認ください

  - 他できそうなも(実装はしてない)

    - スコア化・重みつけさせる

      いいねよりチャンネル登録関連の動画を多く出す...など

    - AI (DB を読み込んだ ChatGPT など) を使って動画を取得する

      視聴履歴や行動ログを AI に読み込ませ、動画そのものを取得したり、SQL クエリを返して動画を取得する

      YouTube は 「強化学習 × ディープラーニング」 を活用した複雑なアルゴリズムを使用している。

    - 協調フィルタリング (Collaborative Filtering)

      ・ユーザー間の類似性: 自分と似た行動をする他のユーザーが見た動画を推薦

      ・アイテム間の類似性: 過去に見た動画と似た動画を推薦

- types を導入
- UI を微調整

### ログイン用パスワード

ex@gmail.com

loginPassword

## 今回使用した言語・フレームワーク等

<img src="https://skillicons.dev/icons?i=nuxt,js,typescript,pug,vue,python,fastapi,mysql,github,vscode,docker" />

## 使用した技術スタック

- Nuxt : https://nuxt.com/
- FastAPI : https://fastapi.tiangolo.com/ja/

## 使用したパッケージ

- pug : テンプレートエンジン
- bulma : CSS フレームワーク
- pinia : 状態管理
- fortawesome : 無料で使えるアイコンフォント集

## UI はこんな感じです

![image](https://github.com/yamu-studio/Nuxt3-YouTube/assets/95989535/f58f0845-5914-4e30-89f9-257abe8ca57c)
![image](https://github.com/yamu-studio/Nuxt3-YouTube/assets/95989535/fc35173d-de94-450e-9249-9ca96457096d)
![image](https://github.com/yamu-studio/Nuxt3-YouTube/assets/95989535/55a31687-b9ce-4542-bcbb-7b5b8212b223)

## API は[こちらのリポジトリ](https://github.com/yamu-studio/FastAPI-api/tree/youtube_api)を確認ください

- FastAPI : RESTful API 用のフレームワーク
- MySQL : データベース
- Docker : 仮想環境用のプラットフォーム
