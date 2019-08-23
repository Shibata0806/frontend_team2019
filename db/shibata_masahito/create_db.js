//起動時に必要なDBとテーブルの作成を行います
import sqlite3 from 'sqlite3'
const sqlite = sqlite3.verbose()

const db = new sqlite.Database('db/shibata_masahito/shibata_masahito.db')

db.serialize(function() {

    // テーブルがなければ作成
    let ddl = `
        CREATE TABLE IF NOT EXISTS my_name(
            id INT PRIMARY KEY,
            name TEXT,
            age INT
        )
    `
    db.run(ddl)
    // 必要であればプリペアードステートメントで初期データを挿入
    let stmt = db.prepare('INSERT OR REPLACE INTO my_name VALUES(?,?,?)');
    stmt.run([1,"柴田 昌人", 30]);
    stmt.finalize();
});

db.close();