use crate::{zz1_template, zz0_test};

pub async fn init() {
    let _ = zz1_template::common::test::test0().await;
    let _ = zz0_test::fn_test::test::test0().await;
}
