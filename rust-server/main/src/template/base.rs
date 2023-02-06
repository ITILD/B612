// 我们不需要使用 use 指令来使用 axum - 它在项目下的文件全局可用，
// 因为它在 Cargo.toml 中被声明为依赖（rust 2018之前的版本则不是这样）
use axum::extract::Json;
use std::collections::HashMap;
pub fn base() -> HashMap<&'static str, &'static str> {
    let mut scores = HashMap::new();
    // test
    let const_temp = "固定";
    // 当前变量指定内存地址发生改变
    let mut let_temp = "可变_未改变";
    let_temp = "可变_改变";

    // print
    scores.insert("const_temp", const_temp);
    scores.insert("let_temp", let_temp);

    println!("{:?}", scores);
    // println!("{:?}", Json(scores));//内部moved
    println!("{:?}", Json(&scores));

    scores
}
