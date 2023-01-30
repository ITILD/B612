use axum::extract::Json;
use axum::{response::Html, routing::get, Router};
use serde_json::Value;
use std::net::SocketAddr;

#[tokio::main]
async fn main() {
    // build our application with a route
    let app = Router::new()
        .route("/", get(handler))
        .route("/login", get(login))
        .route("/json", get(json));

    // run it
    let addr = SocketAddr::from(([127, 0, 0, 1], 8800));
    println!("listening on {}", addr);

    let start_information = "connect startInformation";
    println!("{}", start_information);
    axum::Server::bind(&addr)
        .serve(app.into_make_service())
        .await
        .unwrap();

    println!("{}!", start_information);
}

async fn handler() -> Html<&'static str> {
    Html("<h1>connect</h1>")
}
async fn login() -> Html<&'static str> {
    Html("<h1>connect login</h1>")
}
async fn json() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}
