// let user_routes = Router::new().route("/:id", get(|| async {}));

// let team_routes = Router::new().route("/", post(|| async {}));

// let api_routes = Router::new()
//     .nest("/users", user_routes)
//     .nest("/teams", team_routes);
use axum::{routing::get, routing::post, Router};
// pub fn base(router: Router) -> Router {
pub fn base() -> Router {
    println!("conrooler {}", "base");
    let user_routes = Router::new().route("/:id", get(|| async {}));
    let team_routes = Router::new().route("/", post(|| async {}));
    // 父 路由
    let api_routes = Router::new()
        .nest("/users", user_routes)
        .nest("/teams", team_routes);

    api_routes
}
