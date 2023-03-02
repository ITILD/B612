
use serde::Deserialize;

#[derive(Deserialize,Default)]
pub struct BaseInfoOpt {
    pub id: Option<i8>,
    pub info: Option<String>,
}