# Sass&gulpハンズオン

## 本日の流れ
- Sass,gulpの概要説明
- 環境構築
- ハンズオン
- 質問など・・・

## Sass,gulpの概要説明
### Sass
[公式サイト](http://sass-lang.com/)
[オンラインエディタ](http://www.sassmeister.com/)

### gulp
[公式サイト](http://gulpjs.com/)
[プラグイン一覧](http://gulpjs.com/plugins/)


## 環境構築

### Macの方
[Homebrew](http://brew.sh/index_ja.html)をインストール
```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```


[Nodebrew](https://github.com/hokaccha/nodebrew)をインストール
```
$ curl -L git.io/nodebrew | perl - setup
```

パスを設定
```
$ export PATH=$HOME/.nodebrew/current/bin:$PATH
```

環境を適用
```
$ source ~/.bashrc
```

Nodebrewでインストールできるバージョンを確認
```
$ nodebrew install stable
```

利用したいバージョンをインストール
```
$ nodebrew install-binary v6.9.4
```

現在インストールされているバージョンを確認
```
$ nodebrew ls
```

使用するバージョンを指定する
```
$ nodebrew use v6.9.4
```

Nodeのバージョン確認
```
$ node -v
```

使用したいバージョンが表示されれば環境構築完了

### Windowsの方

- [git bash](https://git-scm.com/)を導入
- [Python](https://www.python.org/downloads/)を導入
- [Ruby](https://rubyinstaller.org/)を導入

[nodist](https://github.com/marcelklehr/nodist)をダウンロードする
- [参考URL](http://qiita.com/t_kojima/items/780b3b3133a17cceb175nodistnodist)

### gulpのインストール

ホームディレクトリ上で下記コマンドを実行し、グローバル環境にgulpを導入する
```
$ npm install -g gulp
```
package.jsonを作成する
```
$ npm init 
```

プロジェクト環境にgulpをインストールする
```
npm install --save-dev gulp
```