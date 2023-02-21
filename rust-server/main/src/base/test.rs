
use serde_json::Value;

use axum::{response::Html};
async fn login() -> Html<&'static str> {
    Html("<h1>connect login</h1>")
}
async fn json() -> Json<Value> {
    let json: Value = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    Json(json)
}

// async fn test() -> Json<String> {
async fn test()  {
    // let base = template::base::base();
    // // 将 HashMap 转换为 JSON 字符串
    // let json_str = serde_json::to_string(&base).unwrap();
    // Json(json_str)
    // // axum::Json(json_str)
    // // 将 JSON 字符串转换为 HashMap
    // // let data: HashMap<String, i32> = from_str(&json_str).unwrap();
}



// 待定
// mod json {
//     use axum::Json;
//     pub async fn template() -> Json<serde_json::Value> {
//         let json: serde_json::Value =
//             serde_json::from_str(r#"{"id":0,"info":"template"}"#).unwrap();
//         axum::extract::Json(json)
//     }
// }

    // async fn post() -> String {
    //     service::base::test();
    //     let str  = serde_json::from_str(r#"{"id":4,"name":"jiangb2"}"#).unwrap();
    //     str
    // }