use axum::extract::Json;
use axum::{routing::get, Router};
use serde::Serialize;
use std::str::FromStr;
use std::{env, net::SocketAddr};
// controller
mod zz1_template;
mod zz0_test;
/**
 * 参考spring 约定大于配置
 */
#[tokio::main]
async fn main() {
    
    zz1_template::common::test::test0().await;
    zz0_test::fn_test::test::test0().await;
    // ip 端口
    dotenvy::dotenv().ok();
    let host = env::var("HOST").expect("HOST is not set in .env file");
    let port = env::var("PORT").expect("PORT is not set in .env file");
    let server_url = SocketAddr::from_str(&format!("{host}:{port}")).unwrap();
    // let server_url = SocketAddr::from(([127, 0, 0, 1], 8800));

    println!("connect success\nlistening on http://{}", server_url);

    /* 路由*/
    // controller 子路由
    let base = zz1_template::controller::base::start();
    let openapi = zz1_template::controller::openapi::start();
    // 根路由
    let app = Router::new()
        .route("/", get(root_json))
        .nest("/zz1_template", Router::new().nest("/base", base))
        .nest("/zz1_template", Router::new().nest("/openapi", openapi));

    axum::Server::bind(&server_url)
        .serve(app.into_make_service())
        .await
        .unwrap();


}

#[derive(Serialize)]
struct Info {
    email: String,
    date: i32,
}
async fn root_json() -> Json<Info> {
    Json(Info {
        email: "geolifestudy@gmail.com".to_string(),
        date: 20230215,
    })
}


// #[get("/")]
use axum::response::Html;
async fn root_html() -> Html<&'static str> {
    Html("<h1>connect login</h1>")
}
