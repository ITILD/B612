use sea_orm::{entity::{prelude::*}, Database};
use super::super::entity_test::user;
pub async fn test0()-> Result<(), DbErr>{
    println!("test start!!!!!!!!!!");
    const DATABASE_URL: &str = "sqlite://db/test_tempalte.db";
    let db = Database::connect(DATABASE_URL)
        .await
        .expect("连接数据库失败");
    // Find by primary key
    let user: Option<user::Model> = user::Entity::find_by_id(1).one(&db).await?;

    match user {
        Option::Some(something) => {
            println!("{}", something.id);
        },
        Option::None => {
            println!("user is nothing");
        }
    }
    // println!("ID: {:?}", user);

    Ok(())

}