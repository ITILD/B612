use axum::Router;

/**
 * 模板模块
 */
mod controller;
pub mod service;
pub mod entity;
pub mod common;

pub fn route() -> Router { 
    let mut router = Router::new();
    router = router.merge(controller::base::init());
    router = Router::new().nest("/page",router);
    return router
}