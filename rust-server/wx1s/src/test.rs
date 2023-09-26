use crate::{project_template, zz0_test};

pub async fn init() {
    let _ = project_template::common::test::test0().await;
    let _ = zz0_test::fn_test::test::test0().await;
}
