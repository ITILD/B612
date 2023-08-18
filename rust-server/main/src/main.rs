mod test;
mod config;
mod zz0_test;
mod zz1_template;
/**
 * 参考spring 约定大于配置
 */
#[tokio::main]
async fn main() {
    // 测试
    test::init().await;
    // ip和路由配置
    
    config::route().await;

}

