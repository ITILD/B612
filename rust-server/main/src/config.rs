/**
 * 总体配置
 * 1. 路由
 */
use axum::extract::Json;
use axum::{routing::get, Router};
use serde::Serialize;
use std::str::FromStr;
use std::{env, net::SocketAddr};

use crate::zz1_template;

//  1.路由
/**
 * IP和路由配置
 */
pub async fn route() {
    let mut router = Router::new().route("/", get(root_json)); // 根路由
    router = router.merge(zz1_template::route()); // 子路由
    ip_set(router).await; // 设置ip
}

async fn ip_set(router: Router) {
    // ip 端口
    dotenvy::dotenv().ok();
    let host = env::var("HOST").expect("HOST is not set in .env file");
    let port = env::var("PORT").expect("PORT is not set in .env file");
    // let server_url = SocketAddr::from(([127, 0, 0, 1], 8800));
    let server_url = SocketAddr::from_str(&format!("{host}:{port}")).unwrap();
    println!("connect success\nlistening on http://{}", server_url);
    axum::Server::bind(&server_url)
        .serve(router.into_make_service())
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
// use axum::response::Html;
// async fn root_html() -> Html<&'static str> {
//     Html("<h1>connect login</h1>")
// }