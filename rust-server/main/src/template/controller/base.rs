use axum::{
    extract::Json,
    routing::{get, post},
    Router,
};
use serde_json::Value;
// pub fn base(router: Router) -> Router {
pub fn base() -> Router {
    // 路由
    let api_routes = Router::new()
        .nest("/teams", Router::new().route("/", post(|| async {})))
        .nest(
            "/json",
            Router::new()
                .route("/get", get(json))
                .route("/post", get(json1))
                // .route("/put", get(json1))
                // .route("/patch", get(json1))
                // .route("/delete", get(json1))
        );
    api_routes
}

async fn json() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}

async fn json1() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}
