use serde::Deserialize;

#[derive(Deserialize)]
pub struct BaseInfoOpt {
    pub id: Option<i8>,
    pub info: Option<String>,
}