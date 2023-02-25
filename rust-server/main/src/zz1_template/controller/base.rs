use super::super::entity::base::*;
use super::super::service::base::*;
use axum::{
    extract::{Json, Path, Query},
    http::HeaderMap,
    routing::{get, post},
    Form, Router,
};
use serde_json::Value;
use std::collections::HashMap;

/***************************************************** controller router *****************************************************/
pub fn start() -> Router {
    // 路由
    let api_routes = Router::new()
        // http://127.0.0.1:8800/zz1_template/base/get
        .route("/get", get(BaseController::get))
        .route("/get_str", get(BaseController::get_str))
        .route("/get_params", get(BaseController::get_params))
        .route(
            "/get_params_return_str",
            get(BaseController::get_params_query_return_str),
        )
        .route(
            "/get_params_return_str/:id/:info",
            get(BaseController::get_params_path_return_str),
        )
        .route(
            "/get_params_return_str",
            post(BaseController::post_params_form_return_str),
        )
        .route(
            "/post_params_json_return_str",
            post(BaseController::post_params_json_return_str),
        )
        .route("/get_all_headers", get(BaseController::get_all_headers));
    api_routes
}

/***************************************************** controller api(restful) *****************************************************/
struct BaseController;
impl BaseController {
    async fn get() -> Json<Value> {
        Json(serde_json::from_str(r#"{"id":0,"info":"get"}"#).unwrap())
    }

    async fn get_str() -> String {
        let str_this = "1 post";
        str_this.to_owned()
    }

    /**
     * http://127.0.0.1:8800/zz1_template/base/get_params?name=wxwxwx&keyword=axum.rs
     * 不建议map 维护困难
     */
    async fn get_params(Query(mut params): Query<HashMap<String, String>>) -> String {
        let name = params.remove("name").unwrap();
        println!("{:#?}", name);
        name
    }
    /**
     * http://127.0.0.1:8800/zz1_template/base/get_params_return_str?id=22&info=info0
     * Deserialize 必须实现
     */
    async fn get_params_query_return_str(Query(args): Query<BaseInfoOpt>) -> String {
        let id = args.id.unwrap_or(0);
        let info = args.info.unwrap_or("nothing".to_string());
        format!("id {}, info: {} of subjects", id, info)
    }
    /**
     * http://127.0.0.1:8800/zz1_template/base/get_params_return_str/22/info0
     * Deserialize 必须实现
     */
    async fn get_params_path_return_str(Path(args): Path<BaseInfoOpt>) -> String {
        let id = args.id.unwrap_or(0);
        let info = args.info.unwrap_or("nothing".to_string());
        format!("id {}, info: {} of subjects", id, info)
    }
    /**
     * http://127.0.0.1:8800/zz1_template/base/get_params_return_str
     * Deserialize 必须实现
     */
    async fn post_params_form_return_str(Form(args): Form<BaseInfoOpt>) -> String {
        let id = args.id.unwrap_or(0);
        let info = args.info.unwrap_or("nothing".to_string());
        format!("id {}, info: {} of subjects", id, info)
    }
    /**
     * http://127.0.0.1:8800/zz1_template/base/get_params_return_str
     * Deserialize 必须实现
     */
    async fn post_params_json_return_str(Json(args): Json<BaseInfoOpt>) -> String {
        let id = args.id.unwrap_or(0);
        let info = args.info.unwrap_or("nothing".to_string());
        format!("id {}, info: {} of subjects", id, info)
    }

    async fn get_all_headers(headers: HeaderMap) -> String {
        format!("{:?}", headers)
    }
}

/***************************************************** to delete *****************************************************/
/***************************************************** controller todo *****************************************************/
// #[derive(Deserialize)]
// pub struct BaseInfoOpt {
//     pub id: Option<i8>,
//     pub info: Option<String>,
// }

/***************************************************** controller test *****************************************************/
// todo
//  service::base::test();
