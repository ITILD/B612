use axum::{
    extract::Json,
    routing::{get, post},
    Router,
};
use serde_json::Value;

/***************************************************** controller router *****************************************************/
pub fn init() -> Router {
    // 路由 base
    return Router::new().route("/user", get(get_json).post(post_json));
}


/***************************************************** controller api(restful) *****************************************************/
async fn get_json() -> Json<Value> {
    Json(serde_json::from_str(r#"{"id":0,"info":"get"}"#).unwrap())
}
async fn post_json() -> Json<Value> {
    Json(serde_json::from_str(r#"{"id":0,"info":"get"}"#).unwrap())
}
