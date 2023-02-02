use axum::extract::Json;
use axum::{response::Html, routing::get, Router};
use serde::Serialize;
use serde_json::Value;
use std::net::SocketAddr;
mod template;

#[tokio::main]
async fn main() {
    // build our application with a route
    let app = Router::new()
        .route("/", get(handler))
        .route("/login", get(login))
        .route("/json", get(json))
        .route("/test", get(test));

    // run it
    let addr = SocketAddr::from(([127, 0, 0, 1], 8800));
    // 快捷调试跳转
    println!("listening on http://{}", addr);
    let start_information = "connect startInformation";
    println!("{}", start_information);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();

    println!("{}!", start_information);
}


#[derive(Serialize)]
struct Info {
    web_site: String,
    email: String,
    level: i32,
}

async fn handler() -> Json<Info> {
    let info = Info {
        web_site: "https://axum.rs".to_string(),
        email: "team@axum.rs".to_string(),
        level: 123,
    };
    Json(info)
}

async fn login() -> Html<&'static str> {
    Html("<h1>connect login</h1>")
}
async fn json() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}


async fn test() ->Json<HashMap<String,String>> {
    template::base::base();
}