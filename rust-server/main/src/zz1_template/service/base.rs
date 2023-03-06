// use super::super::entity::base::*;
// use axum::extract::Json;
// use std::collections::HashMap;

// pub fn test() {
//     println!("test");
// }

// pub fn var_test() -> HashMap<&'static str, &'static str> {
//     let mut scores = HashMap::new();
//     // test
//     let const_temp = "固定";
//     // 当前变量指定内存地址发生改变
//     // let mut let_temp = "可变_未改变";
//     let let_temp = "可变_未改变";

//     // print
//     scores.insert("const_temp", const_temp);
//     scores.insert("let_temp", let_temp);

//     println!("{:?}", scores);
//     // println!("{:?}", Json(scores));//内部moved
//     println!("{:?}", Json(&scores));

//     scores
// }
