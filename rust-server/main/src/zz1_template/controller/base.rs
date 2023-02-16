/**
 * 路由和传参
 */
use axum::{
    extract::Json,
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
            "/json",
            Router::new()
                .route("/get", get(json::template))
                .route("/post", get(json_post)),
            // .route("/put", get(json1))
            // .route("/patch", get(json1))
            // .route("/delete", get(json1))
        );
    // .nest("/json", Router::new().route("/get", get(json_get)));

    api_routes
}

mod json {
    use axum::Json;
    pub async fn template() -> Json<serde_json::Value> {
        let json: serde_json::Value =
            serde_json::from_str(r#"{"id":0,"info":"template"}"#).unwrap();
        axum::extract::Json(json)
    }
}

/**
 * 简单无参数
 * 返回 json
 */
async fn template() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":0,"info":"template"}"#).unwrap();
    Json(json)
}
// json
async fn json_get() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}
// http://127.0.0.1:8800/template/
async fn json_post() -> Json<Value> {
    service::base::test();
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}
