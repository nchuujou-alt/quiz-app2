# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

- プロジェクト名: quiz-app
- 内容: 一般常識クイズアプリ
- 技術スタック: HTML / CSS / JavaScript(素のフロントエンド構成。フレームワークやビルドツールは使用しない想定)

## 現在の状態

このリポジトリはまだ初期段階で、ソースコードは存在しない。ビルド・lint・テストなどのコマンドは未整備のため、今後コードやツールを追加した際には、このファイルにコマンドとアーキテクチャ情報を追記すること。

## 開発時の方針

- HTML/CSS/JavaScriptのみで完結するシンプルな構成を維持する(特別な理由がない限り、ビルドステップやフレームワークを追加しない)。
- ブラウザで `index.html` を直接開く、またはローカルサーバー(例: `npx serve` や VSCode の Live Server 等)で動作確認する運用を想定する。
