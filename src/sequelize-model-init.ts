import {
  Sequelize,
  Table,
  Column,
  Model,
  AutoIncrement,
  AllowNull,
  PrimaryKey,
  DataType,
  DeletedAt,
  Default,
  Unique
} from "sequelize-typescript";
import { Col } from "sequelize/types/lib/utils";

const sequelize = new Sequelize("mysql://root:xj1Ix6WzQENITbFR@127.0.0.1:3306/ghada");

interface Extra {
  income?: number;
  favorite?: string[];
}

@Table({ tableName: "temp", modelName: "Temp", initialAutoIncrement: "10000", updatedAt: false, deletedAt: true })
class Temp extends Model {
  // 用户ID，自增长全局唯一
  @AutoIncrement
  @AllowNull(false)
  @PrimaryKey
  @Column({ type: DataType.INTEGER.UNSIGNED, comment: "用户ID，自增长全局唯一" })
  id: number;

  // 用户名称，可以重复
  @Column(DataType.STRING(100))
  name: string;

  // E-mail 地址
  @Unique
  @Column(DataType.STRING(255))
  email: string;

  // extra info
  @Column(DataType.TEXT)
  get extra(): Extra {
    try {
      const val = this.getDataValue("extra");
      return JSON.parse(val);
    } catch (e) {
      console.error(e);
    }
    return {};
  }
  set extra(value: Extra) {
    this.setDataValue("extra", JSON.stringify(value));
  }

  @Default('enabled')
  @Column({ type: DataType.ENUM, values: ['enabled', 'disabled'], comment: '状态值' })
  status: 'enabled' | 'disabled';

  /** deletedAt 这个字段，需要单独定义，在 Table option里定义 deletedAt: true 不起作用, 这里设置了，Table option 就不需要了，依然可以生效 */
  @DeletedAt
  deletedAt: Date;
}

sequelize.addModels([Temp]);

(async () => {
  await Temp.sync();

  await Temp.create({
    name: 201212,
    email: "13740080@qq.com",
  });

  const temp = Temp.build(<Temp>{ email: 'hello@asdfa.com'});
  temp.name = 'redstone';
  temp.email = 'zhaoxiongfei@mlamp.cn';
  temp.extra = { income: 1000 };
  await temp.save();

  const user = await Temp.findByPk(1);
  if (!user) return;
  user.extra = { income: 2000 };
  user.name = "stonephp";
  user.email = "13740080@qq.com";
  await user.save();
  const json = user.toJSON();
  console.log(json);
})();
