use axum::extract::Json;
use axum::{routing::get, Router};
use serde::Serialize;
use std::net::SocketAddr;
// controller
mod zz1_template;

#[tokio::main]
async fn main() {
    // ip 端口
    let server_url = SocketAddr::from(([127, 0, 0, 1], 8800));
    println!("connect success\nlistening on http://{}", server_url);

    /* 路由*/
    // controller 子路由
    let base = zz1_template::controller::base::start();
    // 根路由
    let app = Router::new()
        .route("/", get(root_handler))
        .nest("/zz1_template", Router::new().nest("/base", base));

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

async fn root_handler() -> Json<Info> {
    Json(Info {
        email: "geolifestudy@gmail.com".to_string(),
        date: 20230215,
    })
}
