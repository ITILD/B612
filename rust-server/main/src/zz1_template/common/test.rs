use sea_orm::{entity::{prelude::*}, Database};
use super::super::entity_test::user;
pub async fn test0() {
    println!("test start!!!!!!!!!!");
    const DATABASE_URL: &str = "sqlite://db/test_tempalte.db";
    let db = Database::connect(DATABASE_URL)
        .await
        .expect("连接数据库失败");
    // Find by primary key
    let cheese: Option<user::Model> = user::Entity::find_by_id(1).one(&db).await?;
    println!("test end!!!!!!!!!!")
}