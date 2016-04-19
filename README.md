# Source-Code Rest-API

##Requirements
* Node, npm, MySql

##Description
Rest api dibuat menggunakan NodeJs dan database MySql. Tedapat dua API yaitu:
###/cart
Pada API ini support untuk request method Get,Post, dan Delete cart(barang yang akan dibeli)
###/total-purchase
Pada API ini digunakan untuk menghitung total pembayaran tetapi terdapat juga perhitungan diskon sebelum dibayar.

##Installation

* Clone the repo : git clone  https://github.com/alifsn/Source-Code.git
* Buat schema database menggunakan query sql pada file db_store.sql
* Pastikan sebelum menjalankan aplikasi, sudah terhubung dengan internet, koneksi internet dibutuhkan untuk koneksi ke database lokal
* Start the server : node Server.js atau dapat juga dijalankan dengan 'npm start'
