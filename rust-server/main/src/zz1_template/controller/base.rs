use std::collections::HashMap;

/**
 * 路由和传参
 */
use axum::{
    extract::{Json, Query},
    routing::{get, post},
    Router,
};
use serde_json::Value;
//
use super::super::service;

// pub fn base(router: Router) -> Router {
pub fn start() -> Router {
    // 路由
    let api_routes = Router::new()
        // 当前路由
        // 模板 http://127.0.0.1:8800/zz1_template/base/template0/template1
        .nest(
            "/template0",
            Router::new().route("/template1", get(template)),
        )
        .nest(
            "/json_simple",
            Router::new()
                .route("/get", get(JsonSimple::get))
                .route("/post", get(JsonSimple::post))
                .route("/get_params", get(JsonSimple::get_params)), // .route("/get_params", get(JsonSimple::post)),
                                                                    // .route("/put", get(JsonSimple::get))
                                                                    // .route("/patch", get(json1))
                                                                    // .route("/delete", get(json1))
        );
    api_routes
}

/**
 * 简单无参数
 * 返回 json
 */
async fn template() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":0,"info":"template"}"#).unwrap();
    Json(json)
}

/**
 * restful 端口样式
 * http://127.0.0.1:8800/zz1_template/base/json_simple
 */
struct JsonSimple;
impl JsonSimple {
    async fn get() -> Json<Value> {
        let json: Value = serde_json::from_str(r#"{"id":0,"info":"JsonSimple get"}"#).unwrap();
        Json(json)
    }
    // async fn post() -> String {
    //     service::base::test();
    //     let str  = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    //     str
    // }
    async fn post() -> String{
        service::base::test();
        let strThis =  "JsonSimple post1";
        strThis.to_owned()
    }
    // http://127.0.0.1:8800/zz1_template/base/json_simple/get_params?name=wxwxwx&keyword=axum.rs
    async fn get_params(Query(mut params): Query<HashMap<String, String>>) -> String {
        let name = params.remove("name").unwrap();
        println!("{:#?}", name);
        name
    }
}

// 待定
// mod json {
//     use axum::Json;
//     pub async fn template() -> Json<serde_json::Value> {
//         let json: serde_json::Value =
//             serde_json::from_str(r#"{"id":0,"info":"template"}"#).unwrap();
//         axum::extract::Json(json)
//     }
// }
