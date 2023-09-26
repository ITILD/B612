# 
Rustfmt 格式化工具可确保一致的编码风格 


```sh
cargo build

# 添加热部署
cargo install cargo-watch

# 添加依赖
cargo add
# 添加依赖
cargo add 库 --features ""

# 更新依赖

# env监测
cargo add dotenvy


# 添加数据库版本和迁移工具
cargo install sea-orm-cli

# 然后，通过执行 来设置迁移目录。
sea-orm-cli migrate init



# 安装SeaCli工具。SeaCli是一个命令行工具，用于根据现有数据库生成SeaORM代码。
cargo install sea-cli --features sqlite

# 使用SeaCli生成SeaORM代码。以下是示例命令：
# Generate entity files of database `bakery` to `entity/src`
sea-orm-cli generate entity -u sqlite://db/test_tempalte.db -o src/project_template/entity_test
```