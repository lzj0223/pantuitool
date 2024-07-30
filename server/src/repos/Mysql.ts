import "reflect-metadata"
import { DataSource } from "typeorm"
import EnvVars from "../common/EnvVars"

export default new DataSource({
    type: "mysql",
    host: EnvVars.Mysql.Host,
    port: EnvVars.Mysql.Port,
    username: EnvVars.Mysql.User,
    password: EnvVars.Mysql.Password,
    database: EnvVars.Mysql.Database,
    synchronize: true,
    logging: true,
    entities: [
        "src/model/mysql/**/*.ts"
    ],
    migrations: [
        "src/migration/mysql/**/*.ts"
    ],
    subscribers: [],
    extra: {
        connectionLimit: 3 // 设置连接池的最大连接数
    }
})
