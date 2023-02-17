use super::super::service;
use axum::{
    extract::{Json, Query},
    routing::{get, post},
    Router,
};
use serde_json::Value;
use std::collections::HashMap;

// pub fn base(router: Router) -> Router {
pub fn start() -> Router {
    // 路由
    let api_routes = Router::new()
        // http://127.0.0.1:8800/zz1_template/base/get
        .route("/get", get(BaseController::get))
        .route("/post", get(BaseController::post))
        .route(
            "/get_params",
            get(BaseController::get_params), // .route("/get_params", get(base::post)),
                                             // .route("/put", get(base::get))
                                             // .route("/patch", get(json1))
                                             // .route("/delete", get(json1))
        );
    api_routes
}

/**
 * restful 端口样式
 * http://127.0.0.1:8800/zz1_template/base/get
 */
struct BaseController;
impl BaseController {
    async fn get() -> Json<Value> {
        let json: Value = serde_json::from_str(r#"{"id":0,"info":"base get"}"#).unwrap();
        Json(json)
    }
    // async fn post() -> String {
    //     service::base::test();
    //     let str  = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    //     str
    // }
    async fn post() -> String {
        service::base::test();
        let strThis = "base post1";
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
