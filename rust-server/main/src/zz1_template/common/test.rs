use sea_orm::{entity::{prelude::*, self}, Database};
// EnumIter, DeriveRelation, ActiveModelBehavior
use serde::{Deserialize, Serialize};

pub async fn test0() {
    println!("test start!!!!!!!!!!");
    const DATABASE_URL: &str = "sqlite://db/test_tempalte.db";
    let db = Database::connect(DATABASE_URL)
        .await
        .expect("连接数据库失败");
    // Find by primary key
    let cheese: Option<entity::user::Model> = entity::user::Entity::find_by_id(1).one(db).await?;
    println!("test end!!!!!!!!!!")
}

#[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
#[sea_orm(table_name = "user")]
pub struct Model {
    #[sea_orm(primary_key)]
    pub id: i32,
    // #[sea_orm(column_name = "name")]
    pub name: String,
    #[sea_orm(column_type = "Text")]
    pub password: String,
}

#[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
pub enum Relation {}
impl ActiveModelBehavior for ActiveModel {}
