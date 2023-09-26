use super::super::entity::base::{BaseInfoOpt};
// use super::super::service::base::*;
use axum::{
    extract::{Json, Path, Query},
    http::HeaderMap,
    routing::{get, post},
    Form, Router,
};
// use sea_orm::entity::prelude::*;
// use sea_orm::DeriveEntityModel;
// use sea_orm::{entity::prelude::*, Database};
// use serde::{Deserialize, Serialize};
use serde_json::Value;
use std::collections::HashMap;

/***************************************************** controller router *****************************************************/
pub fn init() -> Router {
    // 路由
    let api_routes = Router::new()
        // http://127.0.0.1:8800/page/base/get
        .route("/get", get(get_json))
       ;
    api_routes
}

/***************************************************** controller api(restful) *****************************************************/
async fn get_json() -> Json<Value> {
    Json(serde_json::from_str(r#"{"id":0,"info":"get"}"#).unwrap())
}

async fn get_str() -> String {
    let str_this = "1 post";
    str_this.to_owned()
}

/**
 * http://127.0.0.1:8800/project_template/base/get_params?name=wxwxwx&keyword=axum.rs
 * 不建议map 维护困难
 */
async fn get_params(Query(mut params): Query<HashMap<String, String>>) -> String {
    let name = params.remove("name").unwrap();
    println!("{:#?}", name);
    name
}
/**
 * http://127.0.0.1:8800/project_template/base/get_params_return_str?id=22&info=info0
 * Deserialize 必须实现
 */
async fn get_params_query_return_str(Query(args): Query<BaseInfoOpt>) -> String {
    let id = args.id.unwrap_or(0);
    let info = args.info.unwrap_or("nothing".to_string());
    format!("id {}, info: {} of subjects", id, info)
}
/**
 * http://127.0.0.1:8800/project_template/base/get_params_return_str/22/info0
 * Deserialize 必须实现
 */
async fn get_params_path_return_str(Path(args): Path<BaseInfoOpt>) -> String {
    let id = args.id.unwrap_or(0);
    let info = args.info.unwrap_or("nothing".to_string());
    format!("id {}, info: {} of subjects", id, info)
}
/**
 * http://127.0.0.1:8800/project_template/base/get_params_return_str
 * Deserialize 必须实现
 */
async fn post_params_form_return_str(Form(args): Form<BaseInfoOpt>) -> String {
    let id = args.id.unwrap_or(0);
    let info = args.info.unwrap_or("nothing".to_string());
    format!("id {}, info: {} of subjects", id, info)
}
/**
 * http://127.0.0.1:8800/project_template/base/get_params_return_str
 * Deserialize 必须实现
 */
async fn post_params_json_return_str(Json(args): Json<BaseInfoOpt>) -> String {
    let id = args.id.unwrap_or(0);
    let info = args.info.unwrap_or("nothing".to_string());
    format!("id {}, info: {} of subjects", id, info)
}
/**
 * http://127.0.0.1:8800/project_template/base/get_params_return_str
 * Deserialize 必须实现
 */
// async fn post_params_json_return_object(Json(args): Json<BaseInfoOpt>) -> BaseInfoOpt {
//     let id = args.id.unwrap_or(0);
//     let info = args.info.unwrap_or("nothing".to_string());
//     let mut base_info_opt = BaseInfoOpt::default();
//     base_info_opt.id = Some(id + 1);
//     // base_info_opt.info = Some("some info".to_string());
//     base_info_opt.info = Some(info.to_string());
//     base_info_opt
// }

async fn get_all_headers(headers: HeaderMap) -> String {
    format!("{:?}", headers)
}

// const DATABASE_URL: &str = "sqlite://seaorm.db";
// #[derive(Clone, Debug, PartialEq, DeriveEntityModel, Serialize, Deserialize)]
// #[sea_orm(table_name = "user")]
// pub struct Model {
//     #[sea_orm(primary_key)]
//     pub id: i32,
//     pub name: String,
//     #[sea_orm(column_type = "Text")]
//     pub password: String,
// }

// #[derive(Copy, Clone, Debug, EnumIter, DeriveRelation)]
// pub enum Relation {}

// impl ActiveModelBehavior for ActiveModel {}
// http://127.0.0.1:8800/project_template/base/get_user_db
async fn get_user_db(headers: HeaderMap) -> String {
    // get_user_db_c();
    format!("{:?}", headers)
}

// async fn get_user_db_c() -> Result<DbConn, DbErr> {
//     let db = Database::connect(DATABASE_URL)
//         .await
//         .expect("连接数据库失败");
//     // Migrator::up(&db, None)
//     //     .await
//     //     .expect("迁移失败");

//     println!("connect  {}",  format!("{:?}", db));
//     Ok(db)
// }

/***************************************************** to delete *****************************************************/
/***************************************************** controller todo *****************************************************/
// #[derive(Deserialize)]
// pub struct BaseInfoOpt {
//     pub id: Option<i8>,
//     pub info: Option<String>,
// }

/***************************************************** controller test *****************************************************/
// todo
//  service::base::test();
