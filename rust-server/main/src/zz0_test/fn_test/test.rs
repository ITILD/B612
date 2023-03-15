use super::super::entity_test::user;
use sea_orm::{entity::prelude::*, Database};
pub async fn test0() -> Result<(), DbErr> {
    println!("test start!!!!!!!!!!");
    const DATABASE_URL: &str = "sqlite://db/test_tempalte.db";
    let db = Database::connect(DATABASE_URL)
        .await
        .expect("连接数据库失败");
    // Find by primary key
    let user_option: Option<user::Model> = user::Entity::find_by_id(1).one(&db).await?;

    match user_option {
        Option::Some(user) => {
            println!("{}", user.id);
            println!("ID: {:?}", user);
        }
        Option::None => {
            println!("user is nothing");
        }
    }
    // println!("ID: {:?}", user);

    // Closing connection here
    // 连接将在丢弃时自动关闭。若要显式关闭连接，请调用该方法。close
    // db.close().await?;

    Ok(())
}
