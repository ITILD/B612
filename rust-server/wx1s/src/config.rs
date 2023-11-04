/**
 * 总体配置
 * 1. 路由
 */
use axum::Router;
use tower_http::set_status::SetStatus;
use std::str::FromStr;
use std::{env, net::SocketAddr};
// 静态文件
use crate::page;
use crate::project_template;
use tower_http::services::{ServeDir, ServeFile};

//  1.路由
/**
 * IP和路由配置
 */
pub async fn route() {
    // 根路由
    let mut router:Router = Router::new();
    router = router.merge(project_template::route()); // 子路由
    router = router.merge(page::route()); // 子路由

    // 静态文件夹 http://127.0.0.1:8800/ --> resources/static/index.html
    let serve_dir: ServeDir<SetStatus<ServeFile>> = ServeDir::new("resources/static")
        .not_found_service(ServeFile::new("resources/static/404.html"));
    let router_static: Router = Router::new()
        .nest_service("/", serve_dir.clone())
        .fallback_service(serve_dir);
    router = router.merge(router_static); // 子路由

    // 设置ip
    ip_set(router).await; 
}

/**
 * 设置ip
 */
async fn ip_set(router: Router) {
    // ip 端口
    dotenvy::dotenv().ok();
    let host: String = env::var("HOST").expect("HOST is not set in .env file");
    let port: String = env::var("PORT").expect("PORT is not set in .env file");

    // let server_url = SocketAddr::from(([127, 0, 0, 1], 8800));
    let server_url: SocketAddr = SocketAddr::from_str(&format!("{host}:{port}")).unwrap();
    println!("connect success\nlistening on http://{}", server_url);
    axum::Server::bind(&server_url)
        .serve(router.into_make_service())
        .await
        .unwrap();
}
